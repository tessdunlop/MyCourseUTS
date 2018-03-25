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
using System.Web.Http.Cors;

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












        //http://mycourseuts.azurewebsites.net/Services/api/subject/postsubject
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void PostSubject([FromBody]Subject subject)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.Subjects
                        where c.ID.Equals(subject.ID)
                        select c;
            var existingSubject = query.FirstOrDefault();
            if (query.Any())
            {
                existingSubject.ID = subject.ID;
                existingSubject.Version = subject.Version;
                existingSubject.Name = subject.Name;
                existingSubject.Active = subject.Active;
                existingSubject.CreditPoints = subject.CreditPoints;
                existingSubject.Abbreviation = subject.Abbreviation;
                existingSubject.SubjectDescription = subject.SubjectDescription;
                existingSubject.VersionDescription = subject.VersionDescription;
                context.SaveChanges();
            }
            else
            {
                Subjects newRow = new Subjects();
                newRow.ID = subject.ID;
                newRow.Version = subject.Version;
                newRow.Name = subject.Name;
                newRow.Active = subject.Active;
                newRow.CreditPoints = subject.CreditPoints;
                newRow.Abbreviation = subject.Abbreviation;
                newRow.SubjectDescription = subject.SubjectDescription;
                newRow.VersionDescription = subject.VersionDescription;
                context.Subjects.Add(newRow);
                context.SaveChanges();
            }
        }




        //http://mycourseuts.azurewebsites.net/Services/api/subject/deletesubject?subjectID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteSubject(string subjectID)
        {
            DeleteChoiceBlockRelationship(subjectID);
            DeleteMajorRelationship(subjectID);
            DeleteStreamRelationship(subjectID);
            DeleteSubMajorRelationship(subjectID);
            DeleteCourseRelationship(subjectID);
            DeleteSubjectGroupingRelationship(subjectID);
            DeleteRequisiteRelationship(subjectID);
            var context = new MyCourseDBEntities();
            var query = from c in context.Subjects
                        where c.ID.Equals(subjectID)
                        select c;
            var deleteSubject = query.FirstOrDefault();
            context.Subjects.Remove(deleteSubject);
            context.SaveChanges();
        }

        //http://mycourseuts.azurewebsites.net/Services/api/subject/PostRequisiteRelationship?subjectID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void PostRequisiteRelationship(string subjectID, [FromBody]List<Entity.RequisiteRelationship> relationships)
        {

            var context = new MyCourseDBEntities();
            List<DataModel.RequisiteRelationship> group;
            var query = from c in context.RequisiteRelationship
                        where c.Subjects.ID.Equals(subjectID)
                        select c;
            group = query.ToList();
            if (group.Count != 0)
            {
                foreach (var row in group)
                {
                    context.RequisiteRelationship.Remove(row);
                    context.SaveChanges();
                }
            }
            using (var scope = new TransactionScope())
            {
                foreach (var rel in relationships)
                {
                    DataModel.RequisiteRelationship newRow = new DataModel.RequisiteRelationship();
                    newRow.SubjectID = rel.Subject.ID;
                    newRow.RequisiteID = rel.Requisite.ID;
                    newRow.RequisiteTypeID = rel.RequisiteType.ID;
                    context.RequisiteRelationship.Add(newRow);
                    context.SaveChanges();
                }
                scope.Complete();
            }

        }

        //http://mycourseuts.azurewebsites.net/Services/api/subject/DeleteRequisiteRelationship?subjectID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteRequisiteRelationship(string subjectID)
        {
            List<DataModel.RequisiteRelationship> requisite;
            var context = new MyCourseDBEntities();
            var query = from c in context.RequisiteRelationship
                        where c.Subjects.ID.Equals(subjectID) || c.Subjects1.ID.Equals(subjectID)
                        select c;
            requisite = query.ToList();

            if (requisite.Count != 0)
            {
                foreach (var row in requisite)
                {
                    context.RequisiteRelationship.Remove(row);
                    context.SaveChanges();
                }
            }
        }

        //http://mycourseuts.azurewebsites.net/Services/api/subject/DeleteMajorRelationship?subjectID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteMajorRelationship(string subjectID)
        {
            List<DataModel.MajorRelationships> major;
            var context = new MyCourseDBEntities();
            var query = from c in context.MajorRelationships
                        where c.Subjects.ID.Equals(subjectID)
                        select c;
            major = query.ToList();

            if (major.Count != 0)
            {
                foreach (var row in major)
                {
                    context.MajorRelationships.Remove(row);
                    context.SaveChanges();
                }
            }
        }

        //http://mycourseuts.azurewebsites.net/Services/api/subject/deletechoiceblockIDrelationship?subjectID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteChoiceBlockRelationship(string subjectID)
        {
            List<DataModel.ChoiceBlockRelationships> cbk;
            var context = new MyCourseDBEntities();
            var query = from c in context.ChoiceBlockRelationships
                        where c.Subjects.ID.Equals(subjectID)
                        select c;
            cbk = query.ToList();
            if (cbk.Count != 0)
            {
                foreach (var row in cbk)
                {
                    context.ChoiceBlockRelationships.Remove(row);
                    context.SaveChanges();
                }
            }
        }

        //http://mycourseuts.azurewebsites.net/Services/api/subject/DeleteSubjectGroupingRelationship?subjectID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteSubjectGroupingRelationship(string subjectID)
        {
            List<DataModel.SubjectGroupingRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupingRelationships
                        where c.Subjects.ID.Equals(subjectID)
                        select c;
            group = query.ToList();
            if (group.Count != 0)
            {
                foreach (var row in group)
                {
                    context.SubjectGroupingRelationships.Remove(row);
                    context.SaveChanges();
                }
            }
        }

        //http://mycourseuts.azurewebsites.net/Services/api/subject/DeleteStreamRelationshipRelationship?subjectID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteStreamRelationship(string subjectID)
        {
            List<DataModel.StreamRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.StreamRelationships
                        where c.Subjects.ID.Equals(subjectID)
                        select c;
            group = query.ToList();
            if (group.Count != 0)
            {
                foreach (var row in group)
                {
                    context.StreamRelationships.Remove(row);
                    context.SaveChanges();
                }
            }
        }
        //http://mycourseuts.azurewebsites.net/Services/api/subject/DeleteSubMajorRelationship?subjectID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteSubMajorRelationship(string subjectID)
        {
            List<DataModel.SubMajorRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubMajorRelationships
                        where c.Subjects.ID.Equals(subjectID)
                        select c;
            group = query.ToList();
            if (group.Count != 0)
            {
                foreach (var row in group)
                {
                    context.SubMajorRelationships.Remove(row);
                    context.SaveChanges();
                }
            }
        }
        //http://mycourseuts.azurewebsites.net/Services/api/subject/DeleteCourseRelationship?subjectID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteCourseRelationship(string subjectID)
        {
            List<DataModel.CourseRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.CourseRelationships
                        where c.Subjects.ID.Equals(subjectID)
                        select c;
            group = query.ToList();
            if (group.Count != 0)
            {
                foreach (var row in group)
                {
                    context.CourseRelationships.Remove(row);
                    context.SaveChanges();
                }
            }
        }
    }
}
