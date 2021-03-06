﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MyCourseUTS.Entity;

namespace MyCourseUTS.Manager
{
    public class EntityMappingManager
    {
        public static Entity.Course MapCourseContent(DataModel.Courses contentData)
        {
            if (contentData == null)
            {
                return null;
            }

            Entity.Course content = new Entity.Course
            {
                ID = contentData.ID,
                Name = contentData.Name,
                Abbreviation = contentData.Abbreviation,
                Active = contentData.Active,
                VersionDescription = contentData.VersionDescription,
                CreditPoints = contentData.CreditPoints,
                CourseType = MapCourseTypeContent(contentData.CourseTypes),//contentData.CourseTypes != null ? new CourseTypes() { ID = contentData.CourseTypes.ID, CourseType = contentData.CourseTypes.CourseType, Abbreviation = contentData.CourseTypes.Abbreviation } : null,
                Stages = contentData.Stages,
                Version = contentData.Version,
                Years = contentData.Years,
                CourseDescription = contentData.CourseDescription
            };
            return content;
        }

        public static Entity.CourseTypes MapCourseTypeContent(DataModel.CourseTypes contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.CourseTypes content = new Entity.CourseTypes
            {
                ID = contentData.ID,
                CourseType = contentData.CourseType,
                Abbreviation = contentData.Abbreviation
            };
            return content;
        }

        public static Entity.Major MapMajorContent(DataModel.Majors contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.Major content = new Entity.Major
            {
                ID = contentData.ID,
                Name = contentData.Name,
                Abbreviation = contentData.Abbreviation,
                MajorDescription = contentData.MajorDescription,
                VersionDescription = contentData.VersionDescription,
                Active = contentData.Active,
                CreditPoints = contentData.CreditPoints,
                Version = contentData.Version,
                Stages = contentData.Stages
            };
            return content;
        }

        public static Entity.Stream MapStreamContent(DataModel.Streams contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.Stream content = new Entity.Stream
            {
                ID = contentData.ID,
                Version = contentData.Version,
                Name = contentData.Name,
                Abbreviation = contentData.Abbreviation,
                CreditPoints = contentData.CreditPoints,
                Active = contentData.Active,
                StreamDescription = contentData.StreamDescription,
                VersionDescription = contentData.VersionDescription
            };
            return content;
        }

        public static Entity.SubMajor MapSubMajorContent(DataModel.SubMajors contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.SubMajor content = new Entity.SubMajor
            {
                ID = contentData.ID,
                Version = contentData.Version,
                Name = contentData.Name,
                Abbreviation = contentData.Abbreviation,
                CreditPoints = contentData.CreditPoints,
                Active = contentData.Active,
                SubMajorDescription = contentData.SubMajorDescription,
                VersionDescription = contentData.VersionDescription
            };
            return content;
        }

        public static Entity.ChoiceBlock MapChoiceBlockContent(DataModel.ChoiceBlocks contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.ChoiceBlock content = new Entity.ChoiceBlock
            {
                ID = contentData.ID,
                Version = contentData.Version,
                Name = contentData.Name,
                Abbreviation = contentData.Abbreviation,
                CreditPoints = contentData.CreditPoints,
                Active = contentData.Active,
                ChoiceBlockDescription = contentData.ChoiceBlockDescription,
                VersionDescription = contentData.VersionDescription
            };
            return content;
        }

        public static Entity.SubjectGrouping MapSubjectGroupingContent(DataModel.SubjectGroupings contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.SubjectGrouping content = new Entity.SubjectGrouping
            {
                ID = contentData.ID,
                CreditPoints = contentData.CreditPoints,
                SubjectPresent = contentData.SubjectPresent,
                ChoiceBlockPresent = contentData.ChoiceBlockPresent,
                StreamPresent = contentData.StreamPresent,
                SubMajorPresent = contentData.SubMajorPresent,
                MajorPresent = contentData.MajorPresent
            };
            return content;
        }

        public static Entity.Subject MapSubjectContent(DataModel.Subjects contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.Subject content = new Entity.Subject
            {
                ID = contentData.ID,
                Version = contentData.Version,
                Name = contentData.Name,
                Abbreviation = contentData.Abbreviation,
                CreditPoints = contentData.CreditPoints,
                Active = contentData.Active,
                SubjectDescription = contentData.SubjectDescription,
                VersionDescription = contentData.VersionDescription
            };
            return content;
        }

        public static Entity.SubjectTypes MapSubjectTypeContent(DataModel.SubjectTypes contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.SubjectTypes content = new Entity.SubjectTypes
            {
                ID = contentData.ID,
                SubjectType = contentData.SubjectType,
                Abbreviation = contentData.Abbreviation
            };
            return content;
        }

        public static Entity.CourseRelationship MapCourseRelationshipContent(DataModel.CourseRelationships contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.CourseRelationship content = new Entity.CourseRelationship
            {
                ID = contentData.ID,
                Course = MapCourseContent(contentData.Courses),
                Subject = MapSubjectContent(contentData.Subjects),
                ChoiceBlock = MapChoiceBlockContent(contentData.ChoiceBlocks),
                SubjectType = MapSubjectTypeContent(contentData.SubjectTypes),
                SubjectGrouping = MapSubjectGroupingContent(contentData.SubjectGroupings),
                Stream = MapStreamContent(contentData.Streams),
                SubMajor = MapSubMajorContent(contentData.SubMajors),
                Stage = contentData.Stage,
                Year = contentData.Year,
                Major = MapMajorContent(contentData.Majors),
                HasTemplate = contentData.HasTemplate,
                DateUpdated = String.Format("{0:dd/MM/yyyy HH:mm:ss}", contentData.DateUpdated) 
            };
            return content;
        }


