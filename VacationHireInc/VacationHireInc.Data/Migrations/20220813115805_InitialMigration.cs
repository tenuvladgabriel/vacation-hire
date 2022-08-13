using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace VacationHireInc.Data.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<int>(nullable: false),
                    Country = table.Column<string>(nullable: true),
                    InsertDate = table.Column<DateTime>(nullable: false),
                    UpdateDate = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ReceptionCards",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    ObjectCondition = table.Column<int>(nullable: false),
                    ObjectType = table.Column<int>(nullable: false),
                    OccuredAt = table.Column<DateTime>(nullable: false),
                    FuelLevel = table.Column<decimal>(nullable: false),
                    ReservationId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ReceptionCards", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Reservations",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    RentalStartDate = table.Column<DateTime>(nullable: false),
                    RentalExpirationDate = table.Column<DateTime>(nullable: false),
                    Status = table.Column<int>(nullable: false),
                    CustomerId = table.Column<Guid>(nullable: false),
                    ReceptionCardId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reservations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Reservations_Customers_CustomerId",
                        column: x => x.CustomerId,
                        principalTable: "Customers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Reservations_ReceptionCards_ReceptionCardId",
                        column: x => x.ReceptionCardId,
                        principalTable: "ReceptionCards",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Vehicles",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Name = table.Column<string>(nullable: true),
                    CreateDate = table.Column<DateTime>(nullable: false),
                    Color = table.Column<string>(nullable: true),
                    NumberOfMiles = table.Column<decimal>(nullable: false),
                    Price = table.Column<decimal>(nullable: false),
                    AvailabilityStatus = table.Column<int>(nullable: false),
                    BodyType = table.Column<int>(nullable: false),
                    BrandType = table.Column<int>(nullable: false),
                    FuelType = table.Column<int>(nullable: false),
                    ReservationId = table.Column<Guid>(nullable: false),
                    ReservationId1 = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vehicles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Vehicles_Reservations_ReservationId1",
                        column: x => x.ReservationId1,
                        principalTable: "Reservations",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_CustomerId",
                table: "Reservations",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_ReceptionCardId",
                table: "Reservations",
                column: "ReceptionCardId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_ReservationId1",
                table: "Vehicles",
                column: "ReservationId1");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Vehicles");

            migrationBuilder.DropTable(
                name: "Reservations");

            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropTable(
                name: "ReceptionCards");
        }
    }
}
