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
using System.Data.Entity;

namespace MyCourseUTS.API.Controllers
{
    public class CourseController : ApiController
    {
        //http://mycourseuts.azurewebsites.net/api/course/allcourses
        public List<Course> GetAllCourses()
        {
            List<Courses> courses;
            var context = new MyCourseDBEntities();
            var query = from c in context.Courses.Include("CourseTypes")
                        where c.Active.Equals(1)
                        select c;
            courses = query.ToList();

            List<Course> listOfCourses = new List<Course>();
            foreach (var c in courses)
            {
                listOfCourses.Add(EntityMappingManager.MapCourseContent(c));
            }
            return listOfCourses;
        }

        ////http://mycourseuts.azurewebsites.net/api/course/course?courseID=C04273
        //public Course GetCourse(string courseID)
        //{
        //    Course course;
        //    var context = new MyCourseDBEntities();
        //    var query = from c in context.Courses.Include("CourseTypes")
        //                where c.ID.Equals(courseID)
        //                select c;
        //    course = EntityMappingManager.MapCourseContent(query.FirstOrDefault());
        //    return course;
        //}


        public List<CourseRelationship> GetCourseRelationship(string courseID)
        {
            List<DataModel.CourseRelationships> course;
            var context = new MyCourseDBEntities();
            var query = from c in context.CourseRelationships.Include("Courses.CourseTypes").Include("Subjects").Include("ChoiceBlocks").Include("SubjectTypes").Include("SubjectGroupingsCredit")
                        where c.Courses.ID.Equals(courseID)
                        select c;
            course = query.ToList();

            List<CourseRelationship> listOfCourse = new List<CourseRelationship>();
            foreach (var c in course)
            {
                listOfCourse.Add(EntityMappingManager.MapCourseRelationshipContent(c));
            }
            return listOfCourse;
        }





        //// GET api/values/5
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/values
        //public void Post([FromBody]string value)
        //{
        //}

        //// PUT api/values/5
        //public void Put(int id, [FromBody]string value)
        //{
        //}

        //// DELETE api/values/5
        //public void Delete(int id)
        //{
        //}
    }
}
