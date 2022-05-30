namespace Ram.CodingTests.MyShop.Services
{
    public interface IShippingService
    {
        public decimal CalculateShippingCost(decimal orderTotal);
    }
    public class ShippingService : IShippingService
    {
        public decimal CalculateShippingCost(decimal orderTotal)
        {
            if(orderTotal <= 50)
            {
                return 10;
            }

            return 20;
        }
    }
}
