using System.ComponentModel.DataAnnotations;

namespace Ram.CodingTests.MyShop.Models
{
    public class ShoppingCartItemRequest
    {
        [Required]
        public long ProductId { get; set; }

        [Required]
        public long Quantity { get; set; }
    }
}
