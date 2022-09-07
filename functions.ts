// FUNCTIONS

const add = (number1, number2) => {
  return number1 + number2
}

console.log(add(true, "string")) // BECAUSE IT ACCEPTS ANYTHING


const substract = (num1: number, num2: number) => {
  return num1 - num2
}

console.log(substract(1, 2))
console.log(substract(1, true)) // IT EXPECTS A number


const compare = (num1: number, num2: number): boolean => {
  // return num1 + num2 WOULD BE AN ERROR!!!
  return num1 > num2
}

console.log(compare(1, 2))


const log = () => { // return TYPE IS void
  console.log("Hello")
}

// IT'S LIKE
const log2 = (): void => {
  console.log("Hello")
}

log()