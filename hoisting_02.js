// hoisting in js is a defult behaviours of moving declatration.A  variable can be used before it has been declared  in hoisting.
//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
//there are two type of hoisting; variable hoisting, function hoisting.

//variable hoisting
//Variable hosting can be done with var. if we use let the result will be;ReferenceError and while sing const while hoisting the result will be;syntax error
//When you declare a variable using var, it gets hoisted to the top of its containing function or global scope.

console.log(x); // output:undefined

var x = "Education";

console.log(x); //output: education

//functional hoisting 
//In functional hoisting we can call function before it appears in the code.

ane(); // This works because the function is hoisted.(calling function)

function ane() {
  console.log("Hello, world!");
}
