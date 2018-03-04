using System;
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
            if (contentData == null) {
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
                CourseType = contentData.CourseTypes != null ? new CourseTypes() { ID = contentData.CourseTypes.ID, CourseType = contentData.CourseTypes.CourseType, Abbreviation = contentData.CourseTypes.Abbreviation } : null,
                Stages = contentData.Stages,
                Version = contentData.Version,
                Years = contentData.Years
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
                Active = contentData.Active,
                CreditPoints = contentData.CreditPoints,
                Stage = contentData.Stage,
                Version = contentData.Version,
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
                Active = contentData.Active
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
                Active = contentData.Active
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
                Active = contentData.CreditPoints
            };
            return content;
        }

        public static Entity.SubjectGroup MapSubjectGroupingContent(DataModel.SubjectGroupingsCredit contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.SubjectGroup content = new Entity.SubjectGroup
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
                Active = contentData.Active
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
                Abbreviation = contentData.Abbreviation,
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
                SubjectGroup = MapSubjectGroupingContent(contentData.SubjectGroupingsCredit),
                Stage = contentData.Stage,
                Year = contentData.Year
            };
            return content;
        }

        public static Entity.MajorRelationship MapMajorRelationshipContent(DataModel.MajorRelationships contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.MajorRelationship content = new Entity.MajorRelationship
            {
                ID = contentData.ID,
                Course = MapCourseContent(contentData.Courses),
                Subject = MapSubjectContent(contentData.Subjects),
                ChoiceBlock = MapChoiceBlockContent(contentData.ChoiceBlocks),
                Stream = MapStreamContent(contentData.Streams),
                Major = MapMajorContent(contentData.Majors),
                SubjectType = MapSubjectTypeContent(contentData.SubjectTypes),
                SubjectGroup = MapSubjectGroupingContent(contentData.SubjectGroupingsCredit),
                Stage = contentData.Stage,
                Year = contentData.Year
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
                ChoiceBlock = MapChoiceBlockContent(contentData.ChoiceBlocks),
                ContentStream = MapStreamContent(contentData.Streams),
                SubjectGroup = MapSubjectGroupingContent(contentData.SubjectGroupingsCredit)
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
                ChoiceBlock = MapChoiceBlockContent(contentData.ChoiceBlocks),
                Stream = MapStreamContent(contentData.Streams),      
                SubjectGroup = MapSubjectGroupingContent(contentData.SubjectGroupingsCredit)
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
                Subject = MapSubjectContent(contentData.Subjects),
                ChoiceBlock = MapChoiceBlockContent(contentData.ChoiceBlocks),
                ContentChoiceBlock = MapChoiceBlockContent(contentData.ChoiceBlocks),
                SubjectGroup = MapSubjectGroupingContent(contentData.SubjectGroupingsCredit)

            };
            return content;
        }

        public static Entity.SubjectGroupingRelationship MapSubjectGroupingRelationshipContent(DataModel.SubjectGroupings contentData)
        {
            if (contentData == null)
            {
                return null;
            }
            Entity.SubjectGroupingRelationship content = new Entity.SubjectGroupingRelationship
            {
                ID = contentData.ID,
                SubMajor = MapSubMajorContent(contentData.SubMajors),
                Subject = MapSubjectContent(contentData.Subjects),
                ChoiceBlock = MapChoiceBlockContent(contentData.ChoiceBlocks),
                Stream = MapStreamContent(contentData.Streams),
                Major = MapMajorContent(contentData.Majors),
                SubjectGroup = MapSubjectGroupingContent(contentData.SubjectGroupingsCredit)
            };
            return content;
        }


    }
}
