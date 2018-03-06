using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCourseUTS.Entity
{
    public class RequisiteRelationship
    {
        public int ID { get; set; }
        public Subject Subject { get; set; }
        public Subject Requisite { get; set; }
        public RequisiteTypes RequisiteType { get; set; }
    }
}
