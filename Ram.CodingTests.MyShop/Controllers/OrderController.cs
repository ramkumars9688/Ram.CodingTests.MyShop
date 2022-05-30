using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Ram.CodingTests.MyShop.Models;
using Ram.CodingTests.MyShop.Services;
using System;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpPost]
        public async Task<ActionResult<OrderResponse>> CreateOrder([FromBody] OrderRequest order)
        {
            try
            {
                var createdOrder = await _orderService.CreateOrder(order);
                return CreatedAtAction(nameof(GetOrder), new { id = createdOrder.OrderId }, createdOrder);   
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error processing order.");
            }

        }

        [HttpGet]
        public Task<OrderResponse> GetOrder(long id)
        {
            return _orderService.GetOrder(id);
        }
    }
}
