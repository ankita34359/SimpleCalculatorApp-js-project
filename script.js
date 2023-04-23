// Ask user for the first number

let num1 = parseInt(prompt("Enter the First Number"));
let num2 = parseInt(prompt("Enter the Second Number"));

// Ask for Operator
let operator = prompt("Enter the operator (+, -,*,/):");




let result;
if(operator === "+"){
  result = num1 + num2;
}else if(operator === "-"){
  result = num1 - num2;
}else if(operator === "*"){
  result = num1 * num2;
}else if(operator === "/"){
  result = num1 / num2;
}else{
  result = "Invalid Operator";
}

// Display the result in console
console.log(`Result: ${result}`); 
