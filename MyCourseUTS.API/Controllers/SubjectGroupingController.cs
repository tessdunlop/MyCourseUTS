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
    public class SubjectGroupingController : ApiController
    {
        //http://mycourseuts.azurewebsites.net/api/subjectgrouping/getallsubjectgroupings
        public List<SubjectGroup> GetAllSubjectGroupings()
        {
            List<SubjectGroupingsCredit> subjectGroupings;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupingsCredit
                        select c;
            subjectGroupings = query.ToList();

            List<SubjectGroup> listOfSubjectGroupings = new List<SubjectGroup>();
            foreach (var c in subjectGroupings)
            {
                listOfSubjectGroupings.Add(EntityMappingManager.MapSubjectGroupingContent(c));
            }
            return listOfSubjectGroupings;
        }

        //http://mycourseuts.azurewebsites.net/api/subjectgrouping/GetSubjectGrouping?subjectgroupingID=4
        public SubjectGroup GetSubjectGrouping(int subjectGroupingID)
        {
            SubjectGroup subjectGroup;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupingsCredit
                        where c.ID.Equals(subjectGroupingID)
                        select c;
            subjectGroup = EntityMappingManager.MapSubjectGroupingContent(query.FirstOrDefault());
            return subjectGroup;
        }

        //http://mycourseuts.azurewebsites.net/api/subjectgrouping/GetSubjectGroupings?subjectgroupingID=4
        public List<SubjectGroup> GetSubjectGroupings(string subjectGroupingID)
        {
            List<SubjectGroupingsCredit> subjectGroupings;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupingsCredit
                        where ((c.ID.ToString().Contains(subjectGroupingID) && subjectGroupingID != "") || (String.IsNullOrEmpty(subjectGroupingID)))
                        select c;
            subjectGroupings = query.ToList();
            List<SubjectGroup> listOfSubjectGroup = new List<SubjectGroup>();
            foreach (var c in subjectGroupings)
            {
                listOfSubjectGroup.Add(EntityMappingManager.MapSubjectGroupingContent(c));
            }
            return listOfSubjectGroup;
        }

        //http://mycourseuts.azurewebsites.net/api/subjectgrouping/GetSubjectGroupingRelationship?subjectgroupingID=100
        public List<SubjectGroupingRelationship> GetSubjectGroupingRelationship(string subjectGroupingID)
        {
            List<SubjectGroupings> subjectGroup;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupings.Include("Subjects").Include("ChoiceBlocks").Include("SubjectGroupingsCredit").Include("Majors").Include("Streams").Include("SubMajors")
                        where c.GroupID.ToString().Equals(subjectGroupingID)
                        select c;
            subjectGroup = query.ToList();

            List<SubjectGroupingRelationship> listofSubjectGroup = new List<SubjectGroupingRelationship>();
            foreach (var c in subjectGroup)
            {
                listofSubjectGroup.Add(EntityMappingManager.MapSubjectGroupingRelationshipContent(c));
            }
            return listofSubjectGroup;
        }


        public void PostChoiceBlock(SubjectGroup subjectGroup)
        {
            using (var scope = new TransactionScope())
            {
                using (var context = new MyCourseDBEntities())
                {
                    SubjectGroupingsCredit newRow = new SubjectGroupingsCredit();
                    newRow.ID = subjectGroup.ID;
                    newRow.SubjectPresent = subjectGroup.SubjectPresent;
                    newRow.MajorPresent = subjectGroup.MajorPresent;
                    newRow.ChoiceBlockPresent = subjectGroup.ChoiceBlockPresent;
                    newRow.StreamPresent = subjectGroup.StreamPresent;
                    newRow.SubMajorPresent = subjectGroup.SubMajorPresent;
                    newRow.CreditPoints = subjectGroup.CreditPoints;
                    context.SubjectGroupingsCredit.Add(newRow);
                    context.SaveChanges();
                }
                scope.Complete();
            }
        }

        public void DeleteSubjectGroup(SubjectGroup subjectGroup)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupingsCredit
                        where c.ID.ToString().Equals(subjectGroup.ID)
                        select c;
            var deleteSubjectGroup = query.First();
            context.SubjectGroupingsCredit.Remove(deleteSubjectGroup);
            context.SaveChanges();
        }
    }
}
