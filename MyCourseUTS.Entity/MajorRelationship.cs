﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCourseUTS.Entity
{
    public class MajorRelationship
    {
        public int ID { get; set; }
        public Course Course { get; set; }
        public Subject Subject { get; set; }
        public ChoiceBlock ChoiceBlock { get; set; }
        public Stream Stream { get; set; }
        public Major Major { get; set; }
        public SubjectGroup SubjectGroup { get; set; }
        public SubjectTypes SubjectType { get; set; }
        public int Stage { get; set; }
        public int Year { get; set; }
    }
}