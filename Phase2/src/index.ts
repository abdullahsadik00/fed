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

// ═══════════════════════════════════════════════════════════
// ENUM TYPES
// ═══════════════════════════════════════════════════════════

// Numeric enum (default)
enum Direction {
  Up,// 0
  Down,// 1
  Left,// 2
  Right    // 3
}

let dir: Direction = Direction.Up;
console.log(dir);// 0
console.log(Direction[0]);// "Up" (reverse mapping)

// Custom numeric values
enum StatusCode {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  NotFound = 404,
  InternalError = 500
}

// String enum
enum LogLevel {
  Debug = "DEBUG",
  Info = "INFO",
  Warning = "WARNING",
  Error = "ERROR"
}

// Heterogeneous enum (avoid)
enum Mixed {
  No = 0,
  Yes = "YES"
}

// Const enum (inlined at compile time - better performance)
const enum ConstDirection {
  Up,
  Down,
  Left,
  Right
}

let constDir = ConstDirection.Up;// Compiled to: let constDir = 0;

// ═══════════════════════════════════════════════════════════
// TYPE ASSERTIONS
// ═══════════════════════════════════════════════════════════

// "as" syntax (preferred)
let someValue: unknown = "hello";
let strLength: number = (someValue as string).length;

// Angle bracket syntax (not in JSX)
let strLength2: number = (<string>someValue).length;

// Non-null assertion (use with caution!)
let maybeElement: HTMLElement | null = document.getElementById("app");
let definiteElement: HTMLElement = maybeElement!;// Assert not null

// Const assertion
let arr= [1,2,3]as const;// readonly [1, 2, 3]
let obj= { x:1, y:2 }as const;// { readonly x: 1; readonly y: 2 }

// ═══════════════════════════════════════════════════════════
// TYPE INFERENCE
// ═══════════════════════════════════════════════════════════

// TypeScript infers types when possible

let inferredString = "hello"; // string
let inferredNumber = 42; // number
let inferredArray = [1, 2, 3]; // number[]
let inferredObject = { x: 10 }; // { x: number }

// Best common type
let mixedInferred = [1, "two", true];// (string | number | boolean)[]

// Contextual typing
document.addEventListener("click", (event) => {
  // event is inferred as MouseEvent
  console.log(event.clientX);
});

// Return type inference
function add(a: number, b: number) {
  return a + b;// Return type inferred as number
}

// ═══════════════════════════════════════════════════════════
// WHEN TO USE EXPLICIT ANNOTATIONS
// ═══════════════════════════════════════════════════════════

// 1. Function parameters (always)
function greet(name: string) {
  console.log("Hello, " + name);
}

// 2. When inference is too broad
const apiConfig: { readonly apiKey: string } = {
  apiKey: "secret123"
}

// 3. Delayed initialization
let userID: string;
//  ...later
userID = "sadik_5"

// 4. Complex return types for documentation
interface apiResponse<T> {
  data: T;
  statusNumber: number;
}
interface User {
  isActive: boolean
}
const User: apiResponse<User> = {
  data: { isActive: true },
  statusNumber: 200
}

function fetchUser(id: Number): Promise<apiResponse<User>> {
  return fetch(`/api/users/${id}`).then(r => r.json());
}

// 5. When type needs to be wider than inferred
let ids: (string | number)[] = [];
ids.push(1);
ids.push("two")

// ═══════════════════════════════════════════════════════════
// CONTEXTUAL TYPING
// ═══════════════════════════════════════════════════════════

// TypeScript infers types based on context

// Callback parameter types are inferred
const nums = [1, 2, 3, 4, 5]
nums.forEach(element => {
  // element is inferred as number
  console.log(element.toFixed(2));
});

// Event handler types are inferred
document.addEventListener("click",event => {
    // event is inferred as MouseEvent
    console.log(event.clientX, event.clientY);
});

// Array methods
const doubled = nums.map(n => n* 2);// Type: number[]
const filtered = nums.filter(n => n> 1);// Type: number[]

// ═══════════════════════════════════════════════════════════
// BEST PRACTICES
// ═══════════════════════════════════════════════════════════

// ✅ DO: Let inference work for variables
const name = "John";// No need for : string

// ✅ DO: Annotate function parameters
function process(data: string): void { }

// ✅ DO: Annotate when inference is wrong
async function main() {
  const response: apiResponse<User> = await fetchUser(1);
  console.log(response);
}

main();

// ❌ DON'T: Over-annotate obvious types
const ageOfDeveloper: number = 30;// Redundant

// ❌ DON'T: Leave complex types to inference without review
const complicated = someComplexFunction();// Review the inferred type

function someComplexFunction() {
console.log("some complex function");

}
