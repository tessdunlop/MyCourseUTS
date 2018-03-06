using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCourseUTS.Entity
{
    public class SubjectGroupingRelationship
    {
        public int ID { get; set; }
        public SubMajor SubMajor { get; set; }
        public Subject Subject { get; set; }
        public ChoiceBlock ChoiceBlock { get; set; }
        public Stream Stream { get; set; }
        public Major Major { get; set; }
        public SubjectGrouping SubjectGrouping { get; set; }
    }
}
