using System.ComponentModel.DataAnnotations;

namespace Ram.CodingTests.MyShop.Models
{
    public class ShoppingCartItemRequest
    {
        [Required]
        [Range(1,10000000)]
        public long ProductId { get; set; }

        [Required]
        [Range(1, 1000)]
        public long Quantity { get; set; }
    }
}
