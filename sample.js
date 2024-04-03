const math = {
    add: (a, b) => {
        // console.log(a + b);
        return (a + b);
    },
    sub: (a, b) => {
        // console.log(a - b);
        return (a - b);
    },
    multiply: (a, b) => {
        // console.log(a * b);
        return (a * b);
    },
    remender: (a, b) => {
        // console.log(a % b);
        return (a % b);
    },
    devide: (a, b) => {
        // console.log(a / b);
        return (a / b);
    }
};

function executeAll(obj, a, b) {
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            console.log(`${key}: ${obj[key](a, b)}`);
        }
    }
}

const a = 5;
const b = 15;
executeAll(math, a, b);