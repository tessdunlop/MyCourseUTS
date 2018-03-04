using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyCourseUTS.DataModel;
using System.Web;
using System.Transactions;



namespace MyCourseUTS.Repository
{
    public class MyCourseRepository
    {
        public List<MyCourseUTS.DataModel.Courses> GetAllCourses()
        {
            List<MyCourseUTS.DataModel.Courses> courses;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.Courses
                        where c.Active.Equals("1")
                        select c;
            courses = query.ToList();
            return courses;
        }

        public List<MyCourseUTS.DataModel.Courses> GetCourses(string courseID, string name, string abbreviation)
        {
            List<MyCourseUTS.DataModel.Courses> courses;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.Courses
                        where ((c.ID.Contains(courseID) && courseID != "") || (String.IsNullOrEmpty(courseID)))
                        && ((c.Name.Contains(name) && name != "") || (String.IsNullOrEmpty(name)))
                        && ((c.Abbreviation.Contains(abbreviation) && abbreviation != "") || (String.IsNullOrEmpty(abbreviation)))
                        select c;
            courses = query.ToList();
            return courses;
        }

        public MyCourseUTS.DataModel.Courses GetCourse(string courseID, string name, string abbreviation)
        {
            MyCourseUTS.DataModel.Courses course;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.Courses
                        where ((c.ID.Equals(courseID) && courseID != "") || (String.IsNullOrEmpty(courseID)))
                        && ((c.Name.Equals(name) && name != "") || (String.IsNullOrEmpty(name)))
                        && ((c.Abbreviation.Equals(abbreviation) && abbreviation != "") || (String.IsNullOrEmpty(abbreviation)))
                        select c;
            course = query.First();
            return course;
        }

        public void AddCourse(List<MyCourseUTS.DataModel.Courses> courses)
        {
            using (var scope = new TransactionScope())
            {
                using (var context = new DataModel.MyCourseDBEntities())
                {
                    foreach (Courses c in courses)
                    {
                        Courses newRow = new Courses();
                        newRow.ID = c.ID;
                        newRow.Name = c.Name;
                        newRow.Abbreviation = c.Abbreviation;
                        newRow.Active = c.Active;
                        newRow.Years = c.Years;
                        newRow.Stages = c.Stages;
                        newRow.Version = c.Version;
                        newRow.VersionDescription = c.VersionDescription;
                        newRow.CreditPoints = c.CreditPoints;
                        newRow.CourseTypes.ID = c.CourseTypes.ID;//NOT SURE ABOUT THIS ONE???

                        context.Courses.Add(newRow);
                        context.SaveChanges();
                    }
                }
                scope.Complete();
            }
        }

        public void DeleteCourse(Courses course)
        {
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.Courses
                        where c.ID.Equals(course.ID)
                        select c;
            var deleteCourse = query.First();
            context.Courses.Remove(deleteCourse);
            context.SaveChanges();
        }


        public List<MyCourseUTS.DataModel.Majors> GetAllMajors()
        {
            List<MyCourseUTS.DataModel.Majors> majors;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.Majors
                        where c.Active.Equals("1")
                        select c;
            majors = query.ToList();
            return majors;
        }

        public List<MyCourseUTS.DataModel.Majors> GetMajors(string majorID, string name, string abbreviation)
        {
            List<MyCourseUTS.DataModel.Majors> majors;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.Majors
                        where ((c.ID.Contains(majorID) && majorID != "") || (String.IsNullOrEmpty(majorID)))
                        && ((c.Name.Contains(name) && name != "") || (String.IsNullOrEmpty(name)))
                        && ((c.Abbreviation.Contains(abbreviation) && abbreviation != "") || (String.IsNullOrEmpty(abbreviation)))
                        select c;
            majors = query.ToList();
            return majors;
        }

