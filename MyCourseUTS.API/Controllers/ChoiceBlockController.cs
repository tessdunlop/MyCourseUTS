using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MyCourseUTS.DataModel;
using MyCourseUTS.Entity;
using MyCourseUTS.Manager;

namespace MyCourseUTS.API.Controllers
{
    public class ChoiceBlockController : ApiController
    {

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
    }
}
