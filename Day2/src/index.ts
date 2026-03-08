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
let isLoggedIn:boolean = true;
let hasPermission : boolean = false;

// Null and Undefined
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// With strictNullChecks, these are distinct types:
let maybeString: string | null = null;
let optionalNumber: number | undefined = undefined;

