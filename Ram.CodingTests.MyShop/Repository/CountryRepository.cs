using Ram.CodingTests.MyShop.DAL;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.Repository
{
    public interface ICountryRepository
    {
        Task<IReadOnlyList<Country>> GetCountries();
    }

    public class CountryRepository : ICountryRepository
    {
        public Task<IReadOnlyList<Country>> GetCountries()
        {
            var countries = new List<Country>
            {
                new Country
                {
                    Code = "AU",
                    Name = "Australia",
                    Currency = new Currency
                    {
                        Code = "AUD",
                        Name = "Australian Dollar",
                        Symbol = "A$"
                    }
                },
                new Country
                {
                    Code = "NZ",
                    Name = "New Zealand",
                    Currency = new Currency
                    {
                        Code = "NZD",
                        Name = "New Zealand Dollar",
                        Symbol = "NZ$"
                    }
                },
                new Country
                {
                    Code = "US",
                    Name = "United States",
                    Currency = new Currency
                    {
                        Code = "USD",
                        Name = "US Dollar",
                        Symbol = "$"
                    }
                }
            };

            return Task.FromResult((IReadOnlyList<Country>)countries);
        }
    }
}
