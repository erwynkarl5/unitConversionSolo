function celsiusToFahrenheit(c) {
return c * 9/5 + 32
}

function isEven(n) {
return n % 2 === 0
}

function capitalize(str) {
return str[0].toUpperCase() + str.slice(1)
}

// Test your functions
console.log(celsiusToFahrenheit(0))   // 32
console.log(celsiusToFahrenheit(100)) // 212
console.log(isEven(4))   // true
console.log(isEven(7))   // false



// 1. double — convert to arrow function
const double = (n) => n * 2

// 2. greet — convert to arrow function
const greet =  name => `Hey, ${name}!`

// 3. inRange — can use implicit return with a boolean expression
const inRange = (n, min, max) => n >= min && n <= max

console.log(double(7))           // 14
console.log(greet("Nadia"))      // "Hey, Nadia!"
console.log(inRange(5, 1, 10))   // true
console.log(inRange(11, 1, 10))  // false