namespace Ram.CodingTests.MyShop.Models
{
    public class Product
    {
        public long Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public ProductTypeEnum Type { get; set; }

        public decimal Price { get; set; }
    }
}
