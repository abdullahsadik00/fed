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
var name= "Global";

function showName() {
    console.log(this.name);
}

var obj= {
    name:"Object",
    show: showName()
};

// showName();// Output 1: undefined
// obj.show();// Output 2: Object
// showName.call(obj);// Output 3: Object

// Q3: Execution Context with conditionals
var value = 1;
function check() {
  console.log("value : ",value)
  if (value === 1) {
    var value = 2;
    console.log("inside if",value);
  }
  console.log("outside if",value);
}
check()
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
