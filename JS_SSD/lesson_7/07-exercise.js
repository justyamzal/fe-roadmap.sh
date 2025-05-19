
//* --- 7a ---
// function greet() {
    // console.log('Hello!');
// }
// greet();

//* --- 7b ---
// function greet(name) {
    // console.log(`Hello ${name}!`);
// }

// greet('Simon');

// greet('Alice');

//* --- 7c ---
// function greet(name) {
//     if (!name) {
//         console.log(`Hi There!`);
//     } else {
//         console.log(`Hello ${name}`);
//     }
// }

// greet('Simon');
// greet('Alice');
// greet();

//* --- 7d ---
// function convertToFarenheit(celcius) {
//     return(celcius * 9 / 5) + 32;
// }
// console.log(convertToFarenheit(25));

//* --- 7e ---
// function convertoCelcius(farenheit) {
//     return(farenheit - 32) * 5 / 9;
// }
// console.log(convertoCelcius(86));

//* --- 7f ---

function convertToFarenheit(celcius) {
    return(celcius * 9 / 5) + 32;
}

function converToCelcius(farenheit) {
    return(farenheit - 32) * 5 / 9;
}

function convertTemperature(degrees, unit) {
    if (unit === 'C') {
        const result = convertToFarenheit(degrees);
        return`${result} F`;
    } else if (unit === 'F') {
        const result = converToCelcius(degrees);
        return`${result} C`;
    }
}

// console.log(convertTemperature(25,'C'));
// console.log(convertTemperature(86,'F'));

//* --- 7g ---

// function convertLength(length, from, to) {
//     if (from === 'km' && to === 'miles' ) {
//         return `${length / 1.6} miles`;
//     } else if (from === 'miles' && to === 'km') {
//         return `${length * 1.6} km`;
//         // you cna also do it (from === 'km' && to === 'km') {...} if (from === to) is a trick you can use to save some code.
//     } else if (from === to) {
//         return `${length} ${to}`;
//     }
// }

// console.log(convertLength(50,'miles','km'));
// console.log(convertLength(32,'km','miles'));
// console.log(convertLength(50,'km','km'));


//* --- 7h ---

// function convertLength(length, from, to) {
//     // km -> miles
//     if (from === 'km' && to === 'miles' ) {
//         return `${length / 1.6} ${to}`;
//     // km -> ft
//     } else if (from === 'km' && to === 'ft') {
//         return `${length * 3281} ${to}`;
//     // miles -> km
//     } else if (from === 'miles' && to === 'km') {
//         return `${length * 1.6} ${to}`;
//     // miles -> ft
//     } else if (from === 'miles' && to === 'ft') { 
//         return `${length * 5280} ${to}`;
//     // ft -> km
//     } else if (from === 'ft' && to === 'km') { 
//         return `${length / 3281} ${to}`; 
//     // ft -> miles
//     } else if (from === 'ft' && to === 'miles') { 
//         return `${length / 5280} ${to}`; 

//         // you can also do it (from === 'km' && to === 'km') {...} if (from === to) is a trick you can use to save some code.
//     } else if (from === to) {
//         return `${length} ${to}`;
//     }
// }

// console.log(convertLength(50, 'miles', 'km'));
// console.log(convertLength(32, 'km', 'miles'));
// console.log(convertLength(50, 'km', 'km'));

// console.log(convertLength(5, 'miles', 'km'));
// console.log(convertLength(5, 'miles', 'ft'));
// console.log(convertLength(5, 'km', 'ft'));


//* --- 7i ---
function convertLength(length, from, to) {

    // checking invalid unit
    if (from !== 'km' && from !== 'miles' && from !== 'ft') {
        return `Invalid unit: ${from}`;
    } else if (to !== 'km' && from !== 'miles' && from !== 'ft') {
        return `Invalid unit: ${to}`;
    }

    // km -> miles
    if (from === 'km' && to === 'miles' ) {
        return `${length / 1.6} ${to}`;
    // km -> ft
    } else if (from === 'km' && to === 'ft') {
        return `${length * 3281} ${to}`;
    // miles -> km
    } else if (from === 'miles' && to === 'km') {
        return `${length * 1.6} ${to}`;
    // miles -> ft
    } else if (from === 'miles' && to === 'ft') { 
        return `${length * 5280} ${to}`;
    // ft -> km
    } else if (from === 'ft' && to === 'km') { 
        return `${length / 3281} ${to}`; 
    // ft -> miles
    } else if (from === 'ft' && to === 'miles') { 
        return `${length / 5280} ${to}`; 

        // you can also do it (from === 'km' && to === 'km') {...} if (from === to) is a trick you can use to save some code.
    } else if (from === to) {
        return `${length} ${to}`;
    }
}

// console.log(convertLength(50, 'lbs', 'lbs'));

//* --- 7j ---
//! on the page 07-exercise-7j.html

//* --- 7K ---
//! on the page 07-exercise-7k.html

