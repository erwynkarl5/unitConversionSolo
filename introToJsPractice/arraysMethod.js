// const cart = ["bread", "milk", "eggs", "butter", "coffee"]

// // 1. First item
// cart[0]

// // 2. Last item
// console.log(cart[cart.length - 1])

// // 3. Total number of items
// console.log(cart.length)

// // 4. Change "milk" to "oat milk"
// cart[1] = 'oat milk'




// // 5. Log the updated cart
// console.log(cart)


const playlist = ["Stairway to Heaven", "Hotel California", "Smells Like Teen Spirit"]

// // 1. Add "Bohemian Rhapsody" to the end
// console.log(playlist.push('Bohemian Rhapsody'))

// // 2. Add "Imagine" to the beginning
// console.log(playlist.unshift('Imagine'))

// // 3. Remove the last song, log it
// console.log(playlist)
// console.log(playlist.pop())

// // 4. Is "Hotel California" in the list?
// console.log(playlist.length[2])

// // 5. Log as a string joined by " → "
// console.log(playlist.join(' → '))
// playlist.pop()



const products = [
  { name: "Notebook", price: 12.99 },
  { name: "Headphones", price: 79.99 },
  { name: "Pen Set", price: 8.49 },
  { name: "Lamp", price: 34.00 },
  { name: "Mouse Pad", price: 14.99 },
]

const names = products.map(p => p.name)
const affordable = products.filter(p => p.price <= 30)
const totalValue = products.reduce((acc, p) => acc + p.price, 0)

console.log(names)
console.log(affordable)
console.log('Total: $' + totalValue.toFixed(2))

