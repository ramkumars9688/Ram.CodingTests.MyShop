using Ram.CodingTests.MyShop.DAL;
using System;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.Repository
{
    public interface IOrderRepository
    {
        public Task<Order> CreateOrder(Order order);

        public Task<Order> GetOrder(long id);
    }

    /// <summary>
    /// Todo: Integration with Database
    /// </summary>
    public class OrderRepository : IOrderRepository
    {
        public Task<Order> CreateOrder(Order order)
        {
            var random = new Random();

            return Task.FromResult(new Order { Id = random.Next(), CreationDate = DateTime.UtcNow });
        }

        public Task<Order> GetOrder(long id)
        {
            return Task.FromResult(new Order { Id = id, CreationDate = DateTime.UtcNow });
        }
    }
}
