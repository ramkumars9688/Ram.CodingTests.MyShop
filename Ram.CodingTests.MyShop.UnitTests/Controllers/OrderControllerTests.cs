﻿using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using NSubstitute;
using NUnit.Framework;
using Ram.CodingTests.MyShop.Controllers;
using Ram.CodingTests.MyShop.Models;
using Ram.CodingTests.MyShop.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.UnitTests.Controllers
{
    public class OrderControllerTests
    {
        private IOrderService _subOrderService;
        OrderController _orderController;

        [SetUp]
        public void SetUp()
        {
            _subOrderService = Substitute.For<IOrderService>();
            _orderController = new OrderController(_subOrderService);
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

            _subOrderService.CreateOrder(Arg.Any<OrderRequest>()).Returns(Task.FromResult(
            new OrderResponse
            {
                OrderId = 123456
            }));

            var actionResult = await _orderController.CreateOrder(orderRequest);
            var result = actionResult.Result as CreatedAtActionResult;
            result.Should().NotBeNull();

            result.Value.Should().BeEquivalentTo(new OrderResponse
            {
                OrderId = 123456
            });
            await _subOrderService.Received(1).CreateOrder(Arg.Any<OrderRequest>());
        }

        [Test]
        public async Task GetOrder_PositiveAsync()
        {
            _subOrderService.GetOrder(123).Returns(Task.FromResult(
            new OrderResponse
            {
                OrderId = 123456
            }));

            var result = await _orderController.GetOrder(123);

            result.Should().BeEquivalentTo(new OrderResponse
            {
                OrderId = 123456
            });
            await _subOrderService.Received(1).GetOrder(123);
        }
    }
}