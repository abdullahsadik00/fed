//  Q1: Nested function calls with side effects
var counter;
function increment() {
  counter++;
  console.log("Increment:", counter);
}

function process() {
  console.log("Process start");
  increment();
  console.log("Process Middle");
  increment();
  console.log("Process End");
}

function main() {
  console.log("Main Start");
  process();
  console.log("Main End");
  increment();
}

main();
console.log("Final Counter:", counter);

// Q2: Understanding this in different contexts
var name = "Global";

function showName() {
  console.log(this.name);
}

var obj = {
  name: "Object",
  show: showName(),
};

// showName();// Output 1: undefined
// obj.show();// Output 2: Object
// showName.call(obj);// Output 3: Object

// Q3: Execution Context with conditionals
var value = 1;
function check() {
  console.log("value : ", value);
  if (value === 1) {
    var value = 2;
    console.log("inside if", value);
  }
  console.log("outside if", value);
}
check();
/*
EXPECTED OUTPUT:
Value: undefined
Inside if: 2
After if: 2

EXPLANATION:
- var is function-scoped, hoisted to top of check()
- During creation phase, local 'value' is undefined
- This local 'value' shadows the global 'value'
- First log shows undefined (not 1!)
- After assignment, value becomes 2
*/

// Q4: Function expression vs declaration
console.log(foo);
console.log(bar);
function foo() {
  return "foo";
}
var bar = function () {
  return "bar";
};
console.log(foo());
console.log(bar());
/*
Output 1: [Function: foo] (entire function)
Output 2: undefined (only var declaration hoisted)
Output 3: "foo"
Output 4: "bar"
*/

// Q5: Hoisting with same name
var myVar = "global";
function test() {
  console.log(myVar);
  var myVar = "local";
  console.log(myVar);
}
test();
console.log(myVar);

/*
Output 1: undefined (local myVar is hoisted, shadows global)
Output 2: "local"
Output 3: "global" (global unchanged)
*/

//  Q6: Multiple declarations
function example() {
  console.log(a);
  // console.log(b);
  // console.log(c);

  var a = 1;
  let b = 2;
  const c = 3;

  console.log(a);
  console.log(b);
  console.log(c);
}

example();

/*
- First console.log(a) → undefined
- First console.log(b) → ReferenceError (TDZ)
The code stops at the ReferenceError before reaching other logs
*/

