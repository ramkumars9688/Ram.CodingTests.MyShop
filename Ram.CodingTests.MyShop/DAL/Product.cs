using System.ComponentModel.DataAnnotations;
namespace Ram.CodingTests.MyShop.DAL
{
    public class Product
    {
        [Required]
        public long Id { get; set; }

        [Required]
        public string Name { get; set; }

        public string Description { get; set; }
        [Required]
        public ProductTypeEnum Type { get; set; }

        [Required]
        public decimal Price { get; set; }
    }
}
