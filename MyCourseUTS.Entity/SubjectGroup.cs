using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCourseUTS.Entity
{
    public class SubjectGroup
    {
        public int ID { get; set; }
        public int CreditPoints { get; set; }
        public int SubjectPresent { get; set; }
        public int MajorPresent{ get; set; }
        public int ChoiceBlockPresent { get; set; }
        public int StreamPresent { get; set; }
        public int SubMajorPresent { get; set; }
    }
}
