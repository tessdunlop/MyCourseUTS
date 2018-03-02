using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCourseUTS.Entity
{
    public class Course
    {
        public string ID { get; set; }
        public int Version { get; set; }
        public string Name { get; set; }
        public int Active { get; set; }
        public string CategoryTypeDescription { get; set; }
        public int CreditPoints { get; set; }
        public string Abbreviation { get; set; }
        public double Years { get; set; }
        public int Stages { get; set; }
        public CourseTypes CourseType { get; set; }
    }
}
