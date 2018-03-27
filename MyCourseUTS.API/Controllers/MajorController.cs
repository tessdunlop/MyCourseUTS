using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Transactions;
using System.Web.Http;
using System.Web.Services;
using MyCourseUTS.DataModel;
using MyCourseUTS.Entity;
using MyCourseUTS.Manager;
using System.Web.Http.Cors;
using System.Web;

namespace MyCourseUTS.API.Controllers
{
    public class MajorController : ApiController
    {
        //http://mycourseuts.azurewebsites.net/services/api/major/getallmajors
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<Major> GetAllMajors()
        {
            List<Majors> majors;
            var context = new MyCourseDBEntities();
            var query = from c in context.Majors
                        where c.Active.Equals(true)
                        select c;
            majors = query.ToList();

            List<Major> listOfMajors = new List<Major>();
            foreach (var c in majors)
            {
                listOfMajors.Add(EntityMappingManager.MapMajorContent(c));
            }
            return listOfMajors;
        }

        //http://mycourseuts.azurewebsites.net/services/api/major/getmajor?majorID=MAJ03472
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public Major GetMajor(string majorID)
        {
            Major major;
            var context = new MyCourseDBEntities();
            var query = from c in context.Majors
                        where c.ID.Equals(majorID)
                        select c;
            major = EntityMappingManager.MapMajorContent(query.FirstOrDefault());
            return major;
        }

