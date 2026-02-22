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

// ═══════════════════════════════════════════════════════════════
// EXAMPLE: Hoisting within function scope
// ═══════════════════════════════════════════════════════════════

var globalVar= "I'm global";

function testScope() {
    console.log(globalVar);// undefined (NOT "I'm global"!)

    var globalVar= "I'm local";// This shadows the global variable

    console.log(globalVar);// "I'm local"
}

testScope();
console.log(globalVar);// "I'm global" (unchanged)

// WHAT JAVASCRIPT SEES:
/*
var globalVar = "I'm global";

function testScope() {
    var globalVar;  // Local variable hoisted to top of function

    console.log(globalVar);  // undefined (accessing local, not global!)

    globalVar = "I'm local";

    console.log(globalVar);  // "I'm local"
}
*/

// ═══════════════════════════════════════════════════════════════
// EXAMPLE: Block scope with let
// ═══════════════════════════════════════════════════════════════

let blockVar= "outer";

{
    // New block scope
    // console.log(blockVar);  // ReferenceError - TDZ!

    let blockVar= "inner";// Different variable, block-scoped
    console.log(blockVar);// "inner"
}

console.log(blockVar);// "outer" (outer variable unchanged)

// ═══════════════════════════════════════════════════════════════
// REAL-LIFE SCENARIO: Bug due to hoisting
// ═══════════════════════════════════════════════════════════════

// Developer writes this code expecting it to work:
function processUserData(user) {
    if (user.isAdmin) {
        var accessLevel= "admin";
        var permissions= getAllPermissions();
    }

    // Bug: Developer expects this to throw error if not admin
    // But it doesn't! accessLevel is undefined, not an error
    console.log("Access level:", accessLevel);// undefined for non-admin

    // This could cause security issues!
    if (accessLevel=== "admin") {
        // Grant admin access
    }
}
processUserData({isAdmin:false})


// CORRECT VERSION using let:
function processUserDataFixed(user) {
    if (user.isAdmin) {
        let accessLevel= "admin";
        let permissions= getAllPermissions();

        console.log("Access level:", accessLevel);
        // accessLevel is only accessible within this block
    }

    // console.log(accessLevel); // ReferenceError - Caught early!
}
processUserDataFixed({isAdmin:true})

// ═══════════════════════════════════════════════════════════════
// INTERVIEW SCENARIO: "Review this code and find issues"
// ═══════════════════════════════════════════════════════════════

// Code to review:
function calculateTotal(items) {
    var total= 0;

    for (var i= 0; i< items.length; i++) {
        var itemPrice= items[i].price;
        var discount= getDiscount(items[i]);
        total+= itemPrice- discount;
    }

    // Bug 1: These variables are accessible here (var hoisting)
    console.log("Last item price:", itemPrice);// Accessible!
    console.log("Last index:", i);// Accessible!

    return total;
}

// ISSUES TO IDENTIFY:
/*
1. var creates function-scoped variables
   - itemPrice, discount, i are accessible outside the loop
   - This is usually unintended and can lead to bugs

2. If items is empty:
   - i = 0 (never incremented)
   - itemPrice = undefined (never assigned)
   - Could cause unexpected behavior

3. Better version:
*/

function calculateTotalFixed(items) {
    let total= 0;

    for (let i= 0; i< items.length; i++) {
        const itemPrice = items[i].price;
        const discount = getDiscount(items[i]);
        total+= itemPrice- discount;
    }

    // console.log(itemPrice); // ReferenceError - Good! Caught early
    // console.log(i);         // ReferenceError - Good! Caught early

    return total;
}

// ═══════════════════════════════════════════════════════════════
// REAL-LIFE SCENARIO: Using hoisting for clean code organization
// ═══════════════════════════════════════════════════════════════

// PUBLIC API AT THE TOP (thanks to hoisting)
const UserModule = {
    createUser,
    deleteUser,
    updateUser,
    getUser
};

// IMPLEMENTATION DETAILS BELOW
function createUser(data) {
    validateData(data);
    const user = formatUser(data);
    return saveToDatabase(user);
}

function deleteUser(id) {
    const user = getUser(id);
    if (user) {
        return removeFromDatabase(id);
    }
    throw new Error("User not found");
}

function updateUser(id,data) {
    validateData(data);
    return updateInDatabase(id, data);
}

function getUser(id) {
    return fetchFromDatabase(id);
}

// PRIVATE HELPER FUNCTIONS
function validateData(data) {
    if (!data.name|| !data.email) {
        throw new Error("Invalid data");
    }
}

function formatUser(data) {
    return {
        ...data,
        createdAt:new Date(),
        id:generateId()
    };
}

// This pattern works because function declarations are hoisted!
// You can organize code with public API at top, implementation below
