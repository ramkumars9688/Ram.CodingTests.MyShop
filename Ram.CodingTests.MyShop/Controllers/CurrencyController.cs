using Microsoft.AspNetCore.Mvc;
using Ram.CodingTests.MyShop.Services;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CurrencyController : ControllerBase
    {
        private readonly ICurrencyService _currencyService;

        public CurrencyController(ICurrencyService currencyService)
        {
            _currencyService = currencyService;
        }

        [HttpGet("conversion")]
        public Task<decimal> GetConversionFactor([FromQuery]string toCurrency)
        {
            return _currencyService.GetConversionFactor(toCurrency);
        }
    }
}
