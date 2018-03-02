using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MyCourseUTS.DataModel;
using MyCourseUTS.Entity;
using MyCourseUTS.Manager;

namespace MyCourseUTS.API.Controllers
{
    public class SubjectController : ApiController
    {
        public List<Subject> GetAllSubjects()
        {
            List<Subjects> subjects;
            var context = new MyCourseDBEntities();
            var query = from c in context.Subjects
                        where c.Active.Equals(1)
                        select c;
            subjects = query.ToList();

            List<Subject> listOfSubjects = new List<Subject>();
            foreach (var c in subjects)
            {
                listOfSubjects.Add(EntityMappingManager.MapSubjectContent(c));
            }
            return listOfSubjects;
        }
    }
}
