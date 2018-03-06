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
        public decimal Version { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }
        public string VersionDescription { get; set; }
        public int CreditPoints { get; set; }
        public string Abbreviation { get; set; }
        public double Years { get; set; }
        public int Stages { get; set; }
        public CourseTypes CourseType { get; set; }
        public string CourseDescription { get; set; }
        public bool HasTemplate { get; set; }
        public bool HasMajor { get; set; }
    }
}
