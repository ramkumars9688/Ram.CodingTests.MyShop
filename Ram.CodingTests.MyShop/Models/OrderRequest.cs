using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ram.CodingTests.MyShop.Models
{
    public class OrderRequest
    {
        [Required]
        public List<ShoppingCartItemRequest> ShoppingCartItems { get; set; }
        [Required]
        public decimal TotalAmount { get; set; }
        [Required]
        public string Currency { get; set; }
        [Required]
        public UserRequest User { get; set; }
    }
}
