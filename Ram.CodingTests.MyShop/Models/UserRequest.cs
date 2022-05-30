using System.ComponentModel.DataAnnotations;

namespace Ram.CodingTests.MyShop.Models
{
    public class UserRequest
    {
        [Required]
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }
    }
}
