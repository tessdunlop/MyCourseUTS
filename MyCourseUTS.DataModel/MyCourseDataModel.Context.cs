﻿//------------------------------------------------------------------------------
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
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class MyCourseDBEntities : DbContext
    {
        public MyCourseDBEntities()
            : base("name=MyCourseDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<ChoiceBlockRelationships> ChoiceBlockRelationships { get; set; }
        public virtual DbSet<ChoiceBlocks> ChoiceBlocks { get; set; }
        public virtual DbSet<CourseRelationships> CourseRelationships { get; set; }
        public virtual DbSet<Courses> Courses { get; set; }
        public virtual DbSet<CourseTypes> CourseTypes { get; set; }
        public virtual DbSet<MajorRelationships> MajorRelationships { get; set; }
        public virtual DbSet<Majors> Majors { get; set; }
        public virtual DbSet<StreamRelationships> StreamRelationships { get; set; }
        public virtual DbSet<Streams> Streams { get; set; }
        public virtual DbSet<SubjectGroupings> SubjectGroupings { get; set; }
        public virtual DbSet<SubjectGroupingsCredit> SubjectGroupingsCredit { get; set; }
        public virtual DbSet<Subjects> Subjects { get; set; }
        public virtual DbSet<SubjectTypes> SubjectTypes { get; set; }
        public virtual DbSet<SubMajorRelationships> SubMajorRelationships { get; set; }
        public virtual DbSet<SubMajors> SubMajors { get; set; }
    }
}
