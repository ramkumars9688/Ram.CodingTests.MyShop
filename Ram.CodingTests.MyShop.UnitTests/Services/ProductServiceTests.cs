using FluentAssertions;
using NSubstitute;
using NUnit.Framework;
using Ram.CodingTests.MyShop.DAL;
using Ram.CodingTests.MyShop.Repository;
using Ram.CodingTests.MyShop.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.UnitTests.Services
{
    public class ProductServiceTests
    {
        private IProductRepository _subProductRepository;

        ProductService _productService;

        [SetUp]
        public void SetUp()
        {
            _subProductRepository = Substitute.For<IProductRepository>();
            _productService = new ProductService(_subProductRepository);
        }

        [Test]
        public async Task GetAllProducts_PositiveAsync()
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
            var result = await _productService.GetAllProducts();

            result.Should().BeEquivalentTo(mockProducts);
        }

        [Test]
        public async Task GetProduct_PositiveAsync()
        {
            var mockProduct = new Product
            {
                Id = 1,
                Name = "Apple",
                Price = 5.25M,
                Type = ProductTypeEnum.Fruit
            };

            _subProductRepository.GetProduct(1).Returns(mockProduct);
            var result = await _productService.GetProduct(1);

            result.Should().BeEquivalentTo(mockProduct);
        }
    }
}
