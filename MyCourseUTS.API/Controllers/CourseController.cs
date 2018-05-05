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
        /// <summary>
        /// API used to retrieve all of the courses
        /// </summary>
        /// <returns></returns>
        //http://mycourseuts.azurewebsites.net/services/api/course/getallcourses
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

        /// <summary>
        /// API used to retrieve a particular course based on the ID
        /// </summary>
        /// <param name="courseID"></param>
        /// <returns></returns>
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        //http://mycourseuts.azurewebsites.net/services/api/course/getcourse?courseID=C04273
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

        /// <summary>
        /// API used to retrieve all courses that contain a term from the name, ID, or abbreviation
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        //http://mycourseuts.azurewebsites.net/services/api/course/getcourses?value=bsc
        public List<Course> GetCourses(string value)
        {
            List<Courses> courses;
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

        /// <summary>
        /// API used to retrieve all of a particular courses relationships
        /// </summary>
        /// <param name="courseID"></param>
        /// <returns></returns>
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        //http://mycourseuts.azurewebsites.net/services/api/course/getcourserelationship?courseID=C10143
        public List<CourseRelationship> GetCourseRelationship(string courseID)
        {
            List<DataModel.CourseRelationships> course;
            var context = new MyCourseDBEntities();
            var query = from c in context.CourseRelationships.Include("Courses.CourseTypes").Include("Subjects").Include("ChoiceBlocks").Include("SubjectTypes").Include("SubjectGroupings").Include("Majors").Include("ChoiceBlocks").Include("SubMajors")
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

        /// <summary>
        /// API used to retrieve all of the course types available
        /// </summary>
        /// <returns></returns>
        //http://mycourseuts.azurewebsites.net/services/api/course/getcoursetypes
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


        /// <summary>
        /// API used to save a course to the database
        /// </summary>
        /// <param name="course"></param>
        //http://mycourseuts.azurewebsites.net/Services/api/course/postcourse
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public string PostCourse([FromBody]Course course)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.Courses.Include("CourseTypes")
                        where c.ID.Equals(course.ID)
                        select c;
            var existingCourse = query.FirstOrDefault();
            if (query.Any())
            {
                existingCourse.ID = course.ID;
                existingCourse.Name = course.Name;
                existingCourse.Abbreviation = course.Abbreviation;
                existingCourse.Active = course.Active;
                existingCourse.Years = course.Years;
                existingCourse.Stages = course.Stages;
                existingCourse.Version = course.Version;
                existingCourse.VersionDescription = course.VersionDescription;
                existingCourse.CreditPoints = course.CreditPoints;
                existingCourse.CourseTypeID = course.CourseType.ID;
                existingCourse.CourseDescription = course.CourseDescription;
                context.SaveChanges();
            }
            else
            {
                Courses newRow = new Courses();
                newRow.ID = course.ID;
                newRow.Name = course.Name;
                newRow.Abbreviation = course.Abbreviation;
                newRow.Active = course.Active;
                newRow.Years = course.Years;
                newRow.Stages = course.Stages;
                newRow.Version = course.Version;
                newRow.VersionDescription = course.VersionDescription;
                newRow.CreditPoints = course.CreditPoints;
                newRow.CourseTypeID = course.CourseType.ID;
                newRow.CourseDescription = course.CourseDescription;
                context.Courses.Add(newRow);
                context.SaveChanges();
            }
            return course.ID + " - " + course.Name + " was successfully saved";
        }

        /// <summary>
        /// API used to delete a course and its relationships from the database
        /// </summary>
        /// <param name="courseID"></param>
        //http://mycourseuts.azurewebsites.net/Services/api/course/deletecourse?courseID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteCourse(string courseID)
        {
            DeleteCourseRelationship(courseID);
            var context = new MyCourseDBEntities();
            var query = from c in context.Courses
                        where c.ID.Equals(courseID)
                        select c;
            var deleteCourse = query.FirstOrDefault();
            context.Courses.Remove(deleteCourse);
            context.SaveChanges();
        }

        /// <summary>
        /// API used to add a particular courses relationships
        /// </summary>
        /// <param name="courseID"></param>
        /// <param name="relationships"></param>
        //http://mycourseuts.azurewebsites.net/Services/api/course/postcourserelationship?courseID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public string PostCourseRelationship(string courseID, [FromBody]List<CourseRelationship> relationships)
        {
            if (relationships != null)
            {
                var context = new MyCourseDBEntities();
                DeleteCourseRelationship(courseID);
                using (var scope = new TransactionScope())
                {
                    foreach (var rel in relationships)
                    {
                        CourseRelationships newRow = new CourseRelationships();
                        newRow.CourseID = rel.Course.ID;
                        newRow.DateUpdated = DateTime.Now;
                        bool template = false;
                        //newRow.HasTemplate = rel.HasTemplate;
                        if (rel.Stage != null)
                        {
                            newRow.Stage = rel.Stage;
                        }
                        if (rel.Year != null)
                        {
                            newRow.Year = rel.Year;
                        }
                        if (rel.SubjectType != null)
                        {
                            newRow.SubjectTypeID = rel.SubjectType.ID;
                            template = true;
                        }

                        if (rel.Subject != null)
                        {
                            newRow.SubjectID = rel.Subject.ID;
                        }
                        if (rel.ChoiceBlock != null)
                        {
                            newRow.ChoiceBlockID = rel.ChoiceBlock.ID;
                        }
                        if (rel.Stream != null)
                        {
                            newRow.StreamID = rel.Stream.ID;
                        }
                        if (rel.SubMajor != null)
                        {
                            newRow.SubMajorID = rel.SubMajor.ID;
                        }
                        if (rel.SubjectGrouping != null)
                        {
                            newRow.GroupID = rel.SubjectGrouping.ID;
                        }
                        if (rel.Major != null)
                        {
                            newRow.MajorID = rel.Major.ID;
                        }
                        newRow.HasTemplate = template;

                        context.CourseRelationships.Add(newRow);
                        context.SaveChanges();
                    }
                    scope.Complete();
                   
                }
                
            }
            return "success";
        }

        /// <summary>
        /// API used to delete a particular courses relationships
        /// </summary>
        /// <param name="courseID"></param>
        //http://mycourseuts.azurewebsites.net/Services/api/course/deletecourserelationship?courseID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteCourseRelationship(string courseID)
        {
            List<DataModel.CourseRelationships> course;
            var context = new MyCourseDBEntities();
            var query = from c in context.CourseRelationships
                        where c.Courses.ID.Equals(courseID)
                        select c;
            course = query.ToList();

            if (course.Count != 0)
            {
                foreach (var row in course)
                {
                    context.CourseRelationships.Remove(row);
                    context.SaveChanges();
                }
            }
        }

    }
}

