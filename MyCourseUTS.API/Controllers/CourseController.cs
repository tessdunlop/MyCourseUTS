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
using System.Web.Http.Cors;
using System.Web;


namespace MyCourseUTS.API.Controllers
{
    public class CourseController : ApiController
    {
        //http://mycourseuts.azurewebsites.net/api/course/getallcourses
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<Course> GetAllCourses()
        {
            List<Courses> courses;
            var context = new MyCourseDBEntities();
            var query = from c in context.Courses.Include("CourseTypes")
                        where c.Active.Equals(true)
                        select c;
            courses = query.ToList();

            List<Course> listOfCourses = new List<Course>();
            foreach (var c in courses)
            {
                listOfCourses.Add(EntityMappingManager.MapCourseContent(c));
            }
            return listOfCourses;
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        //http://mycourseuts.azurewebsites.net/api/course/getcourse?courseID=C04273
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

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        //http://mycourseuts.azurewebsites.net/api/course/getcourses?value=bsc
        public List<Course> GetCourses(string value)
        {
            List <Courses> courses;
            var context = new MyCourseDBEntities();
            var query = from c in context.Courses.Include("CourseTypes")
                        where ((c.ID.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        || ((c.Name.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        || ((c.Abbreviation.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        select c;
            courses = query.ToList();                
            List<Course> listOfCourses = new List<Course>();
            foreach (var c in courses)
            {
                listOfCourses.Add(EntityMappingManager.MapCourseContent(c));
            }
            return listOfCourses;
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        //http://mycourseuts.azurewebsites.net/api/course/getcourserelationship?courseID=C10143
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

        //http://mycourseuts.azurewebsites.net/api/subject/GetCourseMajorRelationship?majorid=MAJ03476
        public List<Entity.CourseMajorRelationship> GetCourseMajorRelationship(string majorID)
        {
            List<DataModel.CourseMajorRelationship> courses;
            var context = new MyCourseDBEntities();
            var query = from c in context.CourseMajorRelationship.Include("Courses").Include("Majors")
                        where c.MajorID.Equals(majorID)
                        select c;
            courses = query.ToList();

            List<Entity.CourseMajorRelationship> listOfCourses = new List<Entity.CourseMajorRelationship>();
            foreach (var c in courses)
            {
                listOfCourses.Add(EntityMappingManager.MapCourseMajorRelationshipContent(c));
            }
            return listOfCourses;
        }

        //[EnableCors(origins: "*", headers: "*", methods: "*")]
        //public void PostCourse(Course course)
        //{
        //    using (var scope = new TransactionScope())
        //    {
        //        using (var context = new MyCourseDBEntities())
        //        {
        //                Courses newRow = new Courses();
        //                newRow.ID = course.ID;
        //                newRow.Name = course.Name;
        //                newRow.Abbreviation = course.Abbreviation;
        //                newRow.Active = course.Active;
        //                newRow.Years = course.Years;
        //                newRow.Stages = course.Stages;
        //                newRow.Version = course.Version;
        //                newRow.VersionDescription = course.VersionDescription;
        //                newRow.CreditPoints = course.CreditPoints;
        //                newRow.CourseTypes.ID = course.CourseType.ID;
        //                context.Courses.Add(newRow);
        //                context.SaveChanges();
        //        }
        //        scope.Complete();
        //    }
        //}

        [EnableCors(origins: "*", headers: "*", methods: "*")]
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

        //http://mycourseuts.azurewebsites.net/api/course/getcoursetypes
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<Entity.CourseTypes> GetCourseTypes()
        {
            List<DataModel.CourseTypes> courseTypes;
            var context = new MyCourseDBEntities();
            var query = from c in context.CourseTypes
                        select c;
            courseTypes = query.ToList();

            List<Entity.CourseTypes> listOfCourseTypes = new List<Entity.CourseTypes>();
            foreach (var c in courseTypes)
            {
                listOfCourseTypes.Add(EntityMappingManager.MapCourseTypeContent(c));
            }
            return listOfCourseTypes;
        }
    }
}
