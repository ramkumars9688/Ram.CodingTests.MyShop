using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Ram.CodingTests.MyShop.DAL
{
    public class Order
    {
        [Required]
        public long Id { get; set; }
        [Required]
        public List<ShoppingCartProduct> Products { get; set; }
        [Required]
        public DateTime CreationDate { get; set; }
        [Required]
        public User User { get; set; }
        [Required]
        public string Currency { get; set; }
        [Required]
        public decimal TotalAmount { get; set; }
    }
}
