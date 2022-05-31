using Ram.CodingTests.MyShop.DAL;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.Repository
{
    public interface IProductRepository
    {
        public Task<IReadOnlyList<Product>> GetAllProducts();
        public Task<Product> GetProduct(long id);
    }

    /// <summary>
    /// Repository to fetch products 
    /// Todo: Database integration
    /// </summary>
    public class ProductRepository : IProductRepository
    {

        /// <summary>
        /// Get all products
        /// Price is in AUD
        /// Unit is not supported yet, default to Kilogram
        /// </summary>
        /// <returns></returns>
        public Task<IReadOnlyList<Product>> GetAllProducts()
        {
            return Task.FromResult((IReadOnlyList<Product>)GetProducts());
        }

        /// <summary>
        /// Get product
        /// Price is in AUD
        /// Unit is not supported yet, default to Kilogram
        /// </summary>
        /// <returns></returns>
        public Task<Product> GetProduct(long id)
        {
            return Task.FromResult(GetProducts().Find(c => c.Id ==  id));
        }

        private List<Product> GetProducts()
        {
            var products = new List<Product>
            {
                new Product
                {
                    Id = 1,
                    Name = "Royal Gala Apple",
                    Description = "Sweet and juicy apple.",
                    Price = 5.25M,
                    Type = ProductTypeEnum.Fruit
                },
                new Product
                {
                    Id = 2,
                    Name = "Pomegranate",
                    Description = "Spherical fruit loaded With Important Nutrients.",
                    Price = 4,
                    Type = ProductTypeEnum.Fruit
                },
                new Product
                {
                    Id = 3,
                    Name = "Kiwi",
                    Description = "Kiwis are a nutrient-dense food — they are rich in in nutrients and low in calories.",
                    Price = 6.5M,
                    Type = ProductTypeEnum.Fruit
                },
                new Product
                {
                    Id = 4,
                    Name = "Strawberry",
                    Description = "Sweet soft red fruit with a seed-studded surface.",
                    Price = 10,
                    Type = ProductTypeEnum.Fruit
                },
                new Product
                {
                    Id = 5,
                    Name = "Blueberry",
                    Description = "Blueberries are the king of antioxidant foods, low in calories but high in nutrients.",
                    Price = 8,
                    Type = ProductTypeEnum.Fruit
                },
                new Product
                {
                    Id = 6,
                    Name = "Banana",
                    Description = "Bananas are a rich source of carbs, which occur mainly as starch in unripe bananas and sugars in ripe bananas.",
                    Price = 3.5M,
                    Type = ProductTypeEnum.Fruit
                },
                new Product
                {
                    Id = 7,
                    Name = "Carrot",
                    Description = "Carrot is a root vegetable often claimed to be the perfect health food. It is crunchy, tasty, and highly nutritious.",
                    Price = 1.99M,
                    Type = ProductTypeEnum.Vegetable
                },
                new Product
                {
                    Id = 8,
                    Name = "Green beans",
                    Description = "Green beans are a rich source of vitamins A, C, and K, and of folic acid and fiber.",
                    Price = 6.49M,
                    Type = ProductTypeEnum.Vegetable
                },
                new Product
                {
                    Id = 9,
                    Name = "Cauliflower",
                    Description = "Cauliflower is a fiber-rich vegetable that is low in fat and calories.",
                    Price = 5,
                    Type = ProductTypeEnum.Vegetable
                },
                new Product
                {
                    Id = 10,
                    Name = "Broccoli",
                    Description = "Broccoli is a rich source of vitamins, minerals, and antioxidants. Antioxidants can help prevent the development of various conditions.",
                    Price = 7.99M,
                    Type = ProductTypeEnum.Vegetable
                }
            };
            return products;
        }
    }
}
