// TODO: Get json from test.json file
// print name,age,gender,balance of all people in the list 

//  TODO: Add a new key in each of the person list


const people = require('./test_data');

people.forEach(person => {
    console.log("____________");
    for (const key in person) {
        if (Object.hasOwnProperty.call(person, key)) {
            const element = person[key];
            if (key === '_id' || key === 'name' || key === 'balance' || key === 'age' || key === 'gender') {
                console.log(`${key} : ${element}`);
            }
        }
    }
});