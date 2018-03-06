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
        //http://mycourseuts.azurewebsites.net/api/choiceblock/getallchoiceblocks
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<ChoiceBlock> GetAllChoiceBlocks()
        {
            List<ChoiceBlocks> cbk;
            var context = new MyCourseDBEntities();
            var query = from c in context.ChoiceBlocks
                        where c.Active.Equals(1)
                        select c;
            cbk = query.ToList();

            List<ChoiceBlock> listOfCBK = new List<ChoiceBlock>();
            foreach (var c in cbk)
            {
                listOfCBK.Add(EntityMappingManager.MapChoiceBlockContent(c));
            }
            return listOfCBK;
        }

        //http://mycourseuts.azurewebsites.net/api/choiceblock/getchoiceblock?choiceblockid=CBK90009
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

        //http://mycourseuts.azurewebsites.net/api/choiceblock/getchoiceblocks?value=CBK90
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

        //http://mycourseuts.azurewebsites.net/api/choiceblock/getchoiceblockrelationship?choiceblockid=CBK90009
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<ChoiceBlockRelationship> GetChoiceBlockRelationship(string choiceBlockID)
        {
            List<ChoiceBlockRelationships> choiceBlock;
            var context = new MyCourseDBEntities();
            var query = from c in context.ChoiceBlockRelationships.Include("Subjects").Include("ChoiceBlocks").Include("SubjectGroupingsCredit")
                        where c.ChoiceBlocks.ID.Equals(choiceBlockID)
                        select c;
            choiceBlock = query.ToList();

            List<ChoiceBlockRelationship> listofChoiceBlock = new List<ChoiceBlockRelationship>();
            foreach (var c in choiceBlock)
            {
                listofChoiceBlock.Add(EntityMappingManager.MapChoiceBlockRelationshipContent(c));
            }
            return listofChoiceBlock;
        }

        //[EnableCors(origins: "*", headers: "*", methods: "*")]
        //public void PostChoiceBlock(ChoiceBlock choiceBlock)
        //{
        //    using (var scope = new TransactionScope())
        //    {
        //        using (var context = new MyCourseDBEntities())
        //        {
        //            ChoiceBlocks newRow = new ChoiceBlocks();
        //            newRow.ID = choiceBlock.ID;
        //            newRow.Name = choiceBlock.Name;
        //            newRow.CreditPoints = choiceBlock.CreditPoints;
        //            newRow.Abbreviation = choiceBlock.Abbreviation;
        //            newRow.Active = choiceBlock.Active;
        //            newRow.Version = choiceBlock.Version;
        //            context.ChoiceBlocks.Add(newRow);
        //            context.SaveChanges();
        //        }
        //        scope.Complete();
        //    }
        //}

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteChoiceBlock(ChoiceBlock choiceBlock)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.ChoiceBlocks
                        where c.ID.Equals(choiceBlock.ID)
                        select c;
            var deleteChoiceBlock = query.First();
            context.ChoiceBlocks.Remove(deleteChoiceBlock);
            context.SaveChanges();
        }
    }
}
