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

```javascript
const add = (a, b) => a + b;

console.log(add(2, 3)); // This will output 5
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






