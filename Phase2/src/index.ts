// ═══════════════════════════════════════════════════════════
// PRIMITIVE TYPES
// ═══════════════════════════════════════════════════════════

// String
let userName: string = "John";
let greeting: string = `Hello, ${userName}`;// Template literals

// Number (integer,float,hex,binary,octal)
let age: number = 30;
let price: number = 99.99;
let hex: number = 0xff;
let binary: number = 0b1010;
let octal: number = 0o744;

// Boolean
let isLoggedIn: boolean = true;
let hasPermission: boolean = false;

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// With strictNullChecks, these are distinct types:
let maybeString: string | null = null;
let optionalNumber: number | undefined = undefined;

// Symbol
let sym1: symbol = Symbol("key")
let sym2: symbol = Symbol("key");
console.log(sym1 === sym2);

// BigInt (ES2020+)
let bigNumber: bigint = 100n;
let bigNumber2: bigint = BigInt(100);

// ═══════════════════════════════════════════════════════════
// SPECIAL TYPES
// ═══════════════════════════════════════════════════════════

// any - Escape hatch, avoid when possible
let anything: any = "string"; // no error
// anything.foo.bar = "hello"; // no error (but it might crash)

//unknown - Type safe alternative to any
let unknownValue: unknown = 4;
unknownValue = "string";
// unknownValue.foo;

// ust narrow before use
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());
}

if (typeof unknownValue === "object" && unknownValue !== null) {
  console.log((unknownValue as { foo: string }).foo);
}

// void - Functions that don't return a value
function logMessage(msg: string): void {
  console.log(msg);
  // No return statement
}

// Function that never return (Throw error or run infintly)
function throwError(errMsg: string): never {
  throw new Error(errMsg);
}

function infiniteLoop(): never {
  while (true) { }
}

// Exhaustive checking with never
type Shape = "circle" | "square" | "triangle"
// type Shape = "circle" | "square" | "triangle" | "rectangle"
function getArea(shape: Shape) {
  switch (shape) {
    case "circle":
      return Math.PI * 1;
    case "square":
      return 1;
      break;
    case "triangle":
      return .5;
      break;
    default:
      // If we add a new shape and forget to handle it,
      // TypeScript will error here
      const _exhaustive: never = shape;
      return _exhaustive;
      break;
  }
}

// ═══════════════════════════════════════════════════════════
// OBJECT TYPES
// ═══════════════════════════════════════════════════════════

// Object literal type
let person: { name: string, age: number } = {
  name: "Sadik",
  age: 26
}

// Optional properties
let config: { host: string; port?: number } = {
  host: "localhost"
  // port is optional
};

// Readonly properties
let immutablePoint: { readonly a: number, readonly b: number } = {
  a: 10,
  b: 2
}
// immutablePoint.a = 5; Error: Cannot assign to 'x'

//index signature
let dictionary: { [key: string]: number } = {
  apple: 1,
  banana: 2
}

dictionary.mango = 3;
// dictionary.grapes = ''

// Array syntax (2 ways)
let numberArray: number[] = [1, 2, 3, 4, 5]
let stringArray: Array<string> = ["one", "two", 'thress']

// Mixed Array (Union)
let mixedArray: (number | string)[] = [1, 'two', 3, 'four']
let mixedArray2: Array<number | string> = [1, 'two', 3, 'four']

// Readonly Array
let readonlyArray: readonly number[] = [1, 2, 3, 4, 5];
let readonlyArray2: ReadonlyArray<number> = [1, 2, 3, 4, 5];
// readonlyArray.push(6)

// Tuple - Fixed length array with specific types
let tuple: [string, number] = ["hello", 2];
let [str, num] = tuple; // Destructuring

// Tuple with optional elements
let optionalTuple: [string, number?] = ["Sadik"]

// Tuple with rest elements
let restTuple: [string, ...number[]] = ["Sadik", 1, 2, 3, 4, 5]
let [restTupleString, ...restTupleArray] = restTuple;
console.log("restTupleString", restTupleString);
console.log("restTupleArray", restTupleArray);

// Named tuple elements (documentation)
let namedTuple: [name: string, age: number] = ["Sadik", 26]

function createUser(...arg: [name: string, age: number]) {
  console.log("arg[0]", arg[0]);
  console.log("arg[0]", arg[1]);
}
createUser("Sadik", 26)

// Readonly tuple
let readonlyTuple: readonly [name: string, age: number] = ["sadik", 26]