        public static Entity.StreamRelationship MapStreamRelationshipContent(DataModel.StreamRelationships contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.StreamRelationship content = new Entity.StreamRelationship
            {
                ID = contentData.ID,
                Stream = MapStreamContent(contentData.Streams),
                Subject = MapSubjectContent(contentData.Subjects),
                ContentChoiceBlock = MapChoiceBlockContent(contentData.ChoiceBlocks),
                ContentStream = MapStreamContent(contentData.Streams1),
                ContentSubMajor = MapSubMajorContent(contentData.SubMajors),
                ContentSubjectGrouping = MapSubjectGroupingContent(contentData.SubjectGroupings)
            };
            return content;
        }

        public static Entity.SubMajorRelationship MapSubMajorRelationshipContent(DataModel.SubMajorRelationships contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.SubMajorRelationship content = new Entity.SubMajorRelationship
            {
                ID = contentData.ID,
                SubMajor = MapSubMajorContent(contentData.SubMajors),
                Subject = MapSubjectContent(contentData.Subjects),
                ContentChoiceBlock = MapChoiceBlockContent(contentData.ChoiceBlocks),
                ContentStream = MapStreamContent(contentData.Streams),
                ContentSubMajor = MapSubMajorContent(contentData.SubMajors1),
                ContentSubjectGrouping = MapSubjectGroupingContent(contentData.SubjectGroupings)
            };
            return content;
        }

        public static Entity.ChoiceBlockRelationship MapChoiceBlockRelationshipContent(DataModel.ChoiceBlockRelationships contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.ChoiceBlockRelationship content = new Entity.ChoiceBlockRelationship
            {
                ID = contentData.ID,
                ChoiceBlock = MapChoiceBlockContent(contentData.ChoiceBlocks1),
                Subject = MapSubjectContent(contentData.Subjects),
                ContentChoiceBlock = MapChoiceBlockContent(contentData.ChoiceBlocks),
                ContentStream = MapStreamContent(contentData.Streams),
                ContentSubMajor = MapSubMajorContent(contentData.SubMajors),
                ContentSubjectGrouping = MapSubjectGroupingContent(contentData.SubjectGroupings)

            };
            return content;
        }

        public static Entity.SubjectGroupingRelationship MapSubjectGroupingRelationshipContent(DataModel.SubjectGroupingRelationships contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.SubjectGroupingRelationship content = new Entity.SubjectGroupingRelationship
            {
                ID = contentData.ID,
                ContentSubMajor = MapSubMajorContent(contentData.SubMajors),
                Subject = MapSubjectContent(contentData.Subjects),
                ContentChoiceBlock = MapChoiceBlockContent(contentData.ChoiceBlocks),
                ContentStream = MapStreamContent(contentData.Streams),
                ContentMajor = MapMajorContent(contentData.Majors),
                ContentSubjectGrouping = MapSubjectGroupingContent(contentData.SubjectGroupings)
            };
            return content;
        }


        public static Entity.RequisiteTypes MapRequisiteTypeContent(DataModel.RequisiteTypes contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.RequisiteTypes content = new Entity.RequisiteTypes
            {
                ID = contentData.ID,
                Abbreviation = contentData.Abbreviation,
                RequisiteType = contentData.RequisiteType

            };
            return content;
        }

        public static Entity.RequisiteRelationship MapRequisiteRelationshipContent(DataModel.RequisiteRelationship contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.RequisiteRelationship content = new Entity.RequisiteRelationship
            {
                ID = contentData.ID,
                Subject = MapSubjectContent(contentData.Subjects),//contentData.Subjects != null ? new Subject() { ID = contentData.Subjects.ID, Version = contentData.Subjects.Version, Name = contentData.Subjects.Name, Abbreviation = contentData.Subjects.Abbreviation, CreditPoints = contentData.Subjects.CreditPoints, Active = contentData.Subjects.Active, SubjectDescription = contentData.Subjects.SubjectDescription, VersionDescription = contentData.Subjects.VersionDescription,} : null,
                Requisite = MapSubjectContent(contentData.Subjects1),
                RequisiteType = MapRequisiteTypeContent(contentData.RequisiteTypes)
            };
            return content;
        }

        public static Entity.ListItem MapListItemSubjectContent(DataModel.Subjects contentData) {
            if (contentData == null)
            {
                return null;
            }
            Entity.ListItem content = new Entity.ListItem
            {
                ID = contentData.ID.ToString(),
                Name = contentData.Name,
                Abbreviation = contentData.Abbreviation
            };
            return content;
        }

        public static Entity.ListItem MapListItemChoiceBlockContent(DataModel.ChoiceBlocks contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.ListItem content = new Entity.ListItem
            {
                ID = contentData.ID,
                Name = contentData.Name,
                Abbreviation = contentData.Abbreviation
            };
            return content;
        }

        public static Entity.ListItem MapListItemStreamContent(DataModel.Streams contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.ListItem content = new Entity.ListItem
            {
                ID = contentData.ID,
                Name = contentData.Name,
                Abbreviation = contentData.Abbreviation
            };
            return content;
        }

        public static Entity.ListItem MapListItemSubMajorContent(DataModel.SubMajors contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.ListItem content = new Entity.ListItem
            {
                ID = contentData.ID,
                Name = contentData.Name,
                Abbreviation = contentData.Abbreviation
            };
            return content;
        }


    }
}
