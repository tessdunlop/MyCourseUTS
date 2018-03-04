﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Transactions;
using System.Web.Http;
using MyCourseUTS.DataModel;
using MyCourseUTS.Entity;
using MyCourseUTS.Manager;
using System.Web.Http.Cors;
using System.Web;

namespace MyCourseUTS.API.Controllers
{
    public class SubjectGroupingController : ApiController
    {
        //http://mycourseuts.azurewebsites.net/api/subjectgrouping/getallsubjectgroupings
        [EnableCors(origins: "*", headers: "*", methods: "*")]
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
        [EnableCors(origins: "*", headers: "*", methods: "*")]
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
        [EnableCors(origins: "*", headers: "*", methods: "*")]
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
        [EnableCors(origins: "*", headers: "*", methods: "*")]
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

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void PostSubjectGrouping(List<SubjectGroupings> subjectGrouping, int creditPoints)
        {
            int id;
            using (var scope = new TransactionScope())
            {
                using (var context = new MyCourseDBEntities())
                {
                    SubjectGroupingsCredit newGroup = new SubjectGroupingsCredit();

                    bool hasSubject = false;
                    bool hasChoiceBlock = false;
                    bool hasStream = false;
                    bool hasMajor = false;
                    bool hasSubMajor = false;

                    foreach (var s in subjectGrouping)
                    {
                        if (s.Subjects != null)
                        {
                            hasSubject = true;
                        }
                        else if (s.ChoiceBlocks != null)
                        {
                            hasChoiceBlock = true;
                        }
                        else if (s.Streams != null)
                        {
                            hasStream = true;
                        }
                        else if (s.Majors != null)
                        {
                            hasMajor = true;
                        }
                        else if (s.SubMajors != null)
                        {
                            hasSubMajor = true;
                        }
                    }

                    if (hasSubject == true)
                    {
                        newGroup.SubjectPresent = 1;
                    }
                    else
                    {
                        newGroup.SubjectPresent = 0;
                    }
                    if (hasChoiceBlock == true)
                    {
                        newGroup.ChoiceBlockPresent = 1;
                    }
                    else
                    {
                        newGroup.ChoiceBlockPresent = 0;
                    }
                    if (hasStream == true)
                    {
                        newGroup.StreamPresent = 1;
                    }
                    else
                    {
                        newGroup.StreamPresent = 0;
                    }
                    if (hasMajor == true)
                    {
                        newGroup.MajorPresent = 1;
                    }
                    else
                    {
                        newGroup.MajorPresent = 0;
                    }
                    if (hasSubMajor == true)
                    {
                        newGroup.SubMajorPresent = 1;
                    }
                    else
                    {
                        newGroup.SubMajorPresent = 0;
                    }
                    newGroup.CreditPoints = creditPoints;
                    context.SubjectGroupingsCredit.Add(newGroup);
                    context.SaveChanges();
                    id = newGroup.ID;

                }
                using (var context = new MyCourseDBEntities())
                {
                    SubjectGroupings newGroupings = new SubjectGroupings();
                    newGroupings.GroupID = id;
                    foreach (var s in subjectGrouping) {
                        if (s.Subjects != null){
                            newGroupings.SubjectID = s.SubjectID;
                        }
                        else if (s.ChoiceBlocks != null) {
                            newGroupings.ChoiceBlockID = s.ChoiceBlockID;
                        }
                        else if (s.Streams != null) {
                            newGroupings.StreamID = s.StreamID;
                        }
                        else if (s.Majors != null) {
                            newGroupings.MajorID = s.MajorID;
                        }
                        else if (s.SubMajors != null) {
                            newGroupings.SubMajorID = s.SubMajorID;
                        }
                    } 
                    context.SubjectGroupings.Add(newGroupings);
                    context.SaveChanges();                    
                }
                scope.Complete();
            }
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteSubjectGroup(int id)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupingsCredit
                        where c.ID.ToString().Equals(id)
                        select c;
            var deleteSubjectGroup = query.First();
            context.SubjectGroupingsCredit.Remove(deleteSubjectGroup);
            var secondQuery = from c in context.SubjectGroupings
                        where c.ID.ToString().Equals(id)
                        select c;
            var deleteSubjectGroupings = secondQuery.ToList();
            context.SubjectGroupingsCredit.Remove(deleteSubjectGroup);
            foreach (var d in deleteSubjectGroupings) {
                context.SubjectGroupings.Remove(d);
            }
            context.SaveChanges();
        }
    }
}
