using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Transactions;
using System.Web.Http;
using MyCourseUTS.DataModel;
using MyCourseUTS.Manager;
using System.Web.Http.Cors;
using System.Web;
using iTextSharp.text;
using iTextSharp.text.pdf;
using System.Text;
using System.IO;
using iTextSharp.text.html.simpleparser;


namespace MyCourseUTS.API.Controllers
{
    public class PDFController : ApiController
    {
        //http://mycourseuts.azurewebsites.net/Services/api/pdf/getpdf?courseID=C10229
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [HttpGet, HttpPost]
        public void getPDF(string courseID, string majorID = "empty")
        {
            List<DataModel.CourseRelationships> course;
            var context = new MyCourseDBEntities();
            IQueryable<CourseRelationships> query;

            if (majorID != "empty")
            {//means that its a course relationship with a major               
                query = from c in context.CourseRelationships.Include("Courses.CourseTypes").Include("Subjects").Include("ChoiceBlocks").Include("SubjectTypes").Include("SubjectGroupings").Include("Majors").Include("ChoiceBlocks").Include("SubMajors")
                        where c.Courses.ID.Equals(courseID)
                        select c;
            }
            else
            {//just a course relationship
                query = from c in context.CourseRelationships.Include("Courses.CourseTypes").Include("Subjects").Include("ChoiceBlocks").Include("SubjectTypes").Include("SubjectGroupings").Include("Majors").Include("ChoiceBlocks").Include("SubMajors")
                        where c.Courses.ID.Equals(courseID) && c.MajorID.Equals(majorID)
                        select c;
                course = query.ToList();

            }
            course = query.ToList();

            StringBuilder sb = new StringBuilder();
            sb.Append("<div><center><h1>" + courseID + "</h1></center></div><br/>");
            if (majorID != "empty")
            {
                sb.Append("<div><center><h2>" + majorID + "</h2></center></div><br/><br/>");
            }

            int? stage = 0;
            foreach (var c in course)
            {
                if (c.Stage != null)
                {
                    if (c.Stage > stage)
                    {
                        stage = c.Stage;
                    }
                }
            }

            var stm = new List<string>();
            var cbk = new List<string>();
            var smj = new List<string>();
            var group = new List<int?>();

            for (var i = 1; i < stage + 1; i++)
            {
                sb.Append("<br/><div class='col-sm'><u><h4><center>Stage " + i + "</center></h4></u></div>");

                foreach (var c in course)
                {
                    string name = "";
                    string id = "";
                    string type = "";
                    string colour = "";
                    int credit = 0;

                    string cor = "#bbd2f7";
                    string pp = "#d3bbf7";
                    string maj = "#f7bbbb";
                    string ele = "#f7f2bb";
                    string cds = "#ddf7bb";
                    string mele = "#f7dfbb";

                    if (c.Stage == stage)
                    {
                        if (c.StreamID != null)
                        {
                            stm.Add(c.StreamID);
                            name = c.Streams.Name;
                            id = c.StreamID;
                            type = c.SubjectTypes.Abbreviation;
                            credit = c.Streams.CreditPoints;
                        }
                        else if (c.ChoiceBlockID != null)
                        {
                            stm.Add(c.ChoiceBlockID);
                            name = c.ChoiceBlocks.Name;
                            id = c.ChoiceBlockID;
                            type = c.SubjectTypes.Abbreviation;
                            credit = c.ChoiceBlocks.CreditPoints;
                        }
                        else if (c.SubMajorID != null)
                        {
                            stm.Add(c.SubMajorID);
                            name = c.SubMajors.Name;
                            id = c.SubMajorID;
                            type = c.SubjectTypes.Abbreviation;
                            credit = c.SubMajors.CreditPoints;
                        }
                        else if (c.GroupID != null)
                        {
                            group.Add(c.GroupID);
                            name = "Choice";
                            id = "" + c.GroupID + "";
                            type = c.SubjectTypes.Abbreviation;
                            credit = 6;
                        }
                        else if (c.SubjectID != null)
                        {
                            name = c.Subjects.Name;
                            id = "" + c.SubjectID + "";
                            type = c.SubjectTypes.Abbreviation;
                            credit = c.Subjects.CreditPoints;
                        }

                        if (type == "COR")
                        {
                            colour = cor;
                        }
                        else if (type == "PP")
                        {
                            colour = pp;
                        }
                        else if (type == "MAJ")
                        {
                            colour = maj;
                        }
                        else if (type == "ELE")
                        {
                            colour = ele;
                        }
                        else if (type == "CDS")
                        {
                            colour = cds;
                        }
                        else if (type == "MELE")
                        {
                            colour = mele;
                        }
                        sb.Append("</br><div><div class='row' style='height: 60px; border-top: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p><b>" + name + " </b>" + credit + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + id + "</p></div></div><div class='row' style='border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'><p>" + type + "</p></div></div><div class='row' style='border-bottom: thin solid black; border-left: thin solid black; border-right: thin solid black; background-color: " + colour + ";'><div class='col text-center'></div></div></div>");
                    }
                }
            }


            StringReader sr = new StringReader(sb.ToString());

            Document document = new Document(PageSize.A4, 10f, 10f, 10f, 0f);
            HTMLWorker htmlparser = new HTMLWorker(document);
            using (MemoryStream memoryStream = new MemoryStream())
            {
                PdfWriter writer = PdfWriter.GetInstance(document, memoryStream);
                document.Open();

                htmlparser.Parse(sr);
                document.Close();

                byte[] bytes = memoryStream.ToArray();
                memoryStream.Close();

                // Clears all content output from the buffer stream                 
                HttpContext.Current.Response.Clear();
                // Gets or sets the HTTP MIME type of the output stream.
                HttpContext.Current.Response.ContentType = "application/pdf";
                // Adds an HTTP header to the output stream
                HttpContext.Current.Response.AddHeader("Content-Disposition", "attachment; filename=template.pdf");

                //Gets or sets a value indicating whether to buffer output and send it after
                // the complete response is finished processing.
                HttpContext.Current.Response.Buffer = true;
                // Sets the Cache-Control header to one of the values of System.Web.HttpCacheability.
                HttpContext.Current.Response.Cache.SetCacheability(HttpCacheability.NoCache);
                // Writes a string of binary characters to the HTTP output stream. it write the generated bytes .
                HttpContext.Current.Response.BinaryWrite(bytes);
                // Sends all currently buffered output to the client, stops execution of the
                // page, and raises the System.Web.HttpApplication.EndRequest event.

                HttpContext.Current.Response.End();
                // Closes the socket connection to a client. it is a necessary step as you must close the response after doing work.its best approach.
                HttpContext.Current.Response.Close();
            }

        }

    }
}
