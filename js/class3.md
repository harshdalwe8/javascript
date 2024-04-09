# Introduction to Object-Oriented Programming (OOP)

# Object-Oriented Programming (OOP)
Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data in the form of fields (attributes or properties) and code in the form of procedures (methods or functions). OOP aims to organize code in a more modular and reusable way.

## Four Pillars of OOP:
### 1. Encapsulation: Bundling data and methods that operate on the data within a single unit (object).
### 2. Inheritance: Mechanism for creating new classes (subclasses) based on existing classes (superclasses).
### 3. Polymorphism: Ability for objects of different classes to be treated as objects of a common superclass.
### 4. Abstraction: Conceptualizing complex systems by focusing on high-level operations and hiding implementation details.

# Classes and Objects
In JavaScript, classes and objects are fundamental concepts used to implement OOP principles.

## Classes
A class is a blueprint for creating objects with predefined properties and methods. It serves as a template for creating multiple objects with similar characteristics.

## Objects
An object is an instance of a class. It represents a unique entity with its own set of properties and methods.

Example:
```javascript

// Define a class named 'Car'
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    // Method to display information about the car
    displayInfo() {
        console.log(`Make: ${this.make}, Model: ${this.model}`);
    }
}

// Create an object of the 'Car' class
const myCar = new Car('Toyota', 'Camry');

// Call the displayInfo() method on the object
myCar.displayInfo(); // Output: Make: Toyota, Model: Camry
```
In this example, we defined a class Car with properties make and model, and a method displayInfo() to display information about the car. Then, we created an object myCar of the Car class and called the displayInfo() method on it.

