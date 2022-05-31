using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Ram.CodingTests.MyShop.Models;
using System.Linq;
using System.Threading.Tasks;

namespace Ram.CodingTests.MyShop.ActionFilters
{
    public class ValidateCreateOrderActionFilter : IAsyncActionFilter
    {

        public async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var orderRequest = context.ActionArguments.Values.FirstOrDefault(model => model is OrderRequest) as OrderRequest;

            if(orderRequest == null)
            {
                context.ModelState.AddModelError(nameof(OrderRequest), "Order request is required");
            }

            if (orderRequest.ShoppingCartItems?.Count > 0)
            {
                // Todo: Validate price as if a user manipulates the price
               
                //if (orderRequest.TotalAmount != totalAmount + shippingCost)
                //{
                //    context.ModelState.AddModelError(nameof(OrderRequest), "Price validation failure");
                //}
            }
            else
            {
                context.ModelState.AddModelError(nameof(OrderRequest), "Shopping cart item is required");
            }


            if (!context.ModelState.IsValid)
            {
                context.Result = new BadRequestObjectResult(context.ModelState);
            }
            else
            {
                await next();
            }
        }
    }
}
