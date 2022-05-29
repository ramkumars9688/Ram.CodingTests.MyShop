using FluentAssertions;
using NSubstitute;
using NUnit.Framework;
using Ram.CodingTests.MyShop.Models;
using Ram.CodingTests.MyShop.Repository;
using Ram.CodingTests.MyShop.Services;
using System.Collections.Generic;

namespace Ram.CodingTests.MyShop.UnitTests.Services
{
    public class ProductServiceTests
    {
        private IProductRepository _subProductRepository;

        ProductService _productService;

        public ProductServiceTests()
        {
            _subProductRepository = Substitute.For<IProductRepository>();
            _productService = new ProductService(_subProductRepository);
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

            _subProductRepository.GetAllProducts().Returns(mockProducts);
            var result = _productService.GetAllProducts();

            result.Should().BeEquivalentTo(mockProducts);
        }
    }
}
