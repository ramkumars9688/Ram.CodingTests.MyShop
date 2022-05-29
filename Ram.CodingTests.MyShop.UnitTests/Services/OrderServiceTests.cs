using FluentAssertions;
using NSubstitute;
using NSubstitute.ReturnsExtensions;
using NUnit.Framework;
using Ram.CodingTests.MyShop.DAL;
using Ram.CodingTests.MyShop.Models;
using Ram.CodingTests.MyShop.Repository;
using Ram.CodingTests.MyShop.Services;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.UnitTests.Services
{
    public class OrderServiceTests
    {
        private IProductRepository _subProductRepository;
        private IOrderRepository _subOrderRepository;
        private IUserRepository _subUserRepository;

        OrderService _orderService;

        [SetUp]
        public void SetUp()
        {
            _subProductRepository = Substitute.For<IProductRepository>();
            _subOrderRepository = Substitute.For<IOrderRepository>();
            _subUserRepository = Substitute.For<IUserRepository>();
            _orderService = new OrderService(_subProductRepository, _subOrderRepository, _subUserRepository);
        }

        [Test]
        public async Task CreateOrder_PositiveAsync()
        {
            var orderRequest = new OrderRequest
            {
                Currency = "AUD",
                TotalAmount = 25,
                User = new UserRequest
                {
                    Email = "test@gmail.com"
                },
                ShoppingCartItems = new List<ShoppingCartItemRequest>
                {
                    new ShoppingCartItemRequest
                    {
                        ProductId = 12,
                        Quantity = 4
                    }
                }
            };

            _subUserRepository.GetUser(Arg.Is<string>(x => x == "test@gmail.com")).Returns(Task.FromResult(new User { Email = "test@gmail.com" }));
            _subProductRepository.GetProduct(Arg.Is<long>(x => x == 12)).Returns(Task.FromResult(new Product { Id = 12, Name = "Apple" }));
            _subOrderRepository.CreateOrder(Arg.Any<Order>()).Returns(Task.FromResult(new Order { Id = 34567 }));
            
            var result = await _orderService.CreateOrder(orderRequest);

            result.Should().BeEquivalentTo(new OrderResponse { OrderId = 34567 });
            await _subUserRepository.Received(1).GetUser(Arg.Is<string>(x => x == "test@gmail.com"));
            await _subProductRepository.Received(1).GetProduct(Arg.Is<long>(x => x == 12));
            await _subOrderRepository.Received(1).CreateOrder(Arg.Any<Order>());
        }

        [Test]
        public void CreateOrder_Negative()
        {
            var orderRequest = new OrderRequest
            {
                Currency = "AUD",
                TotalAmount = 25,
                User = new UserRequest
                {
                    Email = "test@gmail.com"
                },
                ShoppingCartItems = new List<ShoppingCartItemRequest>
                {
                    new ShoppingCartItemRequest
                    {
                        ProductId = 12,
                        Quantity = 4
                    }
                }
            };

            _subUserRepository.GetUser(Arg.Is<string>(x => x == "test@gmail.com")).Returns(Task.FromResult(new User { Email = "test@gmail.com" }));
            _subProductRepository.GetProduct(Arg.Is<long>(x => x == 12)).Returns(Task.FromResult(new Product { Id = 12, Name = "Apple" }));
            _subOrderRepository.CreateOrder(Arg.Any<Order>()).ReturnsNull();

            var exception = Assert.ThrowsAsync<Exception>(async () => await _orderService.CreateOrder(orderRequest));

            exception.Message.Should().BeEquivalentTo("Unable to place order");
            _subUserRepository.Received(1).GetUser(Arg.Is<string>(x => x == "test@gmail.com"));
            _subProductRepository.Received(1).GetProduct(Arg.Is<long>(x => x == 12));
            _subOrderRepository.Received(1).CreateOrder(Arg.Any<Order>());
        }

        [Test]
        public async Task GetOrder_PositiveAsync()
        {
            _subOrderRepository.GetOrder(Arg.Is<long>(x => x==123)).Returns(Task.FromResult(new Order { Id = 123456 }));

            var result = await _orderService.GetOrder(123);

            result.Should().BeEquivalentTo(new OrderResponse { OrderId = 123456 });
            await _subUserRepository.Received(0).GetUser(Arg.Any<string>());
            await _subProductRepository.Received(0).GetProduct(Arg.Any<long>());
            await _subOrderRepository.Received(1).GetOrder(Arg.Is<long>(x => x == 123));
        }

    }
}
