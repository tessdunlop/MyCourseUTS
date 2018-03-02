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
        public ChoiceBlock ChoiceBlock { get; set; }
        public Stream ContentStream { get; set; }
        public SubjectGroup SubjectGroup { get; set; }
    }
}
