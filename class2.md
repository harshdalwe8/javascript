## Function Declaration
To create a function in JavaScript, you can follow this pattern:

```javascript
function functionName(parameters) {
    // Instructions for what the function should do
}
```
Here's an example:

```javascript
function food() {
    // Instructions for making food
}

food(); // This line calls the food function
```
## Arrow Functions
In modern JavaScript, there's a shorter way to write functions called arrow functions. They look like this:

Normal function:
```javascript
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5
```
Converted into an Arrow function:

```javascript
const add = (a, b) => a + b;

console.log(add(2, 3)); // This will output 5
```

Example of object of arrow functions:
```javascript
const math = {
    add: (a, b) => { return (a + b) },
    sub: (a, b) => { return (a - b) },
    multiply: (a, b) => { return (a * b) }
};

console.log(math.sub(5, 3));
```

## Callback Functions
JavaScript can handle asynchronous operations, which are tasks that take time to finish. Callback functions are used to deal with these tasks. Here's an example:

```javascript
function fetchData(callback) {
    // Simulating an asynchronous operation with setTimeout
    setTimeout(() => {
        const data = 'Some data';
        callback(data); // Calling the callback function with the fetched data
    }, 1000); // Simulating a delay of 1 second
}

function processData(data) {
    console.log('Data received:', data);
}

fetchData(processData); // This line triggers fetchData, passing processData as a callback function
```

Another example:
```javascript
// Function to perform an operation on two numbers
function calculate(num1, num2, operation) {
    return operation(num1, num2);
}

// Callback function to add two numbers
function add(a, b) {
    return a + b;
}

// Callback function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Using the calculate function with different callback functions
console.log(calculate(5, 3, add)); // Output: 8 (5 + 3)
console.log(calculate(5, 3, multiply)); // Output: 15 (5 * 3)
```





