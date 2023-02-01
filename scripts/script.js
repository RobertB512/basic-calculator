// TODO //
// Successfully type numbers and symbols into the equation field
// Can't type some symbols as a first character
// Can't have two decimals or symbols in a row
// Can't end with a decimal or symbol when hitting equals

// ----- grab DOM elements -----
// for the display field
let equationField = document.querySelector(".equation-field");
let answerField = document.querySelector(".answer-field");
// to grab all buttons
let buttons = document.querySelectorAll(".btn");
// for the numbers
let numberBox = document.querySelector(".numberBox")
let numbers = document.querySelectorAll(".number");
let decimal = document.querySelector(".decimal");
// for the operations
let operationBox = document.querySelector(".operation-pad")
let operations = document.querySelectorAll(".operation");
let clear = document.querySelector(".clear");
let clearAll = document.querySelector(".clear-all");
let operators = document.querySelectorAll(".operator");
let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let times = document.querySelector(".times");
let divide = document.querySelector(".divide");
let equals = document.querySelector(".equals");

let userEquation = [];

// functions to use
let doRound = (numToRound) => Math.round(numToRound * 100000) / 100000;
let doAdd = (num1, num2) => doRound(num1 + num2);
let doMinus = (num1, num2) => doRound(num1 - num2);
let doTimes = (num1, num2) => doRound(num1 * num2);
let doDivide = (num1, num2) => doRound(num1 / num2);
let operate = (operator, num1, num2) => {
	if (operator === "+") return doAdd(num1, num2);
	if (operator === "-") return doMinus(num1, num2);
	if (operator === "*") return doTimes(num1, num2);
	if (operator === "/") return doDivide(num1, num2);
};
function playSound() {
	let clickSound = new Audio("./sounds/click.mp3");
	clickSound.play();
}
function showPress(key) {
	let buttonPressed = document.getElementById(`${key}`);
	buttonPressed.classList.add("pressed");
	setTimeout(function() {
		buttonPressed.classList.remove("pressed");
	}, 200);
}

function saveNumber() {
	console.log(`test decimal ${answerField.textContent}`);
	userEquation.push(parseFloat(answerField.textContent));
	console.log(`test decimal ${userEquation}`);
	equationField.textContent += answerField.textContent;
	answerField.textContent = "";
}

// event listeners
buttons.forEach((button) =>
  button.addEventListener("click", () => {
		playSound();
		showPress(button.textContent);
	}));

// main functionality
numbers.forEach((number) =>
  number.addEventListener("click", () => {
    answerField.textContent += number.textContent;
  })
);

operators.forEach((operator) =>
  operator.addEventListener("click", () => {
    saveNumber();
    if (userEquation.length === 3) {
      console.log(`entered if (userEquation): ${userEquation}`);
      let answer = operate(userEquation[1], userEquation[0], userEquation[2]);
      userEquation = [answer];
      equationField.textContent = answer;
      answerField.textContent = "";
    }
    console.log(`equation: ${userEquation}`);
    userEquation.push(operator.textContent);
    equationField.textContent += operator.textContent;
  })
);

plus.addEventListener("click", (num1, num2) => doAdd(num1, num2));
minus.addEventListener("click", (num1, num2) => doMinus(num1, num2));
times.addEventListener("click", (num1, num2) => doTimes(num1, num2));
divide.addEventListener("click", (num1, num2) => doDivide(num1, num2));

clear.addEventListener("click", () => {
  answerField.textContent = "";
});
clearAll.addEventListener("click", () => {
  answerField.textContent = "";
  equationField.textContent = "";
  userEquation = [];
});

equals.addEventListener("click", () => {
  function checkIfValid() {
    userEquation.push(parseInt(answerField.textContent));
    let answer = operate(userEquation[1], userEquation[0], userEquation[2]);
    // answer = Math.round(answer * 1000) / 1000
    if (
      userEquation[0] === 0 &&
      userEquation[1] === "/" &&
      userEquation[2] === 0
    )
      answer = "Can't be done.";
    try {
      return answer;
    } catch {
      let answer = "error";
      return answer;
    }
  }
  answerField.textContent = checkIfValid();
  console.log(`userEquation ${userEquation}`);
  equationField.textContent = "";
  userEquation = [];
});
