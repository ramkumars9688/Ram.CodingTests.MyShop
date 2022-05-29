using Microsoft.AspNetCore.Mvc;
using Ram.CodingTests.MyShop.DAL;
using Ram.CodingTests.MyShop.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public Task<IReadOnlyList<Product>> Get()
        {
            return _productService.GetAllProducts();
        }
    }
}
