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
    public class StreamController : ApiController
    {
        public List<Stream> GetAllStreams()
        {
            List<Streams> streams;
            var context = new MyCourseDBEntities();
            var query = from c in context.Streams
                        where c.Active.Equals(1)
                        select c;
            streams = query.ToList();

            List<Stream> listOfStreams = new List<Stream>();
            foreach (var c in streams)
            {
                listOfStreams.Add(EntityMappingManager.MapStreamContent(c));
            }
            return listOfStreams;
        }
    }
}
