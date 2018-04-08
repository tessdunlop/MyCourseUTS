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
using System.Web.UI.WebControls;
using System.Data;

namespace MyCourseUTS.API.Controllers
{
    public class PDFController : ApiController
    {
        //http://mycourseuts.azurewebsites.net/Services/api/pdf/getpdf?couseID=C10229
        //http://localhost:56437/api/pdf/getpdf?courseID=C10229
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        [HttpGet, HttpPost]
        public void getPDF(string courseID, string majorID = "empty")
        {
            List<DataModel.CourseRelationships> course;
            var context = new MyCourseDBEntities();
            IQueryable<CourseRelationships> query;

            if (majorID == "empty")
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
                sb.Append("<div><center><h2>" + majorID + "</h2></center></div><br/>");
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


            DataTable table = new DataTable();
            DataColumn column;
            DataRow row;

            int count = 0;

            List<Streams> streamList = new List<Streams>();
            List<SubMajors> SubMajorList = new List<SubMajors>();
            List<ChoiceBlocks> choiceBlockList = new List<ChoiceBlocks>();

            for (var i = 1; i < stage + 1; i++)
            {
                count = 0;
                column = new DataColumn();
                column.DataType = System.Type.GetType("System.String");
                column.ColumnName = "Stage " + i;
                table.Columns.Add(column);

                foreach (var c in course)
                {
                    string name = "";
                    string id = "";
                    string type = "";
                    string colour = "";
                    int credit = 0;

                    List<Subjects> preReq = new List<Subjects>();
                    List<Subjects> antiReq = new List<Subjects>();
                    List<Subjects> coReq = new List<Subjects>();
                    List<Subjects> choiceGroup = new List<Subjects>();

                    


                    string cor = "#bbd2f7";
                    string pp = "#d3bbf7";
                    string maj = "#f7bbbb";
                    string ele = "#f7f2bb";
                    string cds = "#ddf7bb";
                    string mele = "#f7dfbb";

                    if (c.Stage == i)
                    {
                        count++;
                        if (c.StreamID != null)
                        {
                            name = c.Streams.Name;
                            id = c.StreamID;
                            type = c.SubjectTypes.Abbreviation;
                            credit = c.Streams.CreditPoints;

                            bool exists = false;

                            foreach (var item in streamList) {
                                if (item.ID == id) {
                                    exists = true;
                                }
                            }
                            if (!exists) {
                                streamList.Add(c.Streams);
                            }                        
                        }
                        else if (c.ChoiceBlockID != null)
                        {
                            name = c.ChoiceBlocks.Name;
                            id = c.ChoiceBlockID;
                            type = c.SubjectTypes.Abbreviation;
                            credit = c.ChoiceBlocks.CreditPoints;

                            bool exists = false;

                            foreach (var item in choiceBlockList)
                            {
                                if (item.ID == id)
                                {
                                    exists = true;
                                }
                            }
                            if (!exists)
                            {
                                choiceBlockList.Add(c.ChoiceBlocks);
                            }

                             }
                        else if (c.SubMajorID != null)
                        {
                            name = c.SubMajors.Name;
                            id = c.SubMajorID;
                            type = c.SubjectTypes.Abbreviation;
                            credit = c.SubMajors.CreditPoints;

                            bool exists = false;

                            foreach (var item in SubMajorList)
                            {
                                if (item.ID == id)
                                {
                                    exists = true;
                                }
                            }
                            if (!exists)
                            {
                                SubMajorList.Add(c.SubMajors);
                            }

                              }
                        else if (c.GroupID != null)
                        {                           
                            name = "Choice";
                            id = "";
                            type = c.SubjectTypes.Abbreviation;
                            credit = 6;

                            SubjectGroupingController groupings = new SubjectGroupingController();
                            List<SubjectGroupingRelationships> groupRelationship = groupings.GetDataModelSubjectGroupingRelationship(c.GroupID.ToString());
                            foreach (var g in groupRelationship) {
                                choiceGroup.Add(g.Subjects);
                            }

                        }
                        else if (c.SubjectID != null)
                        {
                            name = c.Subjects.Name;
                            if (c.SubjectID == 0 || c.SubjectID == 1 || c.SubjectID == 2 || c.SubjectID == 3)
                            {
                                id = "";
                            }
                            else {
                                id = c.SubjectID.ToString();
                            }
                            
                            type = c.SubjectTypes.Abbreviation;
                            credit = c.Subjects.CreditPoints;

                            SubjectController subjectsRequisites = new SubjectController();
                            List<RequisiteRelationship> requisites = subjectsRequisites.GetDataModelSubjectRequisite(Convert.ToInt32(c.SubjectID));
                            foreach (var sub in requisites) {
                                if (sub.RequisiteTypeID == 1)
                                {
                                    preReq.Add(sub.Subjects1);
                                }
                                else if (sub.RequisiteTypeID == 2)
                                {
                                    antiReq.Add(sub.Subjects1);
                                }
                                else if (sub.RequisiteTypeID == 3)
                                {
                                    coReq.Add(sub.Subjects1);
                                }
                            }
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


                        string additionalInfo = "";

                        if (preReq.Count != 0) {
                            additionalInfo += "Pre-Requisites:\n";
                            foreach (var pre in preReq) {
                                additionalInfo += pre.ID + " - "+ pre.Name + "\n";
                            }
                        }
                        if (antiReq.Count != 0) {
                            additionalInfo += "Anti-Requisites:\n";
                            foreach (var anti in antiReq)
                            {
                                additionalInfo += anti.ID + " - " + anti.Name + "\n";
                            }
                        }
                        if (coReq.Count != 0) {
                            additionalInfo += "Co-Requisites:\n";
                            foreach (var co in coReq)
                            {
                                additionalInfo += co.ID + " - " + co.Name + "\n";
                            }
                        }
                        if (choiceGroup.Count != 0) {
                            additionalInfo += "Choose one of the following subjects:\n";
                            foreach (var g in choiceGroup) {
                                additionalInfo += g.ID + " - " + g.Name + "\n";
                            }
                           
                        }

                        string cellContent = id + "\n\n" + name + "\n\n" + credit + "\n\n" + type + "\n\n";
                        cellContent += additionalInfo;

                        if (count > table.Rows.Count)
                        {
                            row = table.NewRow();
                            row["Stage " + i] = cellContent;
                            table.Rows.Add(row);
                        }
                        else
                        {
                            for (var x = 0; x < table.Rows.Count; x++)
                            {
                                if (count - 1 == x)
                                {
                                    var tempRow = table.Rows[x];
                                    tempRow["Stage " + i] = cellContent;
                                }
                            }

                        }
                    }
                }
            }


            if (streamList.Count != 0) {
                foreach (var stream in streamList) {
                    StreamController stmControl = new StreamController();
                    List<StreamRelationships> stmTemp = stmControl.GetDataModelStreamRelationship(stream.ID);
                }
            }
            if (SubMajorList.Count != 0) {
                foreach (var subMajor in SubMajorList)
                {
                    SubMajorController smjControl = new SubMajorController();
                    List<SubMajorRelationships> smjTemp = smjControl.GetDataModelSubMajorRelationship(subMajor.ID);
                }
            }
            if (choiceBlockList.Count != 0) {
                foreach (var choiceBlock in choiceBlockList)
                {
                    ChoiceBlockController cbkControl = new ChoiceBlockController();
                    List<ChoiceBlockRelationships> cbkTemp = cbkControl.GetDataModelChoiceBlockRelationship(choiceBlock.ID);
                }
            }





            StringReader sr = new StringReader(sb.ToString());

            Document document = new Document(PageSize.A4.Rotate(), 10f, 10f, 10f, 0f);
            HTMLWorker htmlparser = new HTMLWorker(document);

            using (MemoryStream memoryStream = new MemoryStream())
            {
                PdfWriter writer = PdfWriter.GetInstance(document, memoryStream);
                document.Open();

                Font bodyFont = FontFactory.GetFont(FontFactory.HELVETICA, 10);
                Font titleFont = FontFactory.GetFont(FontFactory.HELVETICA, 14, Font.BOLD);

                PdfPTable pdfTable = new PdfPTable(table.Columns.Count);

                pdfTable.WidthPercentage = 90;

                pdfTable.WidthPercentage = 100;
                PdfPCell pdfColumn = new PdfPCell(new Phrase("Template"));
                pdfColumn.Colspan = table.Columns.Count;
                foreach (DataColumn col in table.Columns) {
                    PdfPCell cell = new PdfPCell(new Phrase(col.ColumnName, titleFont));
                    cell.HorizontalAlignment = Element.ALIGN_CENTER;
                    cell.BackgroundColor = BaseColor.LIGHT_GRAY;
                    cell.FixedHeight = 30f;
                    pdfTable.AddCell(cell);
                }

                for (var i = 0; i < table.Rows.Count; i++)
                {
                    for (var x = 0; x < table.Rows[i].ItemArray.Length; x++)
                    {
                        PdfPCell cell = new PdfPCell(new Phrase(table.Rows[i].ItemArray[x].ToString(), bodyFont));
                        //cell.BackgroundColor = BaseColor.YELLOW;
                        cell.HorizontalAlignment = Element.ALIGN_CENTER;
                        pdfTable.AddCell(cell);
                    }
                }

                htmlparser.Parse(sr);
                
                document.Add(pdfTable);
                document.Close();

                
                //document.Close();

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
