
// Added const variables and created a function

const standartShippingCost = 6;
const discountedShippingCost = 4

function calculateShippingCosts(totalPrice) {
    if (totalPrice <= 10) {
        shippingCost = standartShippingCost
    } else if (totalPrice <= 20 && totalPrice >= 11) {
        shippingCost = discountedShippingCost
    } else shippingCost = 0

    console.log(`shipping cost for you is ${shippingCost}`);
    console.log(`Payment price for you is ${shippingCost+totalPrice}`);
    console.log("--------------------------------------------");
      
}
//Call the function and set for it parameter value 
calculateShippingCosts(100);
calculateShippingCosts(9);
calculateShippingCosts(15);



