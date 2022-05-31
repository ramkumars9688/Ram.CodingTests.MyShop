using Ram.CodingTests.MyShop.DAL;
using Ram.CodingTests.MyShop.Repository;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.Services
{
    public interface IProductService
    {
        Task<IReadOnlyList<Product>> GetAllProducts();

        Task<Product> GetProduct(long id);
    }

    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;

        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public Task<IReadOnlyList<Product>> GetAllProducts()
        {
            return _productRepository.GetAllProducts();
        }
        public Task<Product> GetProduct(long id)
        {
            return _productRepository.GetProduct(id);
        }
    }
}
