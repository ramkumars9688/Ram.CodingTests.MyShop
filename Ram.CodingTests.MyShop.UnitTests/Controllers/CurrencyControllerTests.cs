using NSubstitute;
using NUnit.Framework;
using Ram.CodingTests.MyShop.Controllers;
using Ram.CodingTests.MyShop.Services;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.UnitTests.Controllers
{
    [TestFixture]
    public class CurrencyControllerTests
    {
        private ICurrencyService subCurrencyService;

        [SetUp]
        public void SetUp()
        {
            subCurrencyService = Substitute.For<ICurrencyService>();
        }

        private CurrencyController CreateCurrencyController()
        {
            return new CurrencyController(
                subCurrencyService);
        }

        [Test]
        public async Task GetConversionFactor_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var currencyController = CreateCurrencyController();
            string toCurrency = null;

            // Act
            var result = await currencyController.GetConversionFactor(
                toCurrency);

            // Assert

            //Todo: To add Tests if I have time at the end
        }
    }
}
