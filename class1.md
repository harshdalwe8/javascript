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