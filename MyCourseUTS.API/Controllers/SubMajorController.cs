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
    public class SubMajorController : ApiController
    {
        //http://mycourseuts.azurewebsites.net/services/api/submajor/getallsubmajors
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<SubMajor> GetAllSubMajors()
        {
            List<SubMajors> subMajors;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubMajors
                        where c.Active.Equals(true)
                        select c;
            subMajors = query.ToList();

            List<SubMajor> listOfSubMajors = new List<SubMajor>();
            foreach (var c in subMajors)
            {
                listOfSubMajors.Add(EntityMappingManager.MapSubMajorContent(c));
            }
            return listOfSubMajors;
        }

        //http://mycourseuts.azurewebsites.net/services/api/submajor/getsubmajor?submajorID=SMJ01010
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public SubMajor GetSubMajor(string subMajorID)
        {
            SubMajor subMajor;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubMajors
                        where c.ID.Equals(subMajorID)
                        select c;
            subMajor = EntityMappingManager.MapSubMajorContent(query.FirstOrDefault());
            return subMajor;
        }

        //http://mycourseuts.azurewebsites.net/services/api/submajor/getsubmajors?value=SMJ01
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<SubMajor> GetSubMajors(string value)
        {
            List<SubMajors> subMajors;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubMajors
                        where ((c.ID.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        || ((c.Name.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        || ((c.Abbreviation.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        select c;
            subMajors = query.ToList();
            List<SubMajor> listOfSubMajor = new List<SubMajor>();
            foreach (var c in subMajors)
            {
                listOfSubMajor.Add(EntityMappingManager.MapSubMajorContent(c));
            }
            return listOfSubMajor;
        }

        //http://mycourseuts.azurewebsites.net/services/api/submajor/getsubmajorrelationship?submajorID=SMJ02015
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<SubMajorRelationship> GetSubMajorRelationship(string subMajorID)
        {
            List<SubMajorRelationships> subMajor;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubMajorRelationships.Include("Subjects").Include("SubMajors").Include("Streams").Include("ChoiceBlocks").Include("SubjectGroupings")
                        where c.SubMajorID.Equals(subMajorID)
                        select c;
            subMajor = query.ToList();

            List<SubMajorRelationship> listofSubMajor = new List<SubMajorRelationship>();
            foreach (var c in subMajor)
            {
                listofSubMajor.Add(EntityMappingManager.MapSubMajorRelationshipContent(c));
            }
            return listofSubMajor;
        }

        //http://mycourseuts.azurewebsites.net/services/api/submajor/getsubmajorrelationship?submajorID=SMJ02015
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<SubMajorRelationships> GetDataModelSubMajorRelationship(string subMajorID)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.SubMajorRelationships.Include("Subjects").Include("SubMajors").Include("Streams").Include("ChoiceBlocks").Include("SubjectGroupings")
                        where c.SubMajorID.Equals(subMajorID)
                        select c;
          return query.ToList();
        }








        //http://mycourseuts.azurewebsites.net/Services/api/submajor/postsubmajor
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void PostSubMajor([FromBody]SubMajor subMajor)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.SubMajors
                        where c.ID.Equals(subMajor.ID)
                        select c;
            var existingSMJ = query.FirstOrDefault();
            if (query.Any())
            {
                existingSMJ.ID = subMajor.ID;
                existingSMJ.Name = subMajor.Name;
                existingSMJ.Abbreviation = subMajor.Abbreviation;
                existingSMJ.Active = subMajor.Active;
                existingSMJ.Version = subMajor.Version;
                existingSMJ.VersionDescription = subMajor.VersionDescription;
                existingSMJ.CreditPoints = subMajor.CreditPoints;
                existingSMJ.SubMajorDescription = subMajor.SubMajorDescription;
                context.SaveChanges();
            }
            else
            {
                SubMajors newRow = new SubMajors();
                newRow.ID = subMajor.ID;
                newRow.Name = subMajor.Name;
                newRow.Abbreviation = subMajor.Abbreviation;
                newRow.Active = subMajor.Active;
                newRow.Version = subMajor.Version;
                newRow.VersionDescription = subMajor.VersionDescription;
                newRow.CreditPoints = subMajor.CreditPoints;
                newRow.SubMajorDescription = subMajor.SubMajorDescription;
                context.SubMajors.Add(newRow);
                context.SaveChanges();
            }
        }




        //http://mycourseuts.azurewebsites.net/Services/api/submajor/deletesubmajor?submajorID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteSubMajor(string submajorID)
        {
            DeleteChoiceBlockRelationship(submajorID);
            //DeleteMajorRelationship(submajorID);
            DeleteStreamRelationship(submajorID);
            DeleteSubMajorRelationship(submajorID);
            DeleteCourseRelationship(submajorID);
            DeleteSubjectGroupingRelationship(submajorID);
            var context = new MyCourseDBEntities();
            var query = from c in context.SubMajors
                        where c.ID.Equals(submajorID)
                        select c;
            var deleteSMJ = query.FirstOrDefault();
            context.SubMajors.Remove(deleteSMJ);
            context.SaveChanges();
        }



        ////http://mycourseuts.azurewebsites.net/Services/api/submajor/DeleteMajorRelationship?submajorID=xxx
        //[EnableCors(origins: "*", headers: "*", methods: "*")]
        //public void DeleteMajorRelationship(string submajorID)
        //{
        //    List<DataModel.MajorRelationships> major;
        //    var context = new MyCourseDBEntities();
        //    var query = from c in context.MajorRelationships
        //                where c.SubMajors.ID.Equals(submajorID)
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

        //http://mycourseuts.azurewebsites.net/Services/api/submajor/deletechoiceblockIDrelationship?submajorID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteChoiceBlockRelationship(string submajorID)
        {
            List<DataModel.ChoiceBlockRelationships> cbk;
            var context = new MyCourseDBEntities();
            var query = from c in context.ChoiceBlockRelationships
                        where c.SubMajors.ID.Equals(submajorID)
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

        //http://mycourseuts.azurewebsites.net/Services/api/submajor/DeleteSubjectGroupingRelationship?submajorID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteSubjectGroupingRelationship(string submajorID)
        {
            List<DataModel.SubjectGroupingRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupingRelationships
                        where c.SubMajors.ID.Equals(submajorID)
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

        //http://mycourseuts.azurewebsites.net/Services/api/submajor/DeleteStreamRelationshipRelationship?submajorID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteStreamRelationship(string submajorID)
        {
            List<DataModel.StreamRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.StreamRelationships
                        where c.SubMajors.ID.Equals(submajorID) 
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
        //http://mycourseuts.azurewebsites.net/Services/api/submajor/DeleteSubMajorRelationship?submajorID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteSubMajorRelationship(string submajorID)
        {
            List<DataModel.SubMajorRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubMajorRelationships
                        where c.SubMajors.ID.Equals(submajorID) || c.SubMajors1.ID.Equals(submajorID)
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
        //http://mycourseuts.azurewebsites.net/Services/api/submajor/DeleteCourseRelationship?submajorID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteCourseRelationship(string submajorID)
        {
            List<DataModel.CourseRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.CourseRelationships
                        where c.SubMajors.ID.Equals(submajorID)
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


        //http://mycourseuts.azurewebsites.net/Services/api/submajor/PostsubmajorRelationship?submajorID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void PostSubMajorRelationship(string submajorID, [FromBody]List<SubMajorRelationship> relationships)
        {
            var context = new MyCourseDBEntities();

            List<DataModel.SubMajorRelationships> group;
            var query = from c in context.SubMajorRelationships
                        where c.SubMajorID.Equals(submajorID) 
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

            using (var scope = new TransactionScope())
            {
                foreach (var rel in relationships)
                {
                    SubMajorRelationships newRow = new SubMajorRelationships();
                    newRow.SubMajorID = rel.SubMajor.ID;
                    if (rel.Subject != null)
                    {
                        newRow.SubjectID = rel.Subject.ID;
                    }
                    if (rel.ContentChoiceBlock != null)
                    {
                        newRow.ContentChoiceBlockID = rel.ContentChoiceBlock.ID;
                    }
                    if (rel.ContentSubjectGrouping != null)
                    {
                        newRow.ContentGroupID = rel.ContentSubjectGrouping.ID;
                    }
                    if (rel.ContentStream != null)
                    {
                        newRow.ContentStreamID = rel.ContentStream.ID;
                    }
                    if (rel.ContentSubMajor != null)
                    {
                        newRow.ContentSubMajorID = rel.ContentSubMajor.ID;
                    }

                    context.SubMajorRelationships.Add(newRow);
                    context.SaveChanges();
                }
                scope.Complete();
            }
        }
    }
}
