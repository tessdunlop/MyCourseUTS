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



        //http://mycourseuts.azurewebsites.net/Services/api/major/postmajor
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public string PostMajor([FromBody]Major major)
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
                context.Majors.Add(newRow);
                context.SaveChanges();
            }
            return major.ID + " - " + major.Name + " was successfully saved";
        }




        //http://mycourseuts.azurewebsites.net/Services/api/major/deletemajor?majorID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteMajor(string majorID)
        {
            DeleteSubjectGroupingRelationship(majorID);


            var context = new MyCourseDBEntities();
            var query = from c in context.Majors
                        where c.ID.Equals(majorID)
                        select c;
            var deleteMajor = query.FirstOrDefault();
            context.Majors.Remove(deleteMajor);
            context.SaveChanges();
        }



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
