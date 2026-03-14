// Understanding Execution Context Step by Step
var name = "Tiasha";
var age = 25;

function greet() {
  var greeting = "Hello";
  console.log(greeting + " " + name);
}

function introduce() {
  var intro = "I am";
  greet();
  console.log(intro + " " + age + " years old");
}

introduce();

// Stack Overflow - What happens when Call Stack overflows
function recursiveFunction() {
  console.log("Recursive Function called");
  recursiveFunction(); // Calls itself infinitely
}
// recursiveFunction(); uncomment will give RangeError: Maximum call stack size exceeded"

//  PROPER RECURSION WITH BASE CASE:
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
// factorial(5)

// How return values work with Execution Context
function multiply(a, b) {
  return a * b;
}

function square(a) {
  return multiply(a, a);
}

function cube(n) {
  return square(n) * n;
}
var answer = cube(3);
console.log(answer); // 27

// ═══════════════════════════════════════════════════════════════
// REAL-LIFE SCENARIO: Debugging a Stack Trace in Production
// ═══════════════════════════════════════════════════════════════

// In production, you receive this error stack trace:
/*
Error: User not found
    at getUserDetails (api/users.js:45:11)
    at processOrder (api/orders.js:23:15)
    at checkout (api/cart.js:67:9)
    at handlePayment (api/payment.js:12:5)
    at Object.<anonymous> (server.js:89:1)
*/

// This IS the Call Stack! Reading bottom to top:
// 1. server.js called handlePayment
// 2. handlePayment called checkout
// 3. checkout called processOrder
// 4. processOrder called getUserDetails
// 5. getUserDetails threw an error

// SIMULATING THIS SCENARIO:
function getUserDetails(userId) {
  // Simulating database call
  const users = { 1: "Alice", 2: "Bob" };
  if (!users[userId]) {
    throw new Error(`User ${userId} not found`);
  }
  return users[userId];
}

function processOrder(userId, orderId) {
  const user = getUserDetails(userId); // Error happens here
  return { user, orderId, status: "processed" };
}

function checkout(userId, items) {
  const orderId = Date.now();
  return processOrder(userId, orderId);
}

function handlePayment(userId, items, paymentMethod) {
  console.log("Processing payment...");
  const result = checkout(userId, items);
  return { ...result, paymentMethod };
}

// This will throw an error with full stack trace
try {
  let res = handlePayment(1, ["item1", "item2"], "credit_card");
  console.log(res);
} catch (error) {
  console.error("Error:", error.message);
  console.error("Stack:", error.stack);
}

// Understanding the stack trace helps you:
// 1. Find the exact line where error occurred
// 2. Understand the sequence of function calls
// 3. Debug the issue efficiently

// INTERVIEW SCENARIO: PhonePe/Mercor Style Question
console.log("Start");
function first(params) {
  console.log("first");
  second();
  console.log("first end");
}

function second(params) {
  console.log("second start");
  third();
  console.log("second end");
}

function third(params) {
  console.log("third start");
}
first();

console.log("End");

// ═══════════════════════════════════════════════════════════════
// REAL-LIFE SCENARIO: Understanding Memory in Execution Context
// ═══════════════════════════════════════════════════════════════

// PROBLEM: Memory Leak in Event Handlers
function setupButtons() {
    const hugeData = new Array(1000000).fill("x");// Large data

    document.getElementById("btn").addEventListener("click",function() {
        // This closure keeps reference to hugeData!
        console.log(hugeData.length);
    });
}

// Even after setupButtons() finishes, hugeData stays in memory
// because the event listener's execution context references it!

// SOLUTION: Clean up references
function setupButtonsFixed() {
    let hugeData= new Array(1000000).fill("x");
    const length = hugeData.length;// Extract what you need

    hugeData= null;// Allow garbage collection

    document.getElementById("btn").addEventListener("click",function() {
        console.log(length);// Only keeps the primitive value
    });
}

// KEY INSIGHT:
// Execution contexts hold references to variables
// These references prevent garbage collection
// Understanding this helps prevent memory leaks