        public MyCourseUTS.DataModel.Majors GetMajor(string majorID, string name, string abbreviation)
        {
            MyCourseUTS.DataModel.Majors major;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.Majors
                        where ((c.ID.Equals(majorID) && majorID != "") || (String.IsNullOrEmpty(majorID)))
                        && ((c.Name.Equals(name) && name != "") || (String.IsNullOrEmpty(name)))
                        && ((c.Abbreviation.Equals(abbreviation) && abbreviation != "") || (String.IsNullOrEmpty(abbreviation)))
                        select c;
            major = query.First();
            return major;
        }

        public List<MyCourseUTS.DataModel.SubMajors> GetAllSubMajors()
        {
            List<MyCourseUTS.DataModel.SubMajors> subMajors;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.SubMajors
                        where c.Active.Equals("1")
                        select c;
            subMajors = query.ToList();
            return subMajors;
        }

        public List<MyCourseUTS.DataModel.SubMajors> GetSubMajors(string subMajorID, string name, string abbreviation)
        {
            List<MyCourseUTS.DataModel.SubMajors> subMajors;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.SubMajors
                        where ((c.ID.Contains(subMajorID) && subMajorID != "") || (String.IsNullOrEmpty(subMajorID)))
                        && ((c.Name.Contains(name) && name != "") || (String.IsNullOrEmpty(name)))
                        && ((c.Abbreviation.Contains(abbreviation) && abbreviation != "") || (String.IsNullOrEmpty(abbreviation)))
                        select c;
            subMajors = query.ToList();
            return subMajors;
        }

        public MyCourseUTS.DataModel.SubMajors GetSubMajor(string subMajorID, string name, string abbreviation)
        {
            MyCourseUTS.DataModel.SubMajors subMajor;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.SubMajors
                        where ((c.ID.Equals(subMajorID) && subMajorID != "") || (String.IsNullOrEmpty(subMajorID)))
                        && ((c.Name.Equals(name) && name != "") || (String.IsNullOrEmpty(name)))
                        && ((c.Abbreviation.Equals(abbreviation) && abbreviation != "") || (String.IsNullOrEmpty(abbreviation)))
                        select c;
            subMajor = query.First();
            return subMajor;
        }

        public List<MyCourseUTS.DataModel.Streams> GetAllStreams()
        {
            List<MyCourseUTS.DataModel.Streams> streams;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.Streams
                        where c.Active.Equals("1")
                        select c;
            streams = query.ToList();
            return streams;
        }

        public List<MyCourseUTS.DataModel.Streams> GetStreams(string streamID, string name, string abbreviation)
        {
            List<MyCourseUTS.DataModel.Streams> streams;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.Streams
                        where ((c.ID.Contains(streamID) && streamID != "") || (String.IsNullOrEmpty(streamID)))
                        && ((c.Name.Contains(name) && name != "") || (String.IsNullOrEmpty(name)))
                        && ((c.Abbreviation.Contains(abbreviation) && abbreviation != "") || (String.IsNullOrEmpty(abbreviation)))
                        select c;
            streams = query.ToList();
            return streams;
        }

        public MyCourseUTS.DataModel.Streams GetStream(string streamID, string name, string abbreviation)
        {
            MyCourseUTS.DataModel.Streams stream;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.Streams
                        where ((c.ID.Equals(streamID) && streamID != "") || (String.IsNullOrEmpty(streamID)))
                        && ((c.Name.Equals(name) && name != "") || (String.IsNullOrEmpty(name)))
                        && ((c.Abbreviation.Equals(abbreviation) && abbreviation != "") || (String.IsNullOrEmpty(abbreviation)))
                        select c;
            stream = query.First();
            return stream;
        }


        public List<MyCourseUTS.DataModel.ChoiceBlocks> GetAllChoiceBlocks()
        {
            List<MyCourseUTS.DataModel.ChoiceBlocks> choiceBlocks;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.ChoiceBlocks
                        where c.Active.Equals("1")
                        select c;
            choiceBlocks = query.ToList();
            return choiceBlocks;
        }

