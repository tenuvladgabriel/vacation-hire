using Microsoft.EntityFrameworkCore;using Microsoft.EntityFrameworkCore.Metadata.Builders;using VacationHireInc.Data.Entities;namespace VacationHireInc.Data.FluentDbConfigs{    public class ReservationConfig : IEntityTypeConfiguration<Reservation>    {        public void Configure(EntityTypeBuilder<Reservation> builder)        {            builder.ToTable("Reservations", Constants.DbSchemaName);            builder.HasIndex(e => e.Id);            builder.Property(e => e.Id).HasMaxLength(36).IsRequired();            builder.Property(e => e.Status).IsRequired();            builder.Property(e => e.RentalExpirationDate).IsRequired();            builder.Property(e => e.RentalStartDate);            builder.HasOne(e => e.Customer)                .WithMany(e => e.Reservations)                .HasForeignKey(e => e.CustomerId)                .OnDelete(DeleteBehavior.Restrict);        }    }}