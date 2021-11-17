const milkPrice = 1.20;
const cocoaPrice = 2.00;
const saladPrice = 2.00;
const carrotsPrice = 2.00;
const tomatoesPrice = 2.50;
const readyMealsPrice = 5.00;

const shoppingList = [
    `Milk costs £ ${milkPrice}`,
    `Cocoa costs £ ${cocoaPrice}`,
    `Salad costs £ ${saladPrice}`,
    `Carrots costs £ ${carrotsPrice}`,
    `Tomatoes costs £ ${tomatoesPrice}`,
    `Ready meals costs £ ${readyMealsPrice}`
]

let addItem = prompt(`Add an item to your shopping list:`)
let addPrice = Number(prompt(`How much does it costs?`))
let itemAndPrice = `${addItem} costs £ ${addPrice}`
let totalPrice = milkPrice + cocoaPrice + saladPrice + carrotsPrice
+ tomatoesPrice + readyMealsPrice + addPrice;

if(typeof(addItem === String) && typeof(addPrice === Number)) {
    shoppingList.push(itemAndPrice)
    console.log(shoppingList, `Total cost: £ ${totalPrice.toFixed(2)}`)

}

