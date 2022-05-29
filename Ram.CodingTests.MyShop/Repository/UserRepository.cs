using Ram.CodingTests.MyShop.DAL;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.Repository
{
    public interface IUserRepository
    {
        public Task<User> GetUser(string email);
    }
    /// <summary>
    /// Repository to fetch User data
    /// Todo: Database integration
    /// </summary>
    public class UserRepository : IUserRepository
    {
        public Task<User> GetUser(string email)
        {
            return Task.FromResult(new User
            {
                Email = email,
                FirstName = "John",
                LastName = "Smith"
            });
        }
    }
}
