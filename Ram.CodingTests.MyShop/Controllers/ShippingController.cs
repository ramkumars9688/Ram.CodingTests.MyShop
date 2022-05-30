using Microsoft.AspNetCore.Mvc;
using Ram.CodingTests.MyShop.Services;

namespace Ram.CodingTests.MyShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShippingController : ControllerBase
    {
        private readonly IShippingService _shippingService;
        public ShippingController(IShippingService shippingService)
        {
            _shippingService = shippingService;
        }

        [HttpGet("cost")]
        public decimal GetShippingCost([FromQuery] decimal orderTotal)
        {
            return _shippingService.CalculateShippingCost(orderTotal);
        }
    }
}
