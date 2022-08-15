using System;using System.Linq;using System.Threading.Tasks;using Microsoft.EntityFrameworkCore.Storage;using VacationHireInc.Data.Abstraction;namespace VacationHireInc.Data{    public sealed class Repository : IRepository    {        private readonly VacationHireContext _context;        public Repository(VacationHireContext context)        {            _context = context;        }        public IQueryable<TEntity> Query<TEntity>() where TEntity : class        {            return _context.Set<TEntity>();        }        public async Task InsertAsync<TEntity>(TEntity entity) where TEntity : class        {            await _context.Set<TEntity>().AddAsync(entity);        }        public async Task SaveAsync()        {            await _context.SaveChangesAsync();        }                public async Task ExecuteTransactionalAsync(Func<IDbContextTransaction, Task> action)        {            await using var transaction = await _context.Database.BeginTransactionAsync();            try            {                if (action != null)                {                    await action(transaction);                }                await transaction.CommitAsync();            }            catch (Exception)            {                await transaction.RollbackAsync();                throw;            }        }    }}