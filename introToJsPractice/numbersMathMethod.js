const billAmount = 47.50
const tipPercent = 18  // 18%

// tipAmount = billAmount * (tipPercent / 100), rounded to 2 decimals
const tipAmount = Math.round((billAmount * tipPercent / 100) * 100) / 100

// total = billAmount + tipAmount
const total = billAmount + tipAmount

console.log(`Tip: $${tipAmount} | Total: $${total}`)


// The Math object has useful methods like Math.round(), Math.floor(), Math.ceil(), Math.random(), and Math.abs().





