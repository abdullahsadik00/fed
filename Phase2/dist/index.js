"use strict";
// ═══════════════════════════════════════════════════════════
// PRIMITIVE TYPES
// ═══════════════════════════════════════════════════════════
// String
let userName = "John";
let greeting = `Hello, ${userName}`; // Template literals
// Number (integer,float,hex,binary,octal)
let age = 30;
let price = 99.99;
let hex = 0xff;
let binary = 0b1010;
let octal = 0o744;
// Boolean
let isLoggedIn = true;
let hasPermission = false;
// Null and Undefined
let nullValue = null;
let undefinedValue = undefined;
// With strictNullChecks, these are distinct types:
let maybeString = null;
let optionalNumber = undefined;
// Symbol
let sym1 = Symbol("key");
let sym2 = Symbol("key");
console.log(sym1 === sym2);
// BigInt (ES2020+)
let bigNumber = 100n;
let bigNumber2 = BigInt(100);
// ═══════════════════════════════════════════════════════════
// SPECIAL TYPES
// ═══════════════════════════════════════════════════════════
// any - Escape hatch, avoid when possible
let anything = "string"; // no error
anything.foo.bar = "hello"; // no error (but it might crash)
//unknown - Type safe alternative to any
let unknownValue = 4;
unknownValue = "string";
// unknownValue.foo;
// ust narrow before use
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
if (typeof unknownValue === "object" && unknownValue !== null) {
    console.log(unknownValue.foo);
}
//# sourceMappingURL=index.js.map