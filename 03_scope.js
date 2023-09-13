// scope is ...

// Global Scope: Variables declared outside of any function or block have global scope. They can be accessed from any part of your code, including other functions. Variables declared in the global scope are typically considered global variables.

var globalVariable = 10;

function myFunction() {
    console.log(globalVariable); // Accessible
}


// Function Scope: Variables declared inside a function have function scope. They are accessible only within the function where they are declared. This means that they are not accessible outside of the function.
function myFunction() {
    var localVar = 5;
    console.log(localVar); // Accessible
}

console.log(localVar); // Error: localVar is not defined

// Block Scope (Introduced in ECMAScript 6): With the introduction of ECMAScript 6 (ES6), JavaScript gained block-level scoping. Variables declared using let and const within a block (enclosed in curly braces {}) are limited to that block. This is in contrast to the older var declaration, which has function-level scope.

if (true) {
    let blockVar = 20;
    const anotherBlockVar = 30;
    console.log(blockVar); // Accessible
}

console.log(blockVar); // Error: blockVar is not defined
console.log(anotherBlockVar); // Error: anotherBlockVar is not defined