        public List<MyCourseUTS.DataModel.ChoiceBlocks> GetChoiceBlocks(string choiceBlockID, string name, string abbreviation)
        {
            List<MyCourseUTS.DataModel.ChoiceBlocks> choiceBlock;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.ChoiceBlocks
                        where ((c.ID.Contains(choiceBlockID) && choiceBlockID != "") || (String.IsNullOrEmpty(choiceBlockID)))
                        && ((c.Name.Contains(name) && name != "") || (String.IsNullOrEmpty(name)))
                        && ((c.Abbreviation.Contains(abbreviation) && abbreviation != "") || (String.IsNullOrEmpty(abbreviation)))
                        select c;
            choiceBlock = query.ToList();
            return choiceBlock;
        }

        public MyCourseUTS.DataModel.ChoiceBlocks GetChoiceBlock(string choiceBlockID, string name, string abbreviation)
        {
            MyCourseUTS.DataModel.ChoiceBlocks choiceBlock;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.ChoiceBlocks
                        where ((c.ID.Equals(choiceBlockID) && choiceBlockID != "") || (String.IsNullOrEmpty(choiceBlockID)))
                        && ((c.Name.Equals(name) && name != "") || (String.IsNullOrEmpty(name)))
                        && ((c.Abbreviation.Equals(abbreviation) && abbreviation != "") || (String.IsNullOrEmpty(abbreviation)))
                        select c;
            choiceBlock = query.First();
            return choiceBlock;
        }


        public List<MyCourseUTS.DataModel.Subjects> GetAllSubjects()
        {
            List<MyCourseUTS.DataModel.Subjects> subjects;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.Subjects
                        where c.Active.Equals("1")
                        select c;
            subjects = query.ToList();
            return subjects;
        }

        public List<MyCourseUTS.DataModel.Subjects> GetSubjects(string subjectID, string name, string abbreviation)
        {
            List<MyCourseUTS.DataModel.Subjects> subjects;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.Subjects
                        where ((c.ID.ToString().Contains(subjectID) && subjectID != "") || (String.IsNullOrEmpty(subjectID)))
                        && ((c.Name.Contains(name) && name != "") || (String.IsNullOrEmpty(name)))
                        && ((c.Abbreviation.Contains(abbreviation) && abbreviation != "") || (String.IsNullOrEmpty(abbreviation)))
                        select c;
            subjects = query.ToList();
            return subjects;
        }

        public MyCourseUTS.DataModel.Subjects GetSubject(string subjectID, string name, string abbreviation)
        {
            MyCourseUTS.DataModel.Subjects subject;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.Subjects
                        where ((c.ID.ToString().Equals(subjectID) && subjectID!= "") || (String.IsNullOrEmpty(subjectID)))
                        && ((c.Name.Equals(name) && name != "") || (String.IsNullOrEmpty(name)))
                        && ((c.Abbreviation.Equals(abbreviation) && abbreviation != "") || (String.IsNullOrEmpty(abbreviation)))
                        select c;
            subject = query.First();
            return subject;
        }


        public List<MyCourseUTS.DataModel.SubjectGroupingsCredit> GetAllSubjectsGroupings()
        {
            List<MyCourseUTS.DataModel.SubjectGroupingsCredit> subjectGroupings;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.SubjectGroupingsCredit
                        select c;
            subjectGroupings = query.ToList();
            return subjectGroupings;
        }

        public List<MyCourseUTS.DataModel.SubjectGroupingsCredit> GetSubjectsGroupings(int subjectGroupingID)
        {
            List<MyCourseUTS.DataModel.SubjectGroupingsCredit> subjectGroupings;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.SubjectGroupingsCredit
                        where c.ID.ToString().Contains(subjectGroupingID.ToString())
                        select c;
            subjectGroupings = query.ToList();
            return subjectGroupings;
        }

        public MyCourseUTS.DataModel.SubjectGroupingsCredit GetSubjectsGrouping(int subjectGroupingID)
        {
            MyCourseUTS.DataModel.SubjectGroupingsCredit subjectGrouping;
            var context = new DataModel.MyCourseDBEntities();
            var query = from c in context.SubjectGroupingsCredit
                        where c.ID.ToString().Equals(subjectGroupingID.ToString())
                        select c;
            subjectGrouping = query.First();
            return subjectGrouping;
        }
    }
    }
