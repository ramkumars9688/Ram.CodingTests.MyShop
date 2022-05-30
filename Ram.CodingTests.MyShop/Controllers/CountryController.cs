using Microsoft.AspNetCore.Mvc;
using Ram.CodingTests.MyShop.DAL;
using Ram.CodingTests.MyShop.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountryController : ControllerBase
    {
        private readonly ICountryService _countryService;

        public CountryController(ICountryService countryService)
        {
            _countryService = countryService;
        }

        [HttpGet]
        public Task<IReadOnlyList<Country>> Get()
        {
            return _countryService.GetCountries();
        }
    }
}
