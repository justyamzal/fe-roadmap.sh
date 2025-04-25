//  in this lesson :
// 1. Arrays = list of values
// 2. loops (while loop, for loop)
// 3. accumulator pattern
// 4. created a todo list project
// 5. arrays are references, destructing

const myArray = [
    10,
    20,
    30
];

//*--- print array ---//
// console.log(myArray);
// console.log(myArray[1]);

//*--- changing ---// 
// myArray[0] = 99;
// console.log(myArray);

[1, 'hello', true, {name:'socks'},[1,2]];
// console.log(typeof[1,2]); //Output: object
// console.log(Array.isArray([1,2])); //Output: true
// console.log(myArray.length); //Output: 3

//* --- Pushing new array value --- //
// myArray.push(100);
// console.log(myArray);


// myArray.splice(0,1);
// console.log(myArray);


//*--- While loop ---//
// let i = 1;

// while(i <= 5) {
//     console.log(i);
//     i++;
// }

//*--- For loop ----//
// for (let i = 1; i <=6; i++) {
    // console.log(i);
// }

let randomNumber = 0;
while (randomNumber < 0.5) {
    randomNumber = Math.random();
}

// console.log(randomNumber);


const toDoList = [
    'make dinner',
    'wash dishes',
    'watch youtube'
];

for (let i = 0; i < toDoList; i++) {
    const value = toDoList[index];
    console.log(value);
}

//---- counting amount total array ---// 

const nums = [1, 1, 3];
let total = 0;

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    total += num;
}
// console.log(total);


//--- Counting multiply with array ---//
const numsDoubled = [];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    numsDoubled.push(num * 2);
}
// console.log(numsDoubled);

//--- Pushing 
const array1 = [1,2,3];
const array2 = array1.slice();
array2.push(4);
// console.log(array1);
// console.log(array2);


const [firstValue, secondValue] = [1, 2, 3];

//--- Exception for 3 and stopping at 8 --- //
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0)  {
        // continue;
    }
    // console.log(i);
    if (i === 8) {
        // break;
    }
}


let i = 1;
// --- Exception for multiples 3
while (i <= 10) {
    if (i % 3 === 0) {
        i++;
        continue;
    }
    // console.log(i);
    i++;
}

//--- Array multiply times *2 
function doubleArray(nums) {
    const numsDoubled = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(num === 0) {
            return numsDoubled;
        }
        numsDoubled.push(num * 2);
    }
    return numsDoubled;
}

// console.log(doubleArray([1, 1, 3]));
// console.log(doubleArray([2, 2, 5, 0, 5]));




