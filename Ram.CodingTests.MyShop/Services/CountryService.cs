using Ram.CodingTests.MyShop.DAL;
using Ram.CodingTests.MyShop.Repository;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.Services
{
    public interface ICountryService
    {
        Task<IReadOnlyList<Country>> GetCountries();
    }

    public class CountryService : ICountryService
    {
        private readonly ICountryRepository _countryRepository;

        public CountryService(ICountryRepository countryRepository)
        {
            _countryRepository = countryRepository;
        }

        public Task<IReadOnlyList<Country>> GetCountries()
        {
            return _countryRepository.GetCountries();
        }
    }
}
