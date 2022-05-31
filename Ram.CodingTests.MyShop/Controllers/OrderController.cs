using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Ram.CodingTests.MyShop.ActionFilters;
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
        [ServiceFilter(typeof(ValidateCreateOrderActionFilter))]
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
        public async Task<ActionResult<OrderResponse>> GetOrder(long id)
        {
            try
            {
                var order = await _orderService.GetOrder(id);

                if(order == null)
                {
                    return StatusCode(StatusCodes.Status404NotFound, "Order id not found");
                }

                return order;
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error retreiving order.");
            }
        }
    }
}
