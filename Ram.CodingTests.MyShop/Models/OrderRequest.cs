using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ram.CodingTests.MyShop.Models
{
    public class OrderRequest
    {
        [Required]
        public List<ShoppingCartItemRequest> ShoppingCartItems { get; set; }
        [Required]
        [Range(0,100000)]
        public decimal TotalAmount { get; set; }
        [Required]
        [RegularExpression("[A-Z]{3}")]
        public string Currency { get; set; }
        [Required]
        public UserRequest User { get; set; }
    }
}
