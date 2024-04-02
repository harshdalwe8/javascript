# JavaScript Data Types and Variable Declaration

In JavaScript, the common data types include `number`, `string`, `boolean`, `object`, `function`, and `undefined`. JSON is not a native data type in JavaScript, but it's a format used to store and exchange data.

## Variable Declaration

Variables in JavaScript can be declared using three keywords: `let`, `var`, and `const`.

### `let`

The `let` keyword is used to declare variables with block scope. Variables declared with `let` can be reassigned.

Example:

```javascript
function food() {
    let food_name = 'pasta'; // Variable declaration using let
    console.log(food_name);
    food_name = 'pizza'; // Variable reassigned
    console.log(food_name);
}

food();
```

### `var`
The `var` keyword is used to declare variables with function or global scope. Variables declared with `var` can be reassigned and re-declared within the same scope.

Example:

```javascript
var food_name = 'food'; // Variable declaration using var

function update_food() {
    food_name = 'pasta'; // Variable reassigned
    console.log(food_name);
}

update_food();
console.log(food_name);
```

### `const`
The `const` keyword is used to declare variables that cannot be reassigned. They must be initialized with a value at the time of declaration, and that value cannot be changed afterwards.

Example:

```javascript
const food_name = 'pasta'; // Variable declaration using const

function update_food() {
    food_name = 'pizza'; // Error: Assignment to constant variable
    console.log(food_name);
}

update_food();
```

## JavaScript Execution
JavaScript code is executed sequentially, from top to bottom and from left to right within a given scope.

## Scope
JavaScript has function scope, meaning variables defined inside a function are only accessible within that function. However, starting from ECMAScript 6 (ES6), let and const also have block scope, which means they are only accessible within the block (enclosed by curly braces) where they are defined.

## Hoisting
Variable declarations (but not initializations) and function declarations are hoisted to the top of their containing scope during the compilation phase. This means you can use variables and functions before they are declared.



## Function Declaration
To declare a function in JavaScript, you can use the following syntax:

```javascript
function functionName(parameters) {
    // code to be executed
}
```

The function can then be called by its name followed by parentheses containing any arguments.

Example:

```javascript
function food() {
    // code to execute here
}

food(); // Calling the function
```

