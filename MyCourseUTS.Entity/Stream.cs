using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCourseUTS.Entity
{
    public class Stream
    {
        public string ID { get; set; }
        public int Version { get; set; }
        public string Name { get; set; }
        public string Abbreviation { get; set; }
        public int CreditPoints { get; set; }
        public int Active { get; set; }
    }
}
