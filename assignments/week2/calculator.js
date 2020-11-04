let arguments = process.argv;

let number1 = arguments[2];
let mathOperator = arguments[3];
let number2 = arguments[4];

// console.log(arguments);

let num1Converted = parseInt(number1);
let num2Converted = parseInt(number2);

if (isNaN(num1Converted) || isNaN(num2Converted)) {    console.log("Error 349923: The first or second number is not an actual number! Try again. Note that * is not a valid maath operator.");
// } else if (mathOperator !== "+")

} else {}
       
    if (mathOperator === "+" || mathOperator === "plus") {
        console.log(`The sum of ${num1Converted} and ${num2Converted} is ${num1Converted + num2Converted}.`);
    } else if (mathOperator === "-") {
        console.log(`The difference of ${num1Converted} and ${num2Converted} is ${num1Converted - num2Converted}.`);
    } else if (mathOperator === "x") {
        console.log(`The product of ${num1Converted} and ${num2Converted} is ${num1Converted * num2Converted}.`);
    } else if (mathOperator === "/") {
        console.log(`The quotient of ${num1Converted} and ${num2Converted} is ${num1Converted / num2Converted}.`);
    }

// console.log(typeof num1Converted, typeof num2Converted);
