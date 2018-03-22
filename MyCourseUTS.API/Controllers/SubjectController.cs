using System;
using System.Collections.Generic;
using System.Data.Entity.SqlServer;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Transactions;
using System.Web.Http;
using MyCourseUTS.DataModel;
using MyCourseUTS.Entity;
using MyCourseUTS.Manager;

namespace MyCourseUTS.API.Controllers
{
    public class SubjectController : ApiController
    {
        //http://mycourseuts.azurewebsites.net/services/api/subject/getallsubjects
        public List<Subject> GetAllSubjects()
        {
            List<Subjects> subjects;
            var context = new MyCourseDBEntities();
            var query = from c in context.Subjects
                        where c.Active.Equals(true)
                        select c;
            subjects = query.ToList();

            List<Subject> listOfSubjects = new List<Subject>();
            foreach (var c in subjects)
            {
                listOfSubjects.Add(EntityMappingManager.MapSubjectContent(c));
            }
            return listOfSubjects;
        }

        //http://mycourseuts.azurewebsites.net/services/api/subject/getsubject?subjectid=13992
        public Subject GetSubject(int subjectID)
        {
            Subject subject;
            var context = new MyCourseDBEntities();
            var query = from c in context.Subjects
                        where c.ID.Equals(subjectID)
                        select c;
            subject = EntityMappingManager.MapSubjectContent(query.FirstOrDefault());
            return subject;
        }

        //http://mycourseuts.azurewebsites.net/services/api/subject/getsubjectrequisite?subjectid=13992
        public List<Entity.RequisiteRelationship> GetSubjectRequisite(int subjectID)
        {
            List<DataModel.RequisiteRelationship> requisites;
            var context = new MyCourseDBEntities();
            var query = from c in context.RequisiteRelationship.Include("RequisiteTypes").Include("Subjects")
                        where c.SubjectID.Equals(subjectID)
                        select c;
            requisites = query.ToList();

            List<Entity.RequisiteRelationship> listOfRequisites = new List<Entity.RequisiteRelationship>();
            foreach (var c in requisites)
            {
                listOfRequisites.Add(EntityMappingManager.MapRequisiteRelationshipContent(c));
            }
            return listOfRequisites;
        }

        //http://mycourseuts.azurewebsites.net/services/api/subject/getsubjects?value=139
        public List<Subject> GetSubjects(string value)
        {
            List<Subjects> subjects;
            var context = new MyCourseDBEntities();
            var query = from c in context.Subjects
                        where ((SqlFunctions.StringConvert((double)c.ID).Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        || ((c.Name.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        || ((c.Abbreviation.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        select c;
            subjects = query.ToList();
            List<Subject> listOfSubject = new List<Subject>();
            foreach (var c in subjects)
            {
                listOfSubject.Add(EntityMappingManager.MapSubjectContent(c));
            }
            return listOfSubject;
        }

        //http://mycourseuts.azurewebsites.net/services/api/subject/GetSubjectTypes
        public List<Entity.SubjectTypes> GetSubjectTypes()
        {
            List<DataModel.SubjectTypes> subjectTypes;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectTypes
                        select c;
            subjectTypes = query.ToList();
            List<Entity.SubjectTypes> listOfSubject = new List<Entity.SubjectTypes>();
            foreach (var c in subjectTypes)
            {
                listOfSubject.Add(EntityMappingManager.MapSubjectTypeContent(c));
            }
            return listOfSubject;
        }

        //public void PostSubject(Subject subject)
        //{
        //    using (var scope = new TransactionScope())
        //    {
        //        using (var context = new MyCourseDBEntities())
        //        {
        //            Subjects newRow = new Subjects();
        //            newRow.ID = subject.ID;
        //            newRow.Name = subject.Name;
        //            newRow.CreditPoints = subject.CreditPoints;
        //            newRow.Abbreviation = subject.Abbreviation;
        //            newRow.Active = subject.Active;
        //            newRow.Version = subject.Version;
        //            context.Subjects.Add(newRow);
        //            context.SaveChanges();
        //        }
        //        scope.Complete();
        //    }
        //}

        public void DeleteSubjects(Subject subject)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.Subjects
                        where c.ID.ToString().Equals(subject.ID)
                        select c;
            var deleteSubject = query.First();
            context.Subjects.Remove(deleteSubject);
            context.SaveChanges();
        }


    }
}
