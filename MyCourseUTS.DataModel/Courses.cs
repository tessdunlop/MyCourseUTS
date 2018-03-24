//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace MyCourseUTS.DataModel
{
    using System;
    using System.Collections.Generic;
    
    public partial class Courses
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Courses()
        {
            this.CourseMajorRelationships = new HashSet<CourseMajorRelationships>();
            this.CourseRelationships = new HashSet<CourseRelationships>();
        }
    
        public string ID { get; set; }
        public decimal Version { get; set; }
        public string Name { get; set; }
        public bool Active { get; set; }
        public string VersionDescription { get; set; }
        public int CreditPoints { get; set; }
        public string Abbreviation { get; set; }
        public int Years { get; set; }
        public int Stages { get; set; }
        public int CourseTypeID { get; set; }
        public string CourseDescription { get; set; }
        public bool HasTemplate { get; set; }
        public bool HasMajor { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CourseMajorRelationships> CourseMajorRelationships { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CourseRelationships> CourseRelationships { get; set; }
        public virtual CourseTypes CourseTypes { get; set; }
    }
}
