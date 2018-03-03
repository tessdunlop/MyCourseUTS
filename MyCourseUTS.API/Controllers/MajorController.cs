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

namespace MyCourseUTS.API.Controllers
{
    public class MajorController : ApiController
    {
        //http://mycourseuts.azurewebsites.net/api/major/getallmajors
        public List<Major> GetAllMajors()
        {
            List<Majors> majors;
            var context = new MyCourseDBEntities();
            var query = from c in context.Majors
                        where c.Active.Equals(1)
                        select c;
            majors = query.ToList();

            List<Major> listOfMajors = new List<Major>();
            foreach (var c in majors)
            {
                listOfMajors.Add(EntityMappingManager.MapMajorContent(c));
            }
            return listOfMajors;
        }

        //http://mycourseuts.azurewebsites.net/api/major/getmajor?majorID=MAJ03472
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

        //http://mycourseuts.azurewebsites.net/api/major/getmajors?majorID=MAJ03&name=&abbreviation=
        public List<Major> GetMajors(string majorID, string name, string abbreviation)
        {
            List<Majors> majors;
            var context = new MyCourseDBEntities();
            var query = from c in context.Majors
                        where ((c.ID.Contains(majorID) && majorID != "") || (String.IsNullOrEmpty(majorID)))
                        && ((c.Name.Contains(name) && name != "") || (String.IsNullOrEmpty(name)))
                        && ((c.Abbreviation.Contains(abbreviation) && abbreviation != "") || (String.IsNullOrEmpty(abbreviation)))
                        select c;
            majors = query.ToList();
            List<Major> listOfMajors = new List<Major>();
            foreach (var c in majors)
            {
                listOfMajors.Add(EntityMappingManager.MapMajorContent(c));
            }
            return listOfMajors;
        }

        //http://mycourseuts.azurewebsites.net/api/major/GetMajorRelationship?majorID=MAJ03472
        public List<MajorRelationship> GetMajorRelationship(string majorID)
        {
            List<MajorRelationships> major;
            var context = new MyCourseDBEntities();
            var query = from c in context.MajorRelationships.Include("Courses.CourseTypes").Include("Subjects").Include("ChoiceBlocks").Include("SubjectTypes").Include("SubjectGroupingsCredit").Include("Majors").Include("Streams")
                        where c.Majors.ID.Equals(majorID)
                        select c;
            major = query.ToList();

            List<MajorRelationship> listOfMajor = new List<MajorRelationship>();
            foreach (var c in major)
            {
                listOfMajor.Add(EntityMappingManager.MapMajorRelationshipContent(c));
            }
            return listOfMajor;
        }


        public void PostMajor(Major major)
        {
            using (var scope = new TransactionScope())
            {
                using (var context = new MyCourseDBEntities())
                {
                    Majors newRow = new Majors();
                    newRow.ID = major.ID;
                    newRow.Name = major.Name;
                    newRow.Abbreviation = major.Abbreviation;
                    newRow.Active = major.Active;
                    newRow.Version = major.Version;
                    newRow.Stage = major.Stage;
                    newRow.CreditPoints = major.CreditPoints;
                    context.Majors.Add(newRow);
                    context.SaveChanges();
                }
                scope.Complete();
            }
        }

        public void DeleteMajor(Major major)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.Majors
                        where c.ID.Equals(major.ID)
                        select c;
            var deleteMajor = query.First();
            context.Majors.Remove(deleteMajor);
            context.SaveChanges();
        }
        
    }
}
