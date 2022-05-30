using NSubstitute;
using NUnit.Framework;
using Ram.CodingTests.MyShop.Controllers;
using Ram.CodingTests.MyShop.Services;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.UnitTests.Controllers
{
    [TestFixture]
    public class CountryControllerTests
    {
        private ICountryService _subCountryService;

        [SetUp]
        public void SetUp()
        {
            _subCountryService = Substitute.For<ICountryService>();
        }

        private CountryController CreateCountryController()
        {
            return new CountryController(
                _subCountryService);
        }

        [Test]
        public async Task Get_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            var countryController = CreateCountryController();

            // Act
            var result = await countryController.Get();

            // Assert

            //Todo: To add Tests if I have time at the end
        }
    }
}
