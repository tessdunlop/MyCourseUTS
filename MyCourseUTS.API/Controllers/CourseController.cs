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
using System.Transactions;

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

        //http://mycourseuts.azurewebsites.net/api/course/course?courseID=C04273
        public Course GetCourse(string courseID)
        {
            Course course;
            var context = new MyCourseDBEntities();
            var query = from c in context.Courses.Include("CourseTypes")
                        where c.ID.Equals(courseID)
                       select c;
            course = EntityMappingManager.MapCourseContent(query.FirstOrDefault());
            return course;
        }

        //http://mycourseuts.azurewebsites.net/api/course/courses?courseID=&name=&abbreviation=bsc
        public List<Course> GetCourses(string courseID, string name, string abbreviation)
        {
            List <Courses> courses;
            var context = new MyCourseDBEntities();
            var query = from c in context.Courses.Include("CourseTypes")
                        where ((c.ID.Contains(courseID) && courseID != "") || (String.IsNullOrEmpty(courseID)))
                        && ((c.Name.Contains(name) && name != "") || (String.IsNullOrEmpty(name)))
                        && ((c.Abbreviation.Contains(abbreviation) && abbreviation != "") || (String.IsNullOrEmpty(abbreviation)))
                        select c;
            courses = query.ToList();                
            List<Course> listOfCourses = new List<Course>();
            foreach (var c in courses)
            {
                listOfCourses.Add(EntityMappingManager.MapCourseContent(c));
            }
            return listOfCourses;
        }

        //http://mycourseuts.azurewebsites.net/api/course/coursesrelationship?courseID=C10143
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


        public void PostCourse(Course course)
        {
            using (var scope = new TransactionScope())
            {
                using (var context = new MyCourseDBEntities())
                {
                        Courses newRow = new Courses();
                        newRow.ID = course.ID;
                        newRow.Name = course.Name;
                        newRow.Abbreviation = course.Abbreviation;
                        newRow.Active = course.Active;
                        newRow.Years = course.Years;
                        newRow.Stages = course.Stages;
                        newRow.Version = course.Version;
                        newRow.CategoryTypeDescription = course.CategoryTypeDescription;
                        newRow.CreditPoints = course.CreditPoints;
                        newRow.CourseTypes.ID = course.CourseType.ID;
                        context.Courses.Add(newRow);
                        context.SaveChanges();
                }
                scope.Complete();
            }
        }

        public void DeleteCourse(Course course)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.Courses
                        where c.ID.Equals(course.ID)
                        select c;
            var deleteCourse = query.First();
            context.Courses.Remove(deleteCourse);
            context.SaveChanges();
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
