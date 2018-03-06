using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCourseUTS.Entity
{
    public class StreamRelationship
    {
        public int ID { get; set; }
        public Stream Stream { get; set; }
        public Subject Subject { get; set; }
        public ChoiceBlock ContentChoiceBlock { get; set; }
        public Stream ContentStream { get; set; }
        public SubMajor ContentSubMajor { get; set; }
        public SubjectGrouping ContentSubjectGrouping { get; set; }
    }
}
