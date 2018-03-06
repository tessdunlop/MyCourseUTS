using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCourseUTS.Entity
{
    public class Major
    {
        public string ID { get; set; }
        public decimal Version { get; set; }
        public string Name { get; set; }
        public string Abbreviation { get; set; }
        public int CreditPoints { get; set; }
        public bool Active { get; set; }
        public bool HasTemplate { get; set; }
        public string MajorDescription { get; set; }
        public string VersionDescription { get; set; }

    }
}
