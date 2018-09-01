const spendingThreshold = 200.00;
const tax_Rate = 0.08; // 8% sales tax
const phonePrice = 99.99;
const acessory_Price = 9.99;

let bank_balance = 302.13;
let amount = 0;

function calculateTax(amount) {
    return amount * tax_Rate;
}

function formatAmount(amount) {
    return "$" + amount.toFixed( 2 );  
}

//buy phones while you have cash
while (amount < bank_balance) {
    //buy a new phone!
    amount = amount + phonePrice;

    //can we affor the accessory?
    if (amount < spendingThreshold) {
        amount = amount + acessory_Price;
    }
}

console.log("Your purchase: " + formatAmount(amount));
// your purchase: $334.76
// can you afford this purchase?
if(amount > bank_balance) {
    console.log("You can't afford this purchase. :(");
}

/*CHANGES TO BE MADE
1) Let the user input their spending threshold and bank balance.
2) Let the user input how many phones and accessories they want to buy.
3) Create a store inventory list pulled from a master inventory list.
4) Let the user select what they want to buy from the list. 
*/






