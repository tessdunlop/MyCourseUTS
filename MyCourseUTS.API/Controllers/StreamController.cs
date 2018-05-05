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
        //http://mycourseuts.azurewebsites.net/services/api/stream/getallstreams
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<Stream> GetAllStreams()
        {
            List<Streams> streams;
            var context = new MyCourseDBEntities();
            var query = from c in context.Streams
                        where c.Active.Equals(true)
                        select c;
            streams = query.ToList();

            List<Stream> listOfStreams = new List<Stream>();
            foreach (var c in streams)
            {
                listOfStreams.Add(EntityMappingManager.MapStreamContent(c));
            }
            return listOfStreams;
        }

        //http://mycourseuts.azurewebsites.net/services/api/stream/getstream?streamID=STM90068
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

        //http://mycourseuts.azurewebsites.net/services/api/stream/getstreams?value=STM903
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

        //http://mycourseuts.azurewebsites.net/services/api/stream/getstreamrelationship?streamID=STM90068
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<StreamRelationship> GetStreamRelationship(string streamID)
        {
            List<StreamRelationships> stream;
            var context = new MyCourseDBEntities();
            var query = from c in context.StreamRelationships.Include("Subjects").Include("SubMajors").Include("Streams").Include("ChoiceBlocks").Include("SubjectGroupings")
                        where c.StreamID.Equals(streamID)
                        select c;
            stream = query.ToList();

            List<StreamRelationship> listofStream = new List<StreamRelationship>();
            foreach (var c in stream)
            {
                listofStream.Add(EntityMappingManager.MapStreamRelationshipContent(c));
            }
            return listofStream;
        }

        //http://mycourseuts.azurewebsites.net/services/api/stream/getstreamrelationship?streamID=STM90068
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public List<StreamRelationships> GetDataModelStreamRelationship(string streamID)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.StreamRelationships.Include("Subjects").Include("SubMajors").Include("Streams").Include("ChoiceBlocks").Include("SubjectGroupings")
                        where c.StreamID.Equals(streamID)
                        select c;
            return query.ToList();
        }























        //http://mycourseuts.azurewebsites.net/Services/api/stream/poststream
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void PostStream([FromBody]Stream stream)
        {
            var context = new MyCourseDBEntities();
            var query = from c in context.Streams
                        where c.ID.Equals(stream.ID)
                        select c;
            var existingSTM = query.FirstOrDefault();
            if (query.Any())
            {
                existingSTM.ID = stream.ID;
                existingSTM.Name = stream.Name;
                existingSTM.Abbreviation = stream.Abbreviation;
                existingSTM.Active = stream.Active;
                existingSTM.Version = stream.Version;
                existingSTM.VersionDescription = stream.VersionDescription;
                existingSTM.CreditPoints = stream.CreditPoints;
                existingSTM.StreamDescription = stream.StreamDescription;
                context.SaveChanges();
            }
            else
            {
                Streams newRow = new Streams();
                newRow.ID = stream.ID;
                newRow.Name = stream.Name;
                newRow.Abbreviation = stream.Abbreviation;
                newRow.Active = stream.Active;
                newRow.Version = stream.Version;
                newRow.VersionDescription = stream.VersionDescription;
                newRow.CreditPoints = stream.CreditPoints;
                newRow.StreamDescription = stream.StreamDescription;
                context.Streams.Add(newRow);
                context.SaveChanges();
            }
        }




        //http://mycourseuts.azurewebsites.net/Services/api/stream/deletestream?streamID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteStream(string streamID)
        {
            DeleteChoiceBlockRelationship(streamID);
            //DeleteMajorRelationship(streamID);
            DeleteStreamRelationship(streamID);
            DeleteSubMajorRelationship(streamID);
            DeleteCourseRelationship(streamID);
            DeleteSubjectGroupingRelationship(streamID);
            var context = new MyCourseDBEntities();
            var query = from c in context.Streams
                        where c.ID.Equals(streamID)
                        select c;
            var deleteSTM = query.FirstOrDefault();
            context.Streams.Remove(deleteSTM);
            context.SaveChanges();
        }



        ////http://mycourseuts.azurewebsites.net/Services/api/stream/DeleteMajorRelationship?streamID=xxx
        //[EnableCors(origins: "*", headers: "*", methods: "*")]
        //public void DeleteMajorRelationship(string streamID)
        //{
        //    List<DataModel.MajorRelationships> major;
        //    var context = new MyCourseDBEntities();
        //    var query = from c in context.MajorRelationships
        //                where c.Streams.ID.Equals(streamID)
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

        //http://mycourseuts.azurewebsites.net/Services/api/stream/deletechoiceblockIDrelationship?streamID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteChoiceBlockRelationship(string streamID)
        {
            List<DataModel.ChoiceBlockRelationships> cbk;
            var context = new MyCourseDBEntities();
            var query = from c in context.ChoiceBlockRelationships
                        where c.Streams.ID.Equals(streamID)
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

        //http://mycourseuts.azurewebsites.net/Services/api/stream/DeleteSubjectGroupingRelationship?streamID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteSubjectGroupingRelationship(string streamID)
        {
            List<DataModel.SubjectGroupingRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubjectGroupingRelationships
                        where c.Streams.ID.Equals(streamID)
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

        //http://mycourseuts.azurewebsites.net/Services/api/stream/DeleteStreamRelationshipRelationship?streamID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteStreamRelationship(string streamID)
        {
            List<DataModel.StreamRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.StreamRelationships
                        where c.Streams.ID.Equals(streamID) || c.Streams1.ID.Equals(streamID)
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
        //http://mycourseuts.azurewebsites.net/Services/api/stream/DeleteSubMajorRelationship?streamID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteSubMajorRelationship(string streamID)
        {
            List<DataModel.SubMajorRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.SubMajorRelationships
                        where c.Streams.ID.Equals(streamID)
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
        //http://mycourseuts.azurewebsites.net/Services/api/stream/DeleteCourseRelationship?streamID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void DeleteCourseRelationship(string streamID)
        {
            List<DataModel.CourseRelationships> group;
            var context = new MyCourseDBEntities();
            var query = from c in context.CourseRelationships
                        where c.Streams.ID.Equals(streamID)
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


        //http://mycourseuts.azurewebsites.net/Services/api/stream/PostStreamRelationship?streamID=xxx
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public void PostStreamRelationship(string streamID, [FromBody]List<StreamRelationship> relationships)
        {
            var context = new MyCourseDBEntities();
            List<DataModel.StreamRelationships> group;
            var query = from c in context.StreamRelationships
                        where c.StreamID.Equals(streamID) 
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
            using (var scope = new TransactionScope())
            {
                foreach (var rel in relationships)
                {
                    StreamRelationships newRow = new StreamRelationships();
                    newRow.StreamID = rel.Stream.ID;
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

                    context.StreamRelationships.Add(newRow);
                    context.SaveChanges();
                }
                scope.Complete();
            }
        }
    }
}
