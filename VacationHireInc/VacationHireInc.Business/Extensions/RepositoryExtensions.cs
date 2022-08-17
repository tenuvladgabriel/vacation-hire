using System.Linq;using System.Threading.Tasks;using Microsoft.EntityFrameworkCore;using VacationHireInc.Business.Helpers;using VacationHireInc.Data.Abstraction;using VacationHireInc.Data.Entities.Abstraction;using VacationHireInc.Data.Entities.Enums;namespace VacationHireInc.Business.Extensions{    internal static class RepositoryExtensions    {        internal static async Task DeleteEntityAsync<TEntity>(this IRepository repository, string id) where TEntity : class, IIdEntity        {            var affectedRows = await repository.Query<TEntity>()                .Where(e => e.Id == id)                .DeleteFromQueryAsync();            if (affectedRows == 0)            {                throw new ObjectNotFoundException(id, typeof(Data.Entities.Reservation));            }        }        internal static async Task<TEntity> GetEntityAsync<TEntity>(this IRepository repository, string id) where TEntity : class, IIdEntity        {            var entity = await repository.Query<TEntity>()                .Where(e => e.Id == id)                .FirstOrDefaultAsync();            if (entity == null)            {                throw new ObjectNotFoundException(id, typeof(TEntity));            }            return entity;        }        internal static async Task UpdateObjectAvailabilityAsync<TEntity>(this IRepository repository, string reservationId)            where TEntity : class, IRentalEntity, new()        {            await repository.Query<TEntity>()                .Where(e => e.ReservationId == reservationId)                .UpdateFromQueryAsync(e => new TEntity                {                    AvailabilityStatus = AvailabilityStatus.Disposable                });        }    }}