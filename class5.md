# Loops in JavaScript
## Introduction to Loops
In JavaScript, loops are used to execute a block of code repeatedly until a certain condition is met. There are different types of loops available in JavaScript, including for, while, and do-while loops.

Example:
```javascript

// Using a for loop to print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```
### The for Loop
The for loop is used when you know how many times you want to execute the code. It consists of three parts: initialization, condition, and iteration.

Syntax:
```javascript

for (initialization; condition; iteration) {
    // code to be executed
}
```
Example:
```javascript

// Using a for loop to print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```
### The while Loop
The while loop is used when you want to execute the code block as long as a condition is true. It only has a condition part.

Syntax:
```javascript

while (condition) {
    // code to be executed
}
```
Example:
```javascript

// Using a while loop to print numbers from 1 to 5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
```
### The do-while Loop
The do-while loop is similar to the while loop, but it will always execute the code block at least once, even if the condition is false.

Syntax:
```javascript

do {
    // code to be executed
} while (condition);
```
Example:
```javascript

// Using a do-while loop to print numbers from 1 to 5
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
```