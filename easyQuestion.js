//  EASY Q1: Predict the output
var x = 10;
function outer( ) {
  var y = 20;
  console.log(x + y);
}

outer();
console.log(x);
// console.log(y); // ReferenceError: y is not defined

// Q2: Order of execution
function a() {
    console.log("A");
}

function b() {
    console.log("B");
}

function c() {
    console.log("C");
}

a();
b();
c();

// Q3: Return value tracing
function add(a,b) {
    return a+ b;
}

function double(x) {
    return add(x, x);
}

var result= double(5);
console.log(result);

// Q4: Basic var hoisting
console.log(x1); // undefined
var x1 = "variable"
console.log(x1); // variable

// Q5: Function declaration hoisting

greet();
function greet() {
console.log("Hello there");

}
// Output: Hello!
// (Function declarations are fully hoisted)

//  Q6: let vs var

console.log(a1);// Line 1
var a1= 10;

console.log(b1);// Line 2
let b1= 20;

// Line 1: undefined
// Line 2: ReferenceError: Cannot access 'b1' before initialization
