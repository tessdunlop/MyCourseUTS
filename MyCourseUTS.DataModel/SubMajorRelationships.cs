
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
    
public partial class SubMajorRelationships
{

    public int ID { get; set; }

    public string SubMajorID { get; set; }

    public Nullable<int> SubjectID { get; set; }

    public string ContentChoiceBlockID { get; set; }

    public string ContentStreamID { get; set; }

    public Nullable<int> ContentGroupID { get; set; }

    public string ContentSubMajorID { get; set; }



    public virtual ChoiceBlocks ChoiceBlocks { get; set; }

    public virtual Streams Streams { get; set; }

    public virtual SubjectGroupings SubjectGroupings { get; set; }

    public virtual Subjects Subjects { get; set; }

    public virtual SubMajors SubMajors { get; set; }

    public virtual SubMajors SubMajors1 { get; set; }

}

}
