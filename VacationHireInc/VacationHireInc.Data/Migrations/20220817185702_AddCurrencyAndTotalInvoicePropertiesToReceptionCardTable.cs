using Microsoft.EntityFrameworkCore.Migrations;

namespace VacationHireInc.Data.Migrations
{
    public partial class AddCurrencyAndTotalInvoicePropertiesToReceptionCardTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Currency",
                table: "ReceptionCards",
                nullable: true);

            migrationBuilder.AddColumn<decimal>(
                name: "TotalInvoice",
                table: "ReceptionCards",
                nullable: false,
                defaultValue: 0m);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Currency",
                table: "ReceptionCards");

            migrationBuilder.DropColumn(
                name: "TotalInvoice",
                table: "ReceptionCards");
        }
    }
}
