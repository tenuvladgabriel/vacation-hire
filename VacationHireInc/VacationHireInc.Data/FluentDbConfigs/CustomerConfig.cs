using Microsoft.EntityFrameworkCore;using Microsoft.EntityFrameworkCore.Metadata.Builders;using VacationHireInc.Data.Entities;namespace VacationHireInc.Data.FluentDbConfigs{    public class CustomerConfig : IEntityTypeConfiguration<Customer>    {        public void Configure(EntityTypeBuilder<Customer> builder)        {            builder.ToTable("Customers", Constants.DbSchemaName);            builder.HasIndex(e => e.Id);            builder.Property(e => e.Id).HasMaxLength(36).IsRequired();            builder.Property(e => e.Country).IsRequired();            builder.Property(e => e.Email).IsRequired();            builder.Property(e => e.FirstName).IsRequired();            builder.Property(e => e.LastName).IsRequired();            builder.Property(e => e.PhoneNumber).IsRequired();            builder.Property(e => e.InsertDate).IsRequired();        }    }}