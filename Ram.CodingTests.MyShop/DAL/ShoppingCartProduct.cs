using System.ComponentModel.DataAnnotations;

namespace Ram.CodingTests.MyShop.DAL
{
    public class ShoppingCartProduct
    {
        [Required]
        public Product Product { get; set; }

        [Required]
        public long Quantity { get; set; }
    }
}
