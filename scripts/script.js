// TODO //
// Successfully type numbers and symbols into the equation field  
  // Can't type a symbol or decimal as a first number
  // Can't have two decimals or symbols in a row 
  // Can't end with a decimal or symbol when hitting equals

// Successfully output result of the equation to the answer field

// ----- grab DOM elements -----
// for the display field
let equationField = document.querySelector(".equation-field")
let answerField = document.querySelector(".answer-field")
// for the numbers
let numbers = document.querySelectorAll(".number")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let zero = document.querySelector(".zero")
let decimal = document.querySelector(".decimal")
// for the operations
let operations = document.querySelectorAll(".operation")
let clear = document.querySelector(".clear")
let operators = document.querySelectorAll(".operator")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let times = document.querySelector(".times")
let divide = document.querySelector(".divide")
let equals = document.querySelector(".equals")

let userEquation = []

numbers.forEach(number => number.addEventListener("click", () => {
  if (equationField?.textContent === "0") {
    equationField.textContent = ""
  }
  equationField.textContent += number.textContent
  while (userEquation[-1] === ".") {
    decimal?.setAttribute("disabled", "disabled")
  }
  userEquation.push(number.textContent)
  console.log(userEquation)
}))

operators.forEach(operator => operator.addEventListener("click", () => {
  // if (equationField?.textContent === "0") {
  //   equationField.textContent = ""
  // }
  equationField.textContent += operator.textContent
  while (userEquation[-1] === ".") {
    decimal?.setAttribute("disabled", "disabled")
  }
  userEquation.push(operator.textContent)
  console.log(userEquation)
}))

clear?.addEventListener("click", () => {
  userEquation.pop()
  equationField.textContent = userEquation.join("")
})
