using NUnit.Framework;
using Ram.CodingTests.MyShop.ActionFilters;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.UnitTests.ActionFilters
{
    [TestFixture]
    public class ValidateCreateOrderActionFilterTests
    {


        [SetUp]
        public void SetUp()
        {

        }

        private ValidateCreateOrderActionFilter CreateValidateCreateOrderActionFilter()
        {
            return new ValidateCreateOrderActionFilter();
        }

        [Test]
        public async Task OnActionExecutionAsync_StateUnderTest_ExpectedBehavior()
        {
            // Arrange
            
            //Todo

            // Act


            // Assert
        }
    }
}
