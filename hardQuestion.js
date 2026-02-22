// Q1: Complex execution order (PhonePe Interview Style)
console.log("1");

function outer() {
  console.log("2");
  inner();
  console.log("3");

  function inner() {
    console.log("4");
    innermost();
    console.log("5");

    function innermost() {
      console.log("6");
    }
  }
}

console.log("7");
outer();
console.log("8");

// Q2: Recursion with execution context tracking

function factorial(n) {
  console.log(`Entering factorial(${n})`);

  if (n <= 1) {
    console.log(`Base case reached for factorial(${n}), returning 1`);
    return 1;
  }

  var result = n * factorial(n - 1);
  console.log(`factorial(${n}) = ${n} * factorial(${n - 1}) = ${result}`);
  return result;
}

console.log("Final result:", factorial(4));

/*

EXPECTED OUTPUT:
Entering factorial(4)
Entering factorial(3)
Entering factorial(2)
Entering factorial(1)
Base case reached for factorial(1), returning 1
factorial(2) = 2 * factorial(1) = 2
factorial(3) = 3 * factorial(2) = 6
factorial(4) = 4 * factorial(3) = 24
Final result: 24

CALL STACK AT DEEPEST POINT:
[Global, factorial(4), factorial(3), factorial(2), factorial(1)]
*/

//  Q3: Execution context with closures and async
function createCounter() {
  var count = 0;

  console.log("Counter created");

  return {
    increment: function () {
      count++;
      console.log("Count:", count);
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

console.log("Start");

var counter1 = createCounter();
var counter2 = createCounter();

console.log("Counters created");

counter1.increment();
counter1.increment();
counter2.increment();

console.log("Counter1:", counter1.getCount());
console.log("Counter2:", counter2.getCount());

/*
EXPECTED OUTPUT:
Start
Counter created
Counter created
Counters created
Count: 1
Count: 2
Count: 1
Counter1: 2
Counter2: 1
*/

// Q4: Interview Question - Find the bug

for (var i = 1; i <= 3; i++) {
  setTimeout(function () {
    console.log("Timer " + i);
  }, i * 1000);
}

/*
EXPECTED ANSWER:
Actual output: Timer 4, Timer 4, Timer 4

Bug explanation:
- var is function-scoped, not block-scoped
- There's only ONE 'i' in the global execution context
- By the time setTimeout callbacks run, the loop has finished
- At that point, i = 4 (loop exit condition)
- All callbacks reference the SAME 'i'

Fix 1 - Use let:
for (let i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log("Timer " + i);
    }, i * 1000);
}

Fix 2 - Use closure (IIFE):
for (var i = 1; i <= 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log("Timer " + j);
        }, j * 1000);
    })(i);
}
*/
