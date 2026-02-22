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
