// How var hoisting works
// ═══════════════════════════════════════════════════════════════
// EXAMPLE: How var hoisting works
// ═══════════════════════════════════════════════════════════════

// WHAT YOU WRITE:
console.log(name);// undefined
var name= "Tiasha";
console.log(name);// "Tiasha"

// WHAT JAVASCRIPT SEES (after hoisting):
/*
var name;           // Declaration hoisted
console.log(name);  // undefined (declared but not initialized)
name = "Tiasha";    // Initialization stays in place
console.log(name);  // "Tiasha"
*/

// ═══════════════════════════════════════════════════════════════
// MORE COMPLEX EXAMPLE
// ═══════════════════════════════════════════════════════════════

console.log(a);// undefined
console.log(b);// undefined
console.log(c);// undefined

var a= 1;
var b= 2;
var c= a+ b;

console.log(a);// 1
console.log(b);// 2
console.log(c);// 3

// HOISTED VERSION:
/*
var a;
var b;
var c;

console.log(a);  // undefined
console.log(b);  // undefined
console.log(c);  // undefined

a = 1;
b = 2;
c = a + b;

console.log(a);  // 1
console.log(b);  // 2
console.log(c);  // 3
*/

// ═══════════════════════════════════════════════════════════════
// EXAMPLE: Function Declaration Hoisting
// ═══════════════════════════════════════════════════════════════

// This works! Function declarations are fully hoisted
sayHello();// "Hello!"

function sayHello() {
    console.log("Hello!");
}

// WHAT JAVASCRIPT SEES:
/*
function sayHello() {    // Entire function is hoisted
    console.log("Hello!");
}

sayHello();  // Now we can call it
*/

// ═══════════════════════════════════════════════════════════════
// EXAMPLE: Function Expression Hoisting
// ═══════════════════════════════════════════════════════════════

// This FAILS!
// sayGoodbye(); // TypeError: sayGoodbye is not a function

var sayGoodbye = function() {
    console.log("Goodbye!");
};

sayGoodbye();// "Goodbye!" - Works after definition

// WHAT JAVASCRIPT SEES:
/*
var sayGoodbye;  // Only the variable is hoisted, not the function!

// sayGoodbye(); // At this point, sayGoodbye is undefined!

sayGoodbye = function() {
    console.log("Goodbye!");
};

sayGoodbye();  // Now it works
*/

// ═══════════════════════════════════════════════════════════════
// EXAMPLE: Arrow Function Hoisting
// ═══════════════════════════════════════════════════════════════

// greet(); // TypeError: greet is not a function

const greet = ()=> {
    console.log("Hi there!");
};

greet();// "Hi there!"

// Arrow functions behave like function expressions
// The variable is hoisted, but it's in the TDZ until initialized

// ═══════════════════════════════════════════════════════════════
// EXAMPLE: Temporal Dead Zone in action
// ═══════════════════════════════════════════════════════════════

// ❌ This throws ReferenceError
// console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization

let myLet= "I am let";
console.log(myLet);// "I am let"

// ❌ Same with const
// console.log(myConst); // ReferenceError

const myConst = "I am const";
console.log(myConst);// "I am const"

// ═══════════════════════════════════════════════════════════════
// EXAMPLE: TDZ is temporal (time-based), not positional
// ═══════════════════════════════════════════════════════════════

function checkTDZ() {
    // TDZ for 'value' starts here

    const printValue = ()=> {
        console.log(value);// This is fine because function is called later
    };

    // Still in TDZ here

    let value= "Hello";// TDZ ends

    printValue();// "Hello" - Works because value is now initialized
}

checkTDZ();

// ═══════════════════════════════════════════════════════════════
// EXAMPLE: TDZ with typeof
// ═══════════════════════════════════════════════════════════════

// For undeclared variables, typeof returns "undefined"
console.log(typeof undeclaredVar);// "undefined" - No error!

// But for let/const in TDZ, it throws!
// console.log(typeof myVariable);  // ReferenceError!
let myVariable= "exists";
console.log(typeof myVariable);// "string"

// ═══════════════════════════════════════════════════════════════
// EXAMPLE: Temporal Dead Zone in action
// ═══════════════════════════════════════════════════════════════

// ❌ This throws ReferenceError
// console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization

let myLet2= "I am let";
console.log(myLet2);// "I am let"

// ❌ Same with const
// console.log(myConst); // ReferenceError

const myConst2 = "I am const";
console.log(myConst2);// "I am const"

// ═══════════════════════════════════════════════════════════════
// EXAMPLE: TDZ is temporal (time-based), not positional
// ═══════════════════════════════════════════════════════════════

function checkTDZ() {
    // TDZ for 'value' starts here

    const printValue = ()=> {
        console.log(value);// This is fine because function is called later
    };

    // Still in TDZ here

    let value= "Hello";// TDZ ends

    printValue();// "Hello" - Works because value is now initialized
}

checkTDZ();

// ═══════════════════════════════════════════════════════════════
// EXAMPLE: TDZ with typeof
// ═══════════════════════════════════════════════════════════════

// For undeclared variables, typeof returns "undefined"
console.log(typeof undeclaredVar);// "undefined" - No error!

// But for let/const in TDZ, it throws!
// console.log(typeof myVariable);  // ReferenceError!
let myVariable2= "exists";
console.log(typeof myVariable2);// "string"
