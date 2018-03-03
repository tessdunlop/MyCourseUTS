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


        public Subject GetSubject(string subjectID)
        {
            Subject subject;
            var context = new MyCourseDBEntities();
            var query = from c in context.Subjects
                        where c.ID.Equals(Convert.ToInt32(subjectID))
                        select c;
            subject = EntityMappingManager.MapSubjectContent(query.FirstOrDefault());
            return subject;
        }

        public List<Subject> GetSubjects(string subjectID, string name, string abbreviation)
        {
            List<Subjects> subjects;
            var context = new MyCourseDBEntities();
            var query = from c in context.Subjects
                        where ((c.ID.ToString().Contains(subjectID) && subjectID != "") || (String.IsNullOrEmpty(subjectID)))
                        && ((c.Name.Contains(name) && name != "") || (String.IsNullOrEmpty(name)))
                        && ((c.Abbreviation.Contains(abbreviation) && abbreviation != "") || (String.IsNullOrEmpty(abbreviation)))
                        select c;
            subjects = query.ToList();
            List<Subject> listOfSubject = new List<Subject>();
            foreach (var c in subjects)
            {
                listOfSubject.Add(EntityMappingManager.MapSubjectContent(c));
            }
            return listOfSubject;
        }

        public void PostSubject(Subject subject)
        {
            using (var scope = new TransactionScope())
            {
                using (var context = new MyCourseDBEntities())
                {
                    Subjects newRow = new Subjects();
                    newRow.ID = subject.ID;
                    newRow.Name = subject.Name;
                    newRow.CreditPoints = subject.CreditPoints;
                    newRow.Abbreviation = subject.Abbreviation;
                    newRow.Active = subject.Active;
                    newRow.Version = subject.Version;
                    context.Subjects.Add(newRow);
                    context.SaveChanges();
                }
                scope.Complete();
            }
        }

        public void DeleteSubjects(Subject subject)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.Subjects
                        where c.ID.ToString().Equals(subject.ID)
                        select c;
            var deleteSubject = query.First();
            context.Subjects.Remove(deleteSubject);
            context.SaveChanges();
        }
    }
}
