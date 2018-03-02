using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Services;
using MyCourseUTS.DataModel;
using MyCourseUTS.Entity;
using MyCourseUTS.Manager;

namespace MyCourseUTS.API.Controllers
{
    public class MajorController : ApiController
    {

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


        //public List<Major> GetAllMajors()
        //{
        //    List<Majors> majors;
        //    var context = new MyCourseDBEntities();
        //    var query = from c in context.Majors
        //                where c.Active.Equals(1)
        //                select c;
        //    majors = query.ToList();

        //    List<Major> listOfMajors = new List<Major>();
        //    foreach (var c in majors)
        //    {
        //        Major major = new Major();
        //        major.ID = c.ID;
        //        major.Name = c.Name;
        //        major.Abbreviation = c.Abbreviation;
        //        major.Active = c.Active;
        //        major.CreditPoints = c.CreditPoints;
        //        major.Version = c.Version;
        //        major.Stage = c.Stage;
        //        listOfMajors.Add(major);
        //    }
        //    return listOfMajors;
        //}
    }
}
