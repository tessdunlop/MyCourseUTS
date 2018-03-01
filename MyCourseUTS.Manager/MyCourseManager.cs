using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace MyCourseUTS.Manager
{
    public class MyCourseManager
    {


        public List<MyCourseUTS.DataModel.Courses> GetAllCourses()
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetAllCourses();
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the list of courses", ex);
            }
        }

        public List<MyCourseUTS.DataModel.Courses> GetCourses(string courseID, string name, string abbreviation)
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetCourses(courseID, name, abbreviation);
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the list of courses", ex);
            }
        }

        public MyCourseUTS.DataModel.Courses GetCourse(string courseID, string name, string abbreviation)
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetCourse(courseID, name, abbreviation);
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the course", ex);
            }
        }

        public void AddCourse(List<MyCourseUTS.DataModel.Courses> courses)
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                rep.AddCourse(courses);
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue adding courses", ex);
            }
        }

        public void DeleteCourse(MyCourseUTS.DataModel.Courses courses)
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                rep.DeleteCourse(courses);
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue deleting courses", ex);
            }
        }

        public List<MyCourseUTS.DataModel.Majors> GetAllMajors()
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetAllMajors();
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the list of majors", ex);
            }
        }

        public List<MyCourseUTS.DataModel.Majors> GetMajors(string majorID, string name, string abbreviation)
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetMajors(majorID, name, abbreviation);
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the list of majors", ex);
            }
        }

        public MyCourseUTS.DataModel.Majors GetMajor(string majorID, string name, string abbreviation)
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetMajor(majorID, name, abbreviation);
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the major", ex);
            }
        }

        public List<MyCourseUTS.DataModel.SubMajors> GetAllSubMajors()
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetAllSubMajors();
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the list of submajors", ex);
            }
        }

        public List<MyCourseUTS.DataModel.SubMajors> GetSubMajors(string subMajorID, string name, string abbreviation)
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetSubMajors(subMajorID, name, abbreviation);
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the list of submajors", ex);
            }
        }

        public MyCourseUTS.DataModel.SubMajors GetSubMajor(string subMajorID, string name, string abbreviation)
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetSubMajor(subMajorID, name, abbreviation);
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the submajor", ex);
            }
        }

        public List<MyCourseUTS.DataModel.Streams> GetAllStreams()
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetAllStreams();
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the list of streams", ex);
            }
        }

        public List<MyCourseUTS.DataModel.Streams> GetStreams(string streamID, string name, string abbreviation)
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetStreams(streamID, name, abbreviation);
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the list of streams", ex);
            }
        }

        public MyCourseUTS.DataModel.Streams GetStream(string streamID, string name, string abbreviation)
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetStream(streamID, name, abbreviation);
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the stream", ex);
            }
        }

        public List<MyCourseUTS.DataModel.ChoiceBlocks> GetAllChoiceBlocks()
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetAllChoiceBlocks();
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the list of choice blocks", ex);
            }
        }

        public List<MyCourseUTS.DataModel.ChoiceBlocks> GetChoiceBlocks(string choiceBlockID, string name, string abbreviation)
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetChoiceBlocks(choiceBlockID, name, abbreviation);
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the list of choice blocks", ex);
            }
        }

        public MyCourseUTS.DataModel.ChoiceBlocks GetChoiceBlock(string choiceBlockID, string name, string abbreviation)
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetChoiceBlock(choiceBlockID, name, abbreviation);
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the choice block", ex);
            }
        }

        public List<MyCourseUTS.DataModel.Subjects> GetAllSubjects()
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetAllSubjects();
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the list of subjects", ex);
            }
        }

        public List<MyCourseUTS.DataModel.Subjects> GetSubjects(string subjectID, string name, string abbreviation)
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetSubjects(subjectID, name, abbreviation);
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the list of subjects", ex);
            }
        }

        public MyCourseUTS.DataModel.Subjects GetSubject(string subjectID, string name, string abbreviation)
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetSubject(subjectID, name, abbreviation);
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the subject", ex);
            }
        }

        public List<MyCourseUTS.DataModel.SubjectGroupingsCredit> GetAllSubjectsGroupings()
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetAllSubjectsGroupings();
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the list of subject groupings", ex);
            }
        }

        public List<MyCourseUTS.DataModel.SubjectGroupingsCredit> GetSubjectsGroupings(string subjectGroupingID)
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetSubjectsGroupings(Convert.ToInt32(subjectGroupingID));
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the list of subject groupings", ex);
            }
        }

        public MyCourseUTS.DataModel.SubjectGroupingsCredit GetSubjectsGrouping(string subjectGroupingID)
        {
            try
            {
                var rep = new Repository.MyCourseRepository();
                return rep.GetSubjectsGrouping(Convert.ToInt32(subjectGroupingID));
            }
            catch (Exception ex)
            {
                throw new Exception("There was an issue retreving the subject grouping", ex);
            }
        }
    }
}
