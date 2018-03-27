using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Transactions;
using System.Web.Http;
using MyCourseUTS.DataModel;
using MyCourseUTS.Entity;
using MyCourseUTS.Manager;
using System.Web.Http.Cors;
using System.Web;

namespace MyCourseUTS.API.Controllers
{
    public class SubjectGroupingController : ApiController
    {
        //http://mycourseuts.azurewebsites.net/services/api/subjectgrouping/getallsubjectgroupings
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<SubjectGrouping> GetAllSubjectGroupings()
        {
            List<SubjectGroupings> subjectGroupings;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupings
                        select c;
            subjectGroupings = query.ToList();

            List<SubjectGrouping> listOfSubjectGroupings = new List<SubjectGrouping>();
            foreach (var c in subjectGroupings)
            {
                listOfSubjectGroupings.Add(EntityMappingManager.MapSubjectGroupingContent(c));
            }
            return listOfSubjectGroupings;
        }

        //http://mycourseuts.azurewebsites.net/services/api/subjectgrouping/GetSubjectGrouping?subjectgroupingID=4
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public SubjectGrouping GetSubjectGrouping(int subjectGroupingID)
        {
            SubjectGrouping subjectGroup;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupings
                        where c.ID.Equals(subjectGroupingID)
                        select c;
            subjectGroup = EntityMappingManager.MapSubjectGroupingContent(query.FirstOrDefault());
            return subjectGroup;
        }

        //http://mycourseuts.azurewebsites.net/services/api/subjectgrouping/GetSubjectGroupings?subjectgroupingID=4
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<SubjectGrouping> GetSubjectGroupings(string subjectGroupingID)
        {
            List<SubjectGroupings> subjectGroupings;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupings
                        where ((c.ID.ToString().Contains(subjectGroupingID) && subjectGroupingID != "") || (String.IsNullOrEmpty(subjectGroupingID)))
                        select c;
            subjectGroupings = query.ToList();
            List<SubjectGrouping> listOfSubjectGroup = new List<SubjectGrouping>();
            foreach (var c in subjectGroupings)
            {
                listOfSubjectGroup.Add(EntityMappingManager.MapSubjectGroupingContent(c));
            }
            return listOfSubjectGroup;
        }

        //http://mycourseuts.azurewebsites.net/services/api/subjectgrouping/GetSubjectGroupingRelationship?subjectgroupingID=100
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<SubjectGroupingRelationship> GetSubjectGroupingRelationship(string subjectGroupingID)
        {
            List<SubjectGroupingRelationships> subjectGroup;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupingRelationships.Include("Subjects").Include("ChoiceBlocks").Include("SubjectGroupings").Include("Majors").Include("Streams").Include("SubMajors")
                        where c.GroupID.ToString().Equals(subjectGroupingID)
                        select c;
            subjectGroup = query.ToList();

            List<SubjectGroupingRelationship> listofSubjectGroup = new List<SubjectGroupingRelationship>();
            foreach (var c in subjectGroup)
            {
                listofSubjectGroup.Add(EntityMappingManager.MapSubjectGroupingRelationshipContent(c));
            }
            return listofSubjectGroup;
        }






















        //http://mycourseuts.azurewebsites.net/Services/api/subjectgrouping/postsubjectgrouping
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void PostSubjectGrouping([FromBody]SubjectGrouping subjectGrouping)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupings
                        where c.ID.Equals(subjectGrouping.ID)
                        select c;
            var existingGroup = query.FirstOrDefault();
            if (query.Any())
            {
                existingGroup.ID = subjectGrouping.ID;
                existingGroup.SubjectPresent = subjectGrouping.SubjectPresent;
                existingGroup.MajorPresent = subjectGrouping.MajorPresent;
                existingGroup.ChoiceBlockPresent = subjectGrouping.ChoiceBlockPresent;
                existingGroup.StreamPresent = subjectGrouping.StreamPresent;
                existingGroup.SubMajorPresent = subjectGrouping.SubMajorPresent;
                existingGroup.CreditPoints = subjectGrouping.CreditPoints;
                context.SaveChanges();
            }
            else
            {
                SubjectGroupings newRow = new SubjectGroupings();
                newRow.ID = subjectGrouping.ID;
                newRow.SubjectPresent = subjectGrouping.SubjectPresent;
                newRow.MajorPresent = subjectGrouping.MajorPresent;
                newRow.ChoiceBlockPresent = subjectGrouping.ChoiceBlockPresent;
                newRow.StreamPresent = subjectGrouping.StreamPresent;
                newRow.SubMajorPresent = subjectGrouping.SubMajorPresent;
                newRow.CreditPoints = subjectGrouping.CreditPoints;
                context.SubjectGroupings.Add(newRow);
                context.SaveChanges();
            }
        }




