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
using System.Web.Http.Cors;
using System.Web;

namespace MyCourseUTS.API.Controllers
{
    public class ChoiceBlockController : ApiController
    {
        //http://mycourseuts.azurewebsites.net/services/api/choiceblock/getallchoiceblocks
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<ChoiceBlock> GetAllChoiceBlocks()
        {
            List<ChoiceBlocks> cbk;
            var context = new MyCourseDBEntities();
            var query = from c in context.ChoiceBlocks
                        where c.Active.Equals(true)
                        select c;
            cbk = query.ToList();

            List<ChoiceBlock> listOfCBK = new List<ChoiceBlock>();
            foreach (var c in cbk)
            {
                listOfCBK.Add(EntityMappingManager.MapChoiceBlockContent(c));
            }
            return listOfCBK;
        }

        //http://mycourseuts.azurewebsites.net/services/api/choiceblock/getchoiceblock?choiceblockid=CBK90009
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public ChoiceBlock GetChoiceBlock (string choiceBlockID)
        {
            ChoiceBlock choiceBlock;
            var context = new MyCourseDBEntities();
            var query = from c in context.ChoiceBlocks
                        where c.ID.Equals(choiceBlockID)
                        select c;
            choiceBlock = EntityMappingManager.MapChoiceBlockContent(query.FirstOrDefault());
            return choiceBlock;
        }

