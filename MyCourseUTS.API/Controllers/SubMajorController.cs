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
        //http://mycourseuts.azurewebsites.net/api/submajor/getallsubmajors
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

        //http://mycourseuts.azurewebsites.net/api/submajor/getsubmajor?submajorID=SMJ01010
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

        //http://mycourseuts.azurewebsites.net/api/submajor/getsubmajors?value=SMJ01
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

        //http://mycourseuts.azurewebsites.net/api/submajor/getsubmajorrelationship?submajorID=SMJ02015
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<SubMajorRelationship> GetSubMajorRelationship(string subMajorID)
        {
            List<SubMajorRelationships> subMajor;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubMajorRelationships.Include("Subjects").Include("ChoiceBlocks").Include("SubjectGroupingsCredit").Include("Streams").Include("SubMajors")
                        where c.SubMajors.ID.Equals(subMajorID)
                        select c;
            subMajor = query.ToList();

            List<SubMajorRelationship> listofSubMajor = new List<SubMajorRelationship>();
            foreach (var c in subMajor)
            {
                listofSubMajor.Add(EntityMappingManager.MapSubMajorRelationshipContent(c));
            }
            return listofSubMajor;
        }

        //[EnableCors(origins: "*", headers: "*", methods: "*")]
        //public void PostSubMajor(SubMajor subMajor)
        //{
        //    using (var scope = new TransactionScope())
        //    {
        //        using (var context = new MyCourseDBEntities())
        //        {
        //            SubMajors newRow = new SubMajors();
        //            newRow.ID = subMajor.ID;
        //            newRow.Name = subMajor.Name;
        //            newRow.Abbreviation = subMajor.Abbreviation;
        //            newRow.Active = subMajor.Active;
        //            newRow.Version = subMajor.Version;
        //            context.SubMajors.Add(newRow);
        //            context.SaveChanges();
        //        }
        //        scope.Complete();
        //    }
        //}

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteSubMajor(SubMajor subMajor)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.SubMajors
                        where c.ID.Equals(subMajor.ID)
                        select c;
            var deleteSubMajor = query.First();
            context.SubMajors.Remove(deleteSubMajor);
            context.SaveChanges();
        }
    }
}
