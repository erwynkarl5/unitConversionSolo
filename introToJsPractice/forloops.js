const prices = [12.99, 34.50, 8.75, 59.00, 22.49, 15.00, 41.25]

// 1. Calculate total with a classic for loop
let total = 0
// your loop here
for ( let i = 0; i < prices.length; i++ ) {
total += prices[i]
}

console.log("Total: $" + total.toFixed(2))

// 2. for...of — log prices over $20 as "$XX.XX"

for (const price of prices) {
    if (price > 20) {
        console.log("$" + price.toFixed(2))
    }
}



// 3. Find the highest price
let highest = 0
// your loop here
for (const price of prices) {
if (price > highest)
highest = price 
}
console.log("Highest: $" + highest)