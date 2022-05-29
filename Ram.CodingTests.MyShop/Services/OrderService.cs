using Ram.CodingTests.MyShop.DAL;
using Ram.CodingTests.MyShop.Models;
using Ram.CodingTests.MyShop.Repository;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.Services
{
    public interface IOrderService
    {
        public Task<OrderResponse> CreateOrder(OrderRequest order);
        public Task<OrderResponse> GetOrder(long Id);
    }
    public class OrderService : IOrderService
    {
        private readonly IProductRepository _productRepository;
        private readonly IOrderRepository _orderRepository;
        private readonly IUserRepository _userRepository;

        public OrderService(IProductRepository productRepository, IOrderRepository orderRepository,
            IUserRepository userRepository)
        {
            _productRepository = productRepository;
            _orderRepository = orderRepository;
            _userRepository = userRepository;
        }

        public async Task<OrderResponse> CreateOrder(OrderRequest orderRequest)
        {
            var order = new Order
            {
                CreationDate = DateTime.UtcNow,
                User = await _userRepository.GetUser(orderRequest.User.Email),
                TotalAmount = orderRequest.TotalAmount,
                Currency = orderRequest.Currency,
                Products = new List<ShoppingCartProduct>()
            };

            foreach (var shoppingCartItem in orderRequest.ShoppingCartItems)
            {
                order.Products.Add(
                    new ShoppingCartProduct
                    {
                        Product = await _productRepository.GetProduct(shoppingCartItem.ProductId),
                        Quantity = shoppingCartItem.Quantity
                    });
            }

            var orderResult = await _orderRepository.CreateOrder(order);

            if(orderResult?.Id >= 0)
            {
                return new OrderResponse
                {
                    OrderId = orderResult.Id
                };
            }

            throw new Exception("Unable to place order");

        }

        public async Task<OrderResponse> GetOrder(long id)
        {
            var orderResult = await _orderRepository.GetOrder(id);

            if (orderResult?.Id >= 0)
            {
                return new OrderResponse
                {
                    OrderId = orderResult.Id
                };
            }

            throw new Exception("Unable to retrieve order");

        }
    }
}