        //http://mycourseuts.azurewebsites.net/services/api/choiceblock/getchoiceblocks?value=CBK90
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<ChoiceBlock> GetChoiceBlocks(string value)
        {
            List<ChoiceBlocks> choiceBlocks;
            var context = new MyCourseDBEntities();
            var query = from c in context.ChoiceBlocks
                        where ((c.ID.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        || ((c.Name.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        || ((c.Abbreviation.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        select c;
            choiceBlocks = query.ToList();
            List<ChoiceBlock> listOfChoiceBlock = new List<ChoiceBlock>();
            foreach (var c in choiceBlocks)
            {
                listOfChoiceBlock.Add(EntityMappingManager.MapChoiceBlockContent(c));
            }
            return listOfChoiceBlock;
        }

        //http://mycourseuts.azurewebsites.net/services/api/choiceblock/getchoiceblockrelationship?choiceblockid=CBK90009
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<ChoiceBlockRelationship> GetChoiceBlockRelationship(string choiceBlockID)
        {
            List<ChoiceBlockRelationships> choiceBlock;
            var context = new MyCourseDBEntities();
            var query = from c in context.ChoiceBlockRelationships.Include("Subjects").Include("SubMajors").Include("Streams").Include("ChoiceBlocks").Include("SubjectGroupings")
                        where c.ChoiceBlockID.Equals(choiceBlockID)
                        select c;
            choiceBlock = query.ToList();

            List<ChoiceBlockRelationship> listofChoiceBlock = new List<ChoiceBlockRelationship>();
            foreach (var c in choiceBlock)
            {
                listofChoiceBlock.Add(EntityMappingManager.MapChoiceBlockRelationshipContent(c));
            }
            return listofChoiceBlock;
        }






        //http://mycourseuts.azurewebsites.net/Services/api/choiceblock/postchoiceblock
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void PostChoiceBlock([FromBody]ChoiceBlock choiceblock)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.ChoiceBlocks
                        where c.ID.Equals(choiceblock.ID)
                        select c;
            var existingCBK = query.FirstOrDefault();
            if (query.Any())
            {
                existingCBK.ID = choiceblock.ID;
                existingCBK.Name = choiceblock.Name;
                existingCBK.Abbreviation = choiceblock.Abbreviation;
                existingCBK.Active = choiceblock.Active;
                existingCBK.Version = choiceblock.Version;
                existingCBK.VersionDescription = choiceblock.VersionDescription;
                existingCBK.CreditPoints = choiceblock.CreditPoints;
                existingCBK.ChoiceBlockDescription = choiceblock.ChoiceBlockDescription;
                context.SaveChanges();
            }
            else
            {
                ChoiceBlocks newRow = new ChoiceBlocks();
                newRow.ID = choiceblock.ID;
                newRow.Name = choiceblock.Name;
                newRow.Abbreviation = choiceblock.Abbreviation;
                newRow.Active = choiceblock.Active;
                newRow.Version = choiceblock.Version;
                newRow.VersionDescription = choiceblock.VersionDescription;
                newRow.CreditPoints = choiceblock.CreditPoints;
                newRow.ChoiceBlockDescription = choiceblock.ChoiceBlockDescription;
                context.ChoiceBlocks.Add(newRow);
                context.SaveChanges();
            }
        }




        //http://mycourseuts.azurewebsites.net/Services/api/choiceblock/deletechoiceblock?choiceblockID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteChoiceBlock(string choiceBlockID)
        {
            DeleteChoiceBlockRelationship(choiceBlockID);
            //DeleteMajorRelationship(choiceBlockID);
            DeleteStreamRelationship(choiceBlockID);
            DeleteSubMajorRelationship(choiceBlockID);
            DeleteCourseRelationship(choiceBlockID);
            DeleteSubjectGroupingRelationship(choiceBlockID);
            var context = new MyCourseDBEntities();
            var query = from c in context.ChoiceBlocks
                        where c.ID.Equals(choiceBlockID)
                        select c;
            var deleteCBK = query.FirstOrDefault();
            context.ChoiceBlocks.Remove(deleteCBK);
            context.SaveChanges();
        }



        ////http://mycourseuts.azurewebsites.net/Services/api/major/DeleteMajorRelationship?choiceblockID=xxx
        //[EnableCors(origins: "*", headers: "*", methods: "*")]
        //public void DeleteMajorRelationship(string choiceBlockID)
        //{
        //    List<DataModel.MajorRelationships> major;
        //    var context = new MyCourseDBEntities();
        //    var query = from c in context.MajorRelationships
        //                where c.ChoiceBlocks.ID.Equals(choiceBlockID)
        //                select c;
        //    major = query.ToList();

        //    if (major.Count != 0)
        //    {
        //        foreach (var row in major)
        //        {
        //            context.MajorRelationships.Remove(row);
        //            context.SaveChanges();
        //        }
        //    }
        //}

        //http://mycourseuts.azurewebsites.net/Services/api/major/deletechoiceblockIDrelationship?choiceblockID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteChoiceBlockRelationship(string choiceBlockID)
        {
            List<DataModel.ChoiceBlockRelationships> cbk;
            var context = new MyCourseDBEntities();
            var query = from c in context.ChoiceBlockRelationships
                        where c.ChoiceBlocks.ID.Equals(choiceBlockID) || c.ChoiceBlocks1.ID.Equals(choiceBlockID)
                        select c;
            cbk = query.ToList();
            if (cbk.Count != 0)
            {
                foreach (var row in cbk)
                {
                    context.ChoiceBlockRelationships.Remove(row);
                    context.SaveChanges();
                }
            }
        }

        //http://mycourseuts.azurewebsites.net/Services/api/major/DeleteSubjectGroupingRelationship?choiceblockID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteSubjectGroupingRelationship(string choiceBlockID)
        {
            List<DataModel.SubjectGroupingRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupingRelationships
                        where c.ChoiceBlocks.ID.Equals(choiceBlockID)
                        select c;
            group = query.ToList();
            if (group.Count != 0)
            {
                foreach (var row in group)
                {
                    context.SubjectGroupingRelationships.Remove(row);
                    context.SaveChanges();
                }
            }
        }

        //http://mycourseuts.azurewebsites.net/Services/api/major/DeleteStreamRelationshipRelationship?choiceblockID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteStreamRelationship(string choiceBlockID)
        {
            List<DataModel.StreamRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.StreamRelationships
                        where c.ChoiceBlocks.ID.Equals(choiceBlockID)
                        select c;
            group = query.ToList();
            if (group.Count != 0)
            {
                foreach (var row in group)
                {
                    context.StreamRelationships.Remove(row);
                    context.SaveChanges();
                }
            }
        }
        //http://mycourseuts.azurewebsites.net/Services/api/major/DeleteSubMajorRelationship?choiceblockID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteSubMajorRelationship(string choiceBlockID)
        {
            List<DataModel.SubMajorRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubMajorRelationships
                        where c.ChoiceBlocks.ID.Equals(choiceBlockID)
                        select c;
            group = query.ToList();
            if (group.Count != 0)
            {
                foreach (var row in group)
                {
                    context.SubMajorRelationships.Remove(row);
                    context.SaveChanges();
                }
            }
        }
        //http://mycourseuts.azurewebsites.net/Services/api/major/DeleteCourseRelationship?choiceblockID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteCourseRelationship(string choiceBlockID)
        {
            List<DataModel.CourseRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.CourseRelationships
                        where c.ChoiceBlocks.ID.Equals(choiceBlockID)
                        select c;
            group = query.ToList();
            if (group.Count != 0)
            {
                foreach (var row in group)
                {
                    context.CourseRelationships.Remove(row);
                    context.SaveChanges();
                }
            }
        }


        //http://mycourseuts.azurewebsites.net/Services/api/major/PostChoiceBlockRelationship?choiceblockID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void PostChoiceBlockRelationship(string choiceBlockID, [FromBody]List<ChoiceBlockRelationship> relationships)
        {
            var context = new MyCourseDBEntities();
            List<DataModel.ChoiceBlockRelationships> cbk;
            var query = from c in context.ChoiceBlockRelationships
                        where c.ChoiceBlocks.ID.Equals(choiceBlockID) 
                        select c;
            cbk = query.ToList();
            if (cbk.Count != 0)
            {
                foreach (var row in cbk)
                {
                    context.ChoiceBlockRelationships.Remove(row);
                    context.SaveChanges();
                }
            }
            using (var scope = new TransactionScope())
            {
                foreach (var rel in relationships)
                {
                    ChoiceBlockRelationships newRow = new ChoiceBlockRelationships();
                    newRow.ChoiceBlockID = rel.ChoiceBlock.ID;
                    if (rel.Subject != null)
                    {
                        newRow.SubjectID = rel.Subject.ID;
                    }
                    if (rel.ContentChoiceBlock != null)
                    {
                        newRow.ContentChoiceBlockID = rel.ContentChoiceBlock.ID;
                    }
                    if (rel.ContentSubjectGrouping != null)
                    {
                        newRow.ContentGroupID = rel.ContentSubjectGrouping.ID;
                    }
                    if (rel.ContentStream != null)
                    {
                        newRow.ContentStreamID = rel.ContentStream.ID;
                    }
                    if (rel.ContentSubMajor != null)
                    {
                        newRow.ContentSubMajorID = rel.ContentSubMajor.ID;
                    }

                    context.ChoiceBlockRelationships.Add(newRow);
                    context.SaveChanges();
                }
                scope.Complete();
            }
        }

    }
}
