using FluentAssertions;
using NSubstitute;
using NUnit.Framework;
using Ram.CodingTests.MyShop.Controllers;
using Ram.CodingTests.MyShop.Models;
using Ram.CodingTests.MyShop.Services;
using System.Collections.Generic;

namespace Ram.CodingTests.MyShop.UnitTests.Controllers
{
    public class ProductControllerTests
    {
        private IProductService _subProductService;

        ProductController _productController;

        public ProductControllerTests()
        {
            _subProductService = Substitute.For<IProductService>();
            _productController = new ProductController(_subProductService);
        }

        [Test]
        public void GetAllProducts_Positive()
        {
            var mockProducts = new List<Product>
            {
                 new Product
                {
                    Id = 1,
                    Name = "Apple",
                    Price = 5.25M,
                    Type = ProductTypeEnum.Fruit
                },
                new Product
                {
                    Id = 2,
                    Name = "Carrot",
                    Price = 4,
                    Type = ProductTypeEnum.Vegetable
                },
            };

            _subProductService.GetAllProducts().Returns(mockProducts);
            var result = _productController.Get();

            result.Should().BeEquivalentTo(mockProducts);
        }
    }
}
