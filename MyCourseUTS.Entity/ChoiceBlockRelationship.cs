using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCourseUTS.Entity
{
    public class ChoiceBlockRelationship
    {
        public int ID { get; set; }
        public Subject Subject { get; set; }
        public ChoiceBlock ChoiceBlock { get; set; }
        public ChoiceBlock ContentChoiceBlock { get; set; }
        public SubjectGroup SubjectGroup { get; set; }
    }
}
