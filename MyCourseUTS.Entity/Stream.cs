﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCourseUTS.Entity
{
    public class Stream
    {
        public string ID { get; set; }
        public decimal Version { get; set; }
        public string Name { get; set; }
        public string Abbreviation { get; set; }
        public int CreditPoints { get; set; }
        public bool Active { get; set; }
        public string StreamDescription { get; set; }
        public string VersionDescription { get; set; }
}
}
