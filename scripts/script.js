// TODO //
// Successfully type numbers and symbols into the equation field  
  // Can't type some symbols as a first character
  // Can't have two decimals or symbols in a row 
  // Can't end with a decimal or symbol when hitting equals


// ----- grab DOM elements -----
// for the display field
let equationField = document.querySelector(".equation-field")
let answerField = document.querySelector(".answer-field")
// for the numbers
let numbers = document.querySelectorAll(".number")
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

// functions to use
let doAdd = (num1, num2) => num1 + num2
let doMinus = (num1, num2) => num1 - num2
let doTimes = (num1, num2) => num1 * num2
let doDivide = (num1, num2) => num1 / num2
let operate = (operator, num1, num2) => {
  if (operator === "+") return doAdd(num1, num2)
  if (operator === "-") return doMinus(num1, num2)
  if (operator === "*") return doTimes(num1, num2)
  if (operator === "/") return doDivide(num1, num2)
}

function saveNumber() {
  userEquation.push(parseInt(answerField.textContent))
  equationField.textContent += answerField.textContent
  answerField.textContent = ""
}

// event listeners
numbers.forEach(number => number.addEventListener("click", () => {
  answerField.textContent += number.textContent
}))

operators.forEach(operator => operator.addEventListener("click", () => {
  saveNumber()
  if (userEquation.length === 3) {
    console.log(`entered if (userequation): ${userEquation}`)
    let answer = operate(userEquation[1], userEquation[0], userEquation[2])
    userEquation = [answer]
    equationField.textContent = answer
    answerField.textContent = ""
    
  }
  console.log(`equation: ${userEquation}`)
  userEquation.push(operator.textContent)
  equationField.textContent += operator.textContent
}))

plus?.addEventListener("click", (num1, num2) => doAdd(num1, num2))
minus?.addEventListener("click", (num1, num2) => doMinus(num1, num2))
times?.addEventListener("click", (num1, num2) => doTimes(num1, num2))
divide?.addEventListener("click", (num1, num2) => doDivide(num1, num2))

clear?.addEventListener("click", () => {
  answerField.textContent = ""
})

equals?.addEventListener("click", () => {
  function checkIfValid() {
   let answer = operate(userEquation[1], userEquation[0], parseInt(answerField.textContent))
    try {
      return answer
    } catch {
      let answer = "error"
      return answer
    }
  }
  answerField.textContent = checkIfValid()
  equationField.textContent = ""
  userEquation = []
})
