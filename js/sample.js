// TODO: Get json from test.json file
// print name,age,gender,balance of all people in the list 

//  TODO: Add a new key in each of the person list


// const people = require('./test_data');


// people.forEach(person => {

//     console.log("____________");

//     for (const key in person) {
//         if (Object.hasOwnProperty.call(person, key)) {
//             const element = person[key];
//             if (key === '_id' || key === 'name' || key === 'balance' || key === 'age' || key === 'gender') {
//                 console.log(`${key} : ${element}`);
//             }
//         }
//     }
// });


// push and pop in array of json objects 

// const people = require('./test_data');

// people.push({ "name": "Emily", "age": 28, "city": "Seattle" });

// console.log(people);
// console.log("____________");

// const removedPerson1 = people.pop();
// const removedPerson2 = people.pop();

// console.log(removedPerson1);
// console.log(removedPerson2);
// console.log("____________");



// console.log(people);



//  adding new key into existing json object
const people = require('./test_data');

people.forEach(person => {
    person['batch'] = 'evening batch';
    console.log(person);
});