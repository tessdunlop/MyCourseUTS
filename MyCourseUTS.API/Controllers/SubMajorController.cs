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

namespace MyCourseUTS.API.Controllers
{
    public class SubMajorController : ApiController
    {
        public List<SubMajor> GetAllSubMajors()
        {
            List<SubMajors> subMajors;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubMajors
                        where c.Active.Equals(1)
                        select c;
            subMajors = query.ToList();

            List<SubMajor> listOfSubMajors = new List<SubMajor>();
            foreach (var c in subMajors)
            {
                listOfSubMajors.Add(EntityMappingManager.MapSubMajorContent(c));
            }
            return listOfSubMajors;
        }

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

        public List<SubMajor> GetSubMajors(string subMajorID, string name, string abbreviation)
        {
            List<SubMajors> subMajors;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubMajors
                        where ((c.ID.Contains(subMajorID) && subMajorID != "") || (String.IsNullOrEmpty(subMajorID)))
                        && ((c.Name.Contains(name) && name != "") || (String.IsNullOrEmpty(name)))
                        && ((c.Abbreviation.Contains(abbreviation) && abbreviation != "") || (String.IsNullOrEmpty(abbreviation)))
                        select c;
            subMajors = query.ToList();
            List<SubMajor> listOfSubMajor = new List<SubMajor>();
            foreach (var c in subMajors)
            {
                listOfSubMajor.Add(EntityMappingManager.MapSubMajorContent(c));
            }
            return listOfSubMajor;
        }

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


        public void PostSubMajor(SubMajor subMajor)
        {
            using (var scope = new TransactionScope())
            {
                using (var context = new MyCourseDBEntities())
                {
                    SubMajors newRow = new SubMajors();
                    newRow.ID = subMajor.ID;
                    newRow.Name = subMajor.Name;
                    newRow.Abbreviation = subMajor.Abbreviation;
                    newRow.Active = subMajor.Active;
                    newRow.Version = subMajor.Version;
                    context.SubMajors.Add(newRow);
                    context.SaveChanges();
                }
                scope.Complete();
            }
        }

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
