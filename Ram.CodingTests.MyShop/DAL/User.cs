
using System.ComponentModel.DataAnnotations;

namespace Ram.CodingTests.MyShop.DAL
{
    public class User
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string FirstName { get; set; }

        [Required]
        public string LastName { get; set; }
    }
}
