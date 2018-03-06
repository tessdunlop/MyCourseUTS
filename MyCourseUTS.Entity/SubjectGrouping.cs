using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCourseUTS.Entity
{
    public class SubjectGrouping
    {
        public int ID { get; set; }
        public int CreditPoints { get; set; }
        public bool SubjectPresent { get; set; }
        public bool MajorPresent { get; set; }
        public bool ChoiceBlockPresent { get; set; }
        public bool StreamPresent { get; set; }
        public bool SubMajorPresent { get; set; }
    }
}
