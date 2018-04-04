using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MyCourseUTS.Entity;
using MyCourseUTS.DataModel;
using System.Data.Entity.SqlServer;
using MyCourseUTS.Manager;
using System.Web.Http.Cors;

namespace MyCourseUTS.API.Controllers
{
    public class ListItemController : ApiController
    {
        //http://mycourseuts.azurewebsites.net/Services/api/listitem/getList?value=1
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<ListItem> GetList(string value)
        {
            var context = new MyCourseDBEntities();
            List<Subjects> subjects;
            var subjectQuery = from c in context.Subjects
                               where ((SqlFunctions.StringConvert((double)c.ID).Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                               || ((c.Name.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                               || ((c.Abbreviation.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                               select c;
            subjects = subjectQuery.ToList();
            List<ChoiceBlocks> choiceBlocks;
            var choiceBlockQuery = from c in context.ChoiceBlocks
                                   where ((c.ID.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                                   || ((c.Name.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                                   || ((c.Abbreviation.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                                   select c;
            choiceBlocks = choiceBlockQuery.ToList();
            List<Streams> streams;
            var streamQuery = from c in context.Streams
                              where ((c.ID.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                              || ((c.Name.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                              || ((c.Abbreviation.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                              select c;
            streams = streamQuery.ToList();
            List<SubMajors> subMajors;
            var subMajorQuery = from c in context.SubMajors
                                where ((c.ID.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                                || ((c.Name.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                                || ((c.Abbreviation.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                                select c;
            subMajors = subMajorQuery.ToList();

            List<ListItem> listOfItems = new List<ListItem>();
            foreach (var c in subjects)
            {
                listOfItems.Add(EntityMappingManager.MapListItemSubjectContent(c));
            }
            foreach (var c in choiceBlocks)
            {
                listOfItems.Add(EntityMappingManager.MapListItemChoiceBlockContent(c));
            }
            foreach (var c in streams)
            {
                listOfItems.Add(EntityMappingManager.MapListItemStreamContent(c));
            }
            foreach (var c in subMajors)
            {
                listOfItems.Add(EntityMappingManager.MapListItemSubMajorContent(c));
            }
            return listOfItems;
        }

    }
}














