using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCourseUTS.Entity
{
    public class CourseMajorRelationship
    {
        public int ID { get; set; }
        public Course Course { get; set; }
        public Major Major { get; set; }
}
}
