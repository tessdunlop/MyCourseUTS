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

        public List<Stream> GetStreams(string streamID, string name, string abbreviation)
        {
            List<Streams> streams;
            var context = new MyCourseDBEntities();
            var query = from c in context.Streams
                        where ((c.ID.Contains(streamID) && streamID != "") || (String.IsNullOrEmpty(streamID)))
                        && ((c.Name.Contains(name) && name != "") || (String.IsNullOrEmpty(name)))
                        && ((c.Abbreviation.Contains(abbreviation) && abbreviation != "") || (String.IsNullOrEmpty(abbreviation)))
                        select c;
            streams = query.ToList();
            List<Stream> listOfStreams = new List<Stream>();
            foreach (var c in streams)
            {
                listOfStreams.Add(EntityMappingManager.MapStreamContent(c));
            }
            return listOfStreams;
        }

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
