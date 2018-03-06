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
    
    public partial class SubjectGroupings
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public SubjectGroupings()
        {
            this.ChoiceBlockRelationships = new HashSet<ChoiceBlockRelationships>();
            this.CourseRelationships = new HashSet<CourseRelationships>();
            this.MajorRelationships = new HashSet<MajorRelationships>();
            this.StreamRelationships = new HashSet<StreamRelationships>();
            this.SubjectGroupingRelationships = new HashSet<SubjectGroupingRelationships>();
            this.SubMajorRelationships = new HashSet<SubMajorRelationships>();
        }
    
        public int ID { get; set; }
        public int CreditPoints { get; set; }
        public bool SubjectPresent { get; set; }
        public bool MajorPresent { get; set; }
        public bool ChoiceBlockPresent { get; set; }
        public bool StreamPresent { get; set; }
        public bool SubMajorPresent { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ChoiceBlockRelationships> ChoiceBlockRelationships { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CourseRelationships> CourseRelationships { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MajorRelationships> MajorRelationships { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<StreamRelationships> StreamRelationships { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SubjectGroupingRelationships> SubjectGroupingRelationships { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<SubMajorRelationships> SubMajorRelationships { get; set; }
    }
}