        //http://mycourseuts.azurewebsites.net/Services/api/subjectgrouping/deletesubjectgrouping?groupID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteSubjectGrouping(string groupID)
        {
            DeleteChoiceBlockRelationship(groupID);
            //DeleteMajorRelationship(groupID);
            DeleteStreamRelationship(groupID);
            DeleteSubMajorRelationship(groupID);
            DeleteCourseRelationship(groupID);
            DeleteSubjectGroupingRelationship(groupID);
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupings
                        where c.ID.Equals(groupID)
                        select c;
            var deleteGroup = query.FirstOrDefault();
            context.SubjectGroupings.Remove(deleteGroup);
            context.SaveChanges();
        }



        ////http://mycourseuts.azurewebsites.net/Services/api/subjectgrouping/DeleteMajorRelationship?groupID=xxx
        //[EnableCors(origins: "*", headers: "*", methods: "*")]
        //public void DeleteMajorRelationship(string groupID)
        //{
        //    List<DataModel.MajorRelationships> major;
        //    var context = new MyCourseDBEntities();
        //    var query = from c in context.MajorRelationships
        //                where c.SubjectGroupings.ID.Equals(groupID)
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

        //http://mycourseuts.azurewebsites.net/Services/api/subjectgrouping/deletechoiceblockIDrelationship?groupID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteChoiceBlockRelationship(string groupID)
        {
            List<DataModel.ChoiceBlockRelationships> cbk;
            var context = new MyCourseDBEntities();
            var query = from c in context.ChoiceBlockRelationships
                        where c.SubjectGroupings.ID.Equals(groupID)
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

        //http://mycourseuts.azurewebsites.net/Services/api/subjectgrouping/DeleteSubjectGroupingRelationship?groupID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteSubjectGroupingRelationship(string groupID)
        {
            List<DataModel.SubjectGroupingRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupingRelationships
                        where c.SubjectGroupings.ID.Equals(groupID)
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

        //http://mycourseuts.azurewebsites.net/Services/api/subjectgrouping/DeleteStreamRelationshipRelationship?groupID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteStreamRelationship(string groupID)
        {
            List<DataModel.StreamRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.StreamRelationships
                        where c.SubjectGroupings.ID.Equals(groupID)
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
        //http://mycourseuts.azurewebsites.net/Services/api/subjectgrouping/DeleteSubMajorRelationship?groupID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteSubMajorRelationship(string groupID)
        {
            List<DataModel.SubMajorRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubMajorRelationships
                        where c.SubjectGroupings.ID.Equals(groupID) 
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
        //http://mycourseuts.azurewebsites.net/Services/api/subjectgrouping/DeleteCourseRelationship?groupID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteCourseRelationship(string groupID)
        {
            List<DataModel.CourseRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.CourseRelationships
                        where c.SubjectGroupings.ID.Equals(groupID)
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


        //http://mycourseuts.azurewebsites.net/Services/api/subjectgrouping/PostsubjectgroupingRelationship?groupID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void PostSubjectGroupingRelationship(string groupID, [FromBody]List<SubjectGroupingRelationship> relationships)
        {
            var context = new MyCourseDBEntities();
            DeleteSubjectGroupingRelationship(groupID);
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
                    if (rel.ContentChoiceBlock != null)
                    {
                        newRow.ChoiceBlockID = rel.ContentChoiceBlock.ID;
                    }
                    if (rel.ContentStream != null)
                    {
                        newRow.StreamID = rel.ContentStream.ID;
                    }
                    if (rel.ContentSubMajor != null)
                    {
                        newRow.SubMajorID = rel.ContentSubMajor.ID;
                    }
                    if (rel.ContentMajor != null)
                    {
                        newRow.MajorID = rel.ContentMajor.ID;
                    }
                    context.SubjectGroupingRelationships.Add(newRow);
                    context.SaveChanges();
                }
                scope.Complete();
            }
        }
    }
}
