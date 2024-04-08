var CARS = [
    {
        "company": "ford",
        "model": "Endevour",
        "owner": "Henry Ford",
        "color": "Black",
        "price": 4500000
    },
    {
        "company": "toyota",
        "model": "fortuner",
        "owner": "George Toyota",
        "color": "Red",
        "price": 6000000
    },
    {
        "company": "BMW",
        "model": "7-series",
        "owner": "Albert BMW",
        "color": "skyblue",
        "price": 7500000

    },
    {
        "company": "Aston Martin",
        "model": "V8 Vantage",
        "owner": "Lucas",
        "color": "skyblue",
        "price": 10000000
    }
];


const myCar = {
    "company": "Aston Martin",
    "model": "V8 Vantage",
    "owner": "Lucas",
    "color": "skyblue",
    "price": 10000000
};



// myCar["owned_by"] = "Harsh Dalwe";
// myCar["color"] = "red";

console.log(myCar);

// CARS.push(myCar);





// console.log(newCarArray);


// CARS.forEach(element => {
//     console.log(element);
// });




// // for loop
// for (let i = 0; i < CARS.length; i++) {

//     console.log(CARS[i]);
// }

// // for-in loop  used for object   -  {}
// for (const i in CARS) {
//     if (Object.hasOwnProperty.call(CARS, i)) {
//         const element = CARS[i];
//         console.log(element);
//     }
// }

// for (const key in car) {
//     if (Object.hasOwnProperty.call(car, key)) {
//         const element = car[key];
//         console.log(element);
//     }
// }


// for-each loop can be used for []   - array
// CARS.forEach(element => {

//     console.log(element);
// });



//    CARS.forEach(element => {

//     for (const key in element) {

//         if (Object.hasOwnProperty.call(element, key)) {
//             const key_value = element[key];
//             console.log(key_value);

//         }
//     }
//    });

// //  for - of loop   used for []      -arrays
//  for (const iterator of CARS) {
//     console.log(iterator);
// }