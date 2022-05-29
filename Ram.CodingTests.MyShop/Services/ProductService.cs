using Ram.CodingTests.MyShop.Models;
using Ram.CodingTests.MyShop.Repository;
using System.Collections.Generic;

namespace Ram.CodingTests.MyShop.Services
{
    public interface IProductService
    {
        IReadOnlyList<Product> GetAllProducts();
    }

    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public IReadOnlyList<Product> GetAllProducts()
        {
            return _productRepository.GetAllProducts();
        }
    }
}
