using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCourseUTS.Entity
{
    public class SubMajor
    {
        public string ID { get; set; }
        public decimal Version { get; set; }
        public string Name { get; set; }
        public string Abbreviation { get; set; }
        public bool Active { get; set; }
        public string SubMajorDescription { get; set; }
        public int CreditPoints { get; set; }
        public string VersionDescription { get; set; }

    }
}
