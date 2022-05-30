
using System;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.Repository
{
    public interface ICurrencyRepository
    {
        Task<decimal> GetConversionFactor(string toCurrency);
    }
    public class CurrencyRepository : ICurrencyRepository
    {
        /// <summary>
        /// Return currency conversion factor (i.e) for 1 unit of fdefault fromCurrency
        /// Hardcoded data used for now, fromCurrency will be AUD always as AU is default country
        /// </summary>
        /// <param name="toCurrency"></param>
        /// <returns></returns>
        public Task<decimal> GetConversionFactor(string toCurrency)
        {

            switch (toCurrency)
            {
                case "NZD":
                    {
                        return Task.FromResult(1.096M);
                    }
                case "USD":
                    {
                        return Task.FromResult(0.719M);
                    }
            }

            throw new InvalidOperationException("ToCurrency is not supported");
        }
    }
}
