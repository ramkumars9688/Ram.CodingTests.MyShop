using Ram.CodingTests.MyShop.Repository;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.Services
{
    public interface ICurrencyService
    {
        Task<decimal> GetConversionFactor(string toCurrency);
    }

    public class CurrencyService : ICurrencyService
    {
        private readonly ICurrencyRepository _currencyRepository;
        public CurrencyService(ICurrencyRepository currencyRepository)
        {
            _currencyRepository = currencyRepository;
        }

        public Task<decimal> GetConversionFactor(string toCurrency)
        {
            return _currencyRepository.GetConversionFactor(toCurrency);
        }
    }
}
