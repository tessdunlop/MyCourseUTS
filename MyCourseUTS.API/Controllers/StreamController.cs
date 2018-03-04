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
    public class StreamController : ApiController
    {
        //http://mycourseuts.azurewebsites.net/api/stream/getallstreams
        [EnableCors(origins: "*", headers: "*", methods: "*")]
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

        //http://mycourseuts.azurewebsites.net/api/stream/getstream?streamID=STM90068
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public Stream GetStream(string streamID)
        {
            Stream stream;
            var context = new MyCourseDBEntities();
            var query = from c in context.Streams
                        where c.ID.Equals(streamID)
                        select c;
            stream = EntityMappingManager.MapStreamContent(query.FirstOrDefault());
            return stream;
        }

        //http://mycourseuts.azurewebsites.net/api/stream/getstreams?value=STM903
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<Stream> GetStreams(string value)
        {
            List<Streams> streams;
            var context = new MyCourseDBEntities();
            var query = from c in context.Streams
                        where ((c.ID.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        || ((c.Name.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        || ((c.Abbreviation.Contains(value) && value != "") || (String.IsNullOrEmpty(value)))
                        select c;
            streams = query.ToList();
            List<Stream> listOfStreams = new List<Stream>();
            foreach (var c in streams)
            {
                listOfStreams.Add(EntityMappingManager.MapStreamContent(c));
            }
            return listOfStreams;
        }

        //http://mycourseuts.azurewebsites.net/api/stream/getstreamrelationship?streamID=STM90068
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<StreamRelationship> GetStreamRelationship(string streamID)
        {
            List<StreamRelationships> stream;
            var context = new MyCourseDBEntities();
            var query = from c in context.StreamRelationships.Include("Subjects").Include("ChoiceBlocks").Include("SubjectGroupingsCredit").Include("Streams")
                        where c.Streams.ID.Equals(streamID)
                        select c;
            stream = query.ToList();

            List<StreamRelationship> listofStream = new List<StreamRelationship>();
            foreach (var c in stream)
            {
                listofStream.Add(EntityMappingManager.MapStreamRelationshipContent(c));
            }
            return listofStream;
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void PostStream(Stream stream)
        {
            using (var scope = new TransactionScope())
            {
                using (var context = new MyCourseDBEntities())
                {
                    Streams newRow = new Streams();
                    newRow.ID = stream.ID;
                    newRow.Name = stream.Name;
                    newRow.Abbreviation = stream.Abbreviation;
                    newRow.Active = stream.Active;
                    newRow.Version = stream.Version;
                    newRow.CreditPoints = stream.CreditPoints;
                    context.Streams.Add(newRow);
                    context.SaveChanges();
                }
                scope.Complete();
            }
        }

        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteStream(Stream stream)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.Streams
                        where c.ID.Equals(stream.ID)
                        select c;
            var deleteStream = query.First();
            context.Streams.Remove(deleteStream);
            context.SaveChanges();
        }
    }
}