        //http://mycourseuts.azurewebsites.net/services/api/major/getmajors?value=MAJ03
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<Major> GetMajors(string value)
        {
            List<Majors> majors;
            var context = new MyCourseDBEntities();
            var query = from c in context.Majors
                        where ((c.ID.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        || ((c.Name.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        || ((c.Abbreviation.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        select c;
            majors = query.ToList();
            List<Major> listOfMajors = new List<Major>();
            foreach (var c in majors)
            {
                listOfMajors.Add(EntityMappingManager.MapMajorContent(c));
            }
            return listOfMajors;
        }

        ////http://mycourseuts.azurewebsites.net/services/api/major/GetMajorRelationship?majorID=MAJ03472
        //[EnableCors(origins: "*", headers: "*", methods: "*")]
        //public List<MajorRelationship> GetMajorRelationship(string majorID)
        //{
        //    List<MajorRelationships> major;
        //    var context = new MyCourseDBEntities();
        //    var query = from c in context.MajorRelationships.Include("Subjects").Include("ChoiceBlocks").Include("SubjectTypes").Include("SubjectGroupings").Include("Majors").Include("Streams")
        //                where c.Majors.ID.Equals(majorID)
        //                select c;
        //    major = query.ToList();

        //    List<MajorRelationship> listOfMajor = new List<MajorRelationship>();
        //    foreach (var c in major)
        //    {
        //        listOfMajor.Add(EntityMappingManager.MapMajorRelationshipContent(c));
        //    }
        //    return listOfMajor;
        //}









































        //http://mycourseuts.azurewebsites.net/Services/api/major/postmajor
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void PostMajor([FromBody]Major major)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.Majors
                        where c.ID.Equals(major.ID)
                        select c;
            var existingMajor = query.FirstOrDefault();
            if (query.Any())
            {
                existingMajor.ID = major.ID;
                existingMajor.Name = major.Name;
                existingMajor.Abbreviation = major.Abbreviation;
                existingMajor.Active = major.Active;
                existingMajor.Stages = major.Stages;
                existingMajor.Version = major.Version;
                existingMajor.VersionDescription = major.VersionDescription;
                existingMajor.CreditPoints = major.CreditPoints;
                existingMajor.MajorDescription = major.MajorDescription;
                existingMajor.HasTemplate = major.HasTemplate;
                context.SaveChanges();
            }
            else
            {
                Majors newRow = new Majors();
                newRow.ID = major.ID;
                newRow.Name = major.Name;
                newRow.Abbreviation = major.Abbreviation;
                newRow.Active = major.Active;
                newRow.Stages = major.Stages;
                newRow.Version = major.Version;
                newRow.VersionDescription = major.VersionDescription;
                newRow.CreditPoints = major.CreditPoints;
                newRow.MajorDescription = major.MajorDescription;
                newRow.HasTemplate = major.HasTemplate;
                context.Majors.Add(newRow);
                context.SaveChanges();
            }
        }




        //http://mycourseuts.azurewebsites.net/Services/api/major/deletemajor?majorID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteMajor(string majorID)
        {
            //DeleteMajorRelationship(majorID);
            //DeleteCourseMajorRelationship(majorID);
            DeleteSubjectGroupingRelationship(majorID);


            var context = new MyCourseDBEntities();
            var query = from c in context.Majors
                        where c.ID.Equals(majorID)
                        select c;
            var deleteMajor = query.FirstOrDefault();
            context.Majors.Remove(deleteMajor);
            context.SaveChanges();
        }



        ////http://mycourseuts.azurewebsites.net/Services/api/major/DeleteMajorRelationship?majorID=xxx
        //[EnableCors(origins: "*", headers: "*", methods: "*")]
        //public void DeleteMajorRelationship(string majorID) {
        //    List<DataModel.MajorRelationships> major;
        //    var context = new MyCourseDBEntities();
        //    var query = from c in context.MajorRelationships
        //                where c.Majors.ID.Equals(majorID)
        //                select c;
        //    major = query.ToList();

        //    if (major.Count != 0)
        //    {
        //        foreach (var row in major)
        //        {
        //            context.MajorRelationships.Remove(row);
        //            context.SaveChanges();
        //        }
        //    }
        //}

        ////http://mycourseuts.azurewebsites.net/Services/api/major/deletecoursemajorrelationship?majorID=xxx
        //[EnableCors(origins: "*", headers: "*", methods: "*")]
        //public void DeleteCourseMajorRelationship(string majorID)
        //{
        //    List<DataModel.CourseMajorRelationships> major;
        //    var context = new MyCourseDBEntities();
        //    var query = from c in context.CourseMajorRelationships
        //                where c.Majors.ID.Equals(majorID)
        //                select c;
        //    major = query.ToList();
        //    if (major.Count != 0)
        //    {
        //        foreach (var row in major)
        //        {
        //            context.CourseMajorRelationships.Remove(row);
        //            context.SaveChanges();
        //        }
        //    }
        //}

        //http://mycourseuts.azurewebsites.net/Services/api/major/DeleteSubjectGroupingRelationship?majorID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteSubjectGroupingRelationship(string majorID) {
            List<DataModel.SubjectGroupingRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupingRelationships
                        where c.Majors.ID.Equals(majorID)
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


        ////http://mycourseuts.azurewebsites.net/Services/api/major/PostMajorRelationship?majorID=xxx
        //[EnableCors(origins: "*", headers: "*", methods: "*")]
        //public void PostMajorRelationship(string majorID, [FromBody]List<MajorRelationship> relationships)
        //{
        //    var context = new MyCourseDBEntities();
        //    DeleteMajorRelationship(majorID);
        //    using (var scope = new TransactionScope())
        //    {
        //        foreach (var rel in relationships)
        //        {
        //            MajorRelationships newRow = new MajorRelationships();
        //            newRow.MajorID = rel.Major.ID;
        //            newRow.SubjectTypeID = rel.SubjectType.ID;
        //            newRow.Stage = rel.Stage;
        //            newRow.Year = rel.Year;

        //            if (rel.Subject != null)
        //            {
        //                newRow.SubjectID = rel.Subject.ID;
        //            }
        //            if (rel.Stream != null) {
        //                newRow.StreamID = rel.Stream.ID;
        //            }
        //            if (rel.ChoiceBlock != null)
        //            {
        //                newRow.ChoiceBlockID = rel.ChoiceBlock.ID;
        //            }
        //            if (rel.SubjectGrouping != null)
        //            {
        //                newRow.GroupID = rel.SubjectGrouping.ID;
        //            }
        //            if (rel.SubMajor != null)
        //            {
        //                newRow.SubMajorID = rel.SubMajor.ID;
        //            }

        //            context.MajorRelationships.Add(newRow);
        //            context.SaveChanges();
        //        }
        //        scope.Complete();
        //    }
        //}

        ////http://mycourseuts.azurewebsites.net/Services/api/major/postcoursemajorrelationship?majorID=xxx
        //[EnableCors(origins: "*", headers: "*", methods: "*")]
        //public void PostCourseMajorRelationship(string majorID, [FromBody]List<CourseMajorRelationship> relationships)
        //{
        //    var context = new MyCourseDBEntities();
        //    DeleteCourseMajorRelationship(majorID);
        //    using (var scope = new TransactionScope())
        //    {
        //        foreach (var rel in relationships)
        //        {
        //            CourseMajorRelationships newRow = new CourseMajorRelationships();
        //            newRow.CourseID = rel.Course.ID;
        //            newRow.MajorID = rel.Major.ID;
        //            context.CourseMajorRelationships.Add(newRow);
        //            context.SaveChanges();
        //        }
        //        scope.Complete();
        //    }
        //}

        //http://mycourseuts.azurewebsites.net/Services/api/major/PostSubjectGroupingRelationship?majorID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void PostSubjectGroupingRelationship(string majorID, [FromBody]List<SubjectGroupingRelationship> relationships)
        {
            var context = new MyCourseDBEntities();
            DeleteSubjectGroupingRelationship(majorID);
            using (var scope = new TransactionScope())
            {
                foreach (var rel in relationships)
                {
                    SubjectGroupingRelationships newRow = new SubjectGroupingRelationships();
                    newRow.GroupID = rel.ContentSubjectGrouping.ID;
                    if (rel.Subject != null)
                    {
                        newRow.SubjectID = rel.Subject.ID;
                    }
                    if (rel.ContentStream != null)
                    {
                        newRow.StreamID = rel.ContentStream.ID;
                    }
                    if (rel.ContentChoiceBlock != null)
                    {
                        newRow.ChoiceBlockID = rel.ContentChoiceBlock.ID;
                    }
                    if (rel.ContentSubMajor != null)
                    {
                        newRow.SubMajorID = rel.ContentSubMajor.ID;
                    }
                    if (rel.ContentMajor != null)
                    {
                        newRow.SubMajorID = rel.ContentMajor.ID;
                    }
                    context.SubjectGroupingRelationships.Add(newRow);
                    context.SaveChanges();
                }
                scope.Complete();
            }
        }











    










































        













        
    }
}
