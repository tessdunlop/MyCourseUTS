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
    
    public partial class ChoiceBlockRelationships
    {
        public int ID { get; set; }
        public string ChoiceBlockID { get; set; }
        public Nullable<int> SubjectID { get; set; }
        public string ContentChoiceBlockID { get; set; }
        public Nullable<int> ContentGroupID { get; set; }
    
        public virtual ChoiceBlocks ChoiceBlocks { get; set; }
        public virtual ChoiceBlocks ChoiceBlocks1 { get; set; }
        public virtual SubjectGroupingsCredit SubjectGroupingsCredit { get; set; }
        public virtual Subjects Subjects { get; set; }
    }
}
