//----- 11a. -----//
let nums = [10,20,30];
nums[2] = 99;

// console.log(nums);


//----- 11b. -----//

// 1. Fungsi getLastValue
function getLastValue(array) {
    const lastIndex = array.length - 1;
    return array[lastIndex]; // showing value of array
}

// 2. Pemanggilan Fungsi
// console.log(getLastValue([1, 20, 22, 24, 5]));
// console.log(getLastValue(['hi','hello','hey']));


/*
- Definisi Fungsi:
Fungsi ini didefinisikan dengan nama getLastValue dan menerima satu parameter, yaitu array. Parameter ini diharapkan berupa array (bisa berisi angka, string, atau tipe data lainnya).
*/ 

/*
- Variabel lastIndex:
    > const lastIndex = array.length - 1;
        1. array.length mengembalikan jumlah elemen dalam array.
        2. Karena indeks array dimulai dari 0, maka indeks elemen terakhir adalah array.length - 1.
        Misalnya:
        Jika array = [1, 20, 22, 24, 5], maka array.length adalah 5, sehingga lastIndex = 5 - 1 = 4.
- Mengakses Elemen Terakhir:
    1. return array[lastIndex];
    2. Menggunakan indeks lastIndex untuk mengakses elemen terakhir dari array.
        Contoh:
        Jika array = [1, 20, 22, 24, 5], maka array[4] adalah 5.
*/

//----- 11c. -----//
function arraySwap(array) { 
    const lastIndex = array.length - 1;  // 5 array start from 0,  [1 => 0, 20 => 1, 22 => 2, 24 => 3, 5 => 4] , lastindex = 5
        // We need to save the values first before swapping. Otherwise, if we swap directly, - we would lose one of the values.
    const lastValue = array[lastIndex]; // declare if the lastValue is same about lastIndex
    // console.log(lastIndex);  
    const firstValue = array[0]; //declare that firstvalue is first index which is 1

    array[0] = lastValue; //declare for changing index 0 become to the last index
    array[lastIndex] = firstValue; //and last index becoming first index
 
    return array;
    
}


// console.log(arraySwap([1,20,22,24,5]));
// console.log(arraySwap(['hi','hello','hey']));

//----- 11d. -----//
//! counts up from 0 to 10 but counts up by 2 (0,2,4,6,7,8,10....)
function countsUp() {
    for (let i = 0; i <= 10; i+=2) {
        console.log(i);
    }
}
// countsUp();

//----- 11e. -----//
//! create a for loop that counts down from 5 to 0
function countsDown() {
    for (let i = 5; i >= 0; i--){
        console.log(i);
    }
}
// countsDown();


//----- 11f. -----//
//! do exercises 11d and 11e, using while loops
function countsUpF(){
    let i = 0;

    while(i <= 20 ) {
        console.log(i);
        i += 2;
    }
}

// countsUpF();

function countsDownF(){
    let i = 5;
    
    while(i >= 0) {
        console.log(i);
        i--;
    }
}

// countsDownF();



//----- 11g. -----//
//! create a loop takes an array of numbers and creates a new array where each numer is increased by 1, [1,2,3] => [2,3,4]



//----- 11h. -----//
//! create a function addOne(array) that takes an array of numbers and returns an array where each number is increased by 1
//addOne([1,2,3]) => [2,3,4]
//addOne([-2,-1,0,99] => [-1,0,100])

function addOne(array) {

    let result = [];

    for(let i = 0; i < array.length; i++ ) {
        result.push(array[i] + 1);
    }
    return result;
}
// console.log(addOne([1, 2, 3]));
// console.log(addOne([-2, -1, 0, 99]));


//----- 11i. -----//
//! create a function addNum(array, num) that takes an array of nmbers and return an array where each number is increased by 'num'.
//! addNum([1,2,3],2) => [3,4,5]
//! addNum([1,2,3],3) => [4,5,6]
//! addNum([-2,-1,0,99],2) => [0,1,2,10]


function addNum(array, num) {
    const result = []; // as a place to store result then must be empty

    for(let i = 0; i < array.length; i++) {
        result.push(array[i] + num);
    }
    return result;
}
// console.log(addNum([1,2,3],2)); //! Output : [ 3, 4, 5 ]
// console.log(addNum([1, 2, 3], 3)); //! Output : [ 4, 5, 6 ]
// console.log(addNum([-2, -1, 0, 99], 2)); //! Output : [ 0, 1, 2, 101 ]


//----- 11j. -----//
//! create a function addArrays(array1,array2) that takes 2 arrays of numbers and adds each number in the arrays together
//! addArrays([1,1,2],[1,1,3] => [2,2,5]) 
//! addArrays([1,2,3],[4,5,6] => [5,7,9]) 

function addArrays(array1,array2){
    const result = [];
    
    for(let i = 0; i < array1.length && array2.length; i++) {
        result.push(array1[i] + array2[i]);
    }
    return result;
}
// console.log(addArrays([1,1,2],[1,1,3])); //! Output : [ 2, 2, 5 ]
// console.log(addArrays([1,2,3],[4,5,6])); //! Output : [ 5, 7, 9 ]

//----- 11k. -----//
//! create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than 0
//! countPositive([1,-3,5]) => 2 
//! countPositive([-2,3,-5,7,10]) => 3

function countPositive(nums) {
    // const result = [];
    let result = 0;

    for(let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result++;
        }
    }
    return result;
}
// console.log(countPositive([1, -3, 5])); //! Output: 2
// console.log(countPositive([-2, 3, -5, 7, 10])); //! Output: 3

//----- 11L. -----//
//! create a function minMax(nums) that takes an array of numbers and return an object with the minimum and maximum numbers in the array(do this using a loop instead of using something like Math.min)
//! minMax([1, -3, 5]) => {min: -3, max: 5}
//! minMax([-2, 3, -5, 7, 10]) => {min:-5,max:10}

function minMax(nums) {
        // We'll set the starting values of min and max
        // as the first value in the array. (This is
        // just one way to set the starting values. You
        // can use another way if you like.)

        const result = {
            min: nums[0],
            max: nums[0]
        };

        for (let i = 0; i < nums.length; i++) {
            const value = nums[i];
            // If the value is less than the min, // update the min.
            if (value < result.min) {
                result.min = value;
            }
            // If the value is greater than the max, update the max.
            if (value > result.max) {
                result.max = value;
            }
        }

    return result;        
}
    // console.log(minMax([1, -3, 5])); //! Output : { min: -3, max: 5 }
    // console.log(minMax([-2, 3, -5, 7, 10])); //! Output : { min: -5, max: 10 }


//----- 11m. -----//
//! Update exercise 11L to also handle these cases:
//! - minMax([]) => {min: null, max: null}
//! - minMax([3]) => {min:3, max:3}


function min_Max(nums){
    // We'll set the starting values of min and max
    // to null this time.
    const result = {
        min:null,
        max:null
    }

    for (let i = 0; i < nums.length; i++) {
        const value = nums;
        // If the min is null OR the value is less than the min, update the min.
        if (result.min === null || value < result.min) {
            result.min = value;
        }
        // If the max is null OR the value is greater than the max, update the max.
        if (result.max === null || value > result.max) {
            result.max = value;
        }
    }
    return result;
    // We have to use 2 if-statements above instead of an if-else statement. This makes sure both the min and max are set if they are null.
}

// console.log(min_Max([1, -3, 5]));
// console.log(min_Max([-2, 3, -5, 7, 10]));

// console.log(min_Max([])); //!{ min: null, max: null }
// console.log(min_Max([3])); //!{ min: [ 3 ], max: [ 3 ] }


//----- 11n. -----//
//! create a function countWords that takes an array of string and returns an object with how many times each string appeared. 
//! - countWords(['apple', 'grape', 'apple', 'apple']) => {apple:3, grape:1}
//! (hint: you can access a property using a variable: object[variable]; this uses the value inside the variable as the property name)

function countWords(words){
    const result = {}; //Objek result akan digunakan untuk menyimpan hasil perhitungan jumlah kata.

    for(let i = 0; i < words.length; i++) {     //Kode melakukan iterasi pada setiap elemen array words menggunakan for loop.
        const word = words[i];
        
        // result[word] adds/accesses a property using whatever is saved inside the 'word' variable.
        // If word = 'apple', result[word] will do result['apple']
        // If word = 'grape', result[word] will do result['grape']

        if(!result[word]) {
        result[word] = 1;
        } else {    
            result[word]++;
        }
        //Jika kata belum ada di objek result (misalnya result['apple'] bernilai undefined), maka kata tersebut ditambahkan ke objek dengan nilai awal 1.
        //Jika kata sudah ada , nilai hitungan kata tersebut ditambah 1.
    }
    return result;
    //Setelah semua elemen array diproses, objek result berisi jumlah kemunculan setiap kata dan dikembalikan sebagai hasil fungsi.
}

// console.log(countWords(['apple', 'grape', 'apple', 'apple'])); //{ apple: 3, grape: 1 }

//----- 11o. -----// 
//! Create an array of strings, loops over the array and check if the string 'search' is inside the array. if it is, console() the index of 'search' in the array. if not, console.log  '-1'
//! ['hello','world','search','good'] => console.log(2)
//! ['not','found'] => console.log(-1)

let words = ['hello', 'world', 'search', 'good'];
      // Set the index to -1 at the start (so we'll assume the string 'search' doesn't exist in the array). If we find the string 'search' in the array, we will update the index.
let index = -1;
for (let i = 0; i < words.length; i++) {
    if (words[i] === 'search') {
        index = i;
    }
}
// console.log(index); //! Output: 2 , the result is on the index 2


words = ['not', 'found'];

index = -1;
for(let i = 0; i < words.length; i++) {
    if(words[i] === 'search') {
        index = i;
    }
}

// console.log(index); //! Output: -1, the result is 'none'



//----- 11p. -----// 
//! modify 11o so that if 'search' appears multiple times in the array, it will console.log() the index of the first appearance of 'search'. use break; ['hello','good','search'] => console.log(2)

let wordsP = ['hello','good','search'];
let indexP = -1;

for(let i = 0; i < wordsP.length; i++) {
    if (wordsP[i] === 'search') {
        indexP = i;
        // Once we find 'search', immediately exit
        // the loop since we want the index of the
        // first appearance of 'search'.
        break;
    }
}

// console.log(indexP); //! Output : 2

wordsP = ['not','found'];
indexP = -1;

for(let i = 0; i < wordsP.length; i++) {
    if(wordsP[i] === 'search'){
        indexP = i;
        break;
    }
}
// console.log(indexP); //! Output : -1

//----- 11q. -----// 
//! Create a function findIndex(array, word) that searches an array for a string (in the 'word' parameter) and return the index of the first appearance of the string. if doesn't exist in the array, return -1. 
//! -  FindIndex(['green','red','blue','red'],'red') => 1
//! - FindIndex(['green', 'red', 'blue', 'red'], 'yellow') => -1

function findIndex(array, word) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === word) {
        //Instead of creating an accumulator
        // variable and updating it in the loop,
        // we can just return i directly, when
        // we find it since this is a function.
        return i;
        }
        
        // If the function has not returned by now,
        // logically that means the word must not
        // exist in the array, so we'll return -1.
    }
    return -1;
}

// console.log(findIndex(['green','red','blue','red'],'red')); //! Output : 1
// console.log(findIndex(['green', 'red', 'blue', 'red'], 'yellow')); //! Output : -1


//----- 11r. -----//
//! Create a function removeEgg(food) that takes an array of string and return an array where the string 'egg' is removed. (Hint: loop through the array and check if each string is 'egg', add it to the result).
//! - removeEgg('egg','apple','egg','egg','ham') => ['apple','ham']

function removeEgg(foods) {
    const result = [];

    for (let i = 0; i < foods.length; i++) {
    // If the string is 'egg', use continue to skip it.
    if (foods[i] === 'egg') {
        continue;
        }
        // We don't need to have an else here because
        // the only way to reach this code is if the 
        // if-statement above is false.
        result.push(foods[i]);
    }
    return result;
}

// console.log(removeEgg(['egg','apple','egg','egg','ham']));

//----- 11s. -----//
//! Update exercise 11r (remove) to only the first 2 eggs from the array. 
//! removeEgg(['egg','apple','egg','ham') => ['apple','egg','ham']
function removeEgg2(foods) {
    const result = [];
    let eggsRemoved = 0;

    for(let i = 0; i < foods.length; i++) {
        // Only skip 'egg' if we removed less than 2 of them so far.
        if(foods[i] === 'egg' && eggsRemoved < 2) {
            // Update the number of 'egg' we have removed.
            // This must be done before continue, otherwise, doing continue first will just skip this code.
            eggsRemoved++;
            continue;
        }
        result.push(foods[i]);
    }
    return result;

}
// console.log(removeEgg2(['egg','apple','egg','egg','ham']));



//----- 11t. -----//
//! Arrays have a method called .reverse() which reverses the order of the values in the array. using .reverse(), update exercise 11s to only remove the last 2 eggs from the array
//! - removeEgg(['egg','apple','egg','egg','ham']) => ['egg','apple','ham']

function removeEgg3(foods) {
    //To remove the last 2 'egg', reverse the array first
    const reversedFoods = foods.reverse();
    const result = [];
    let eggsRemoved = 0;

    for(let i = 0; i < reversedFoods.length; i++) {
        if(reversedFoods[i] == 'egg' && eggsRemoved < 2 ) {
            eggsRemoved++;
            continue;
        }

        result.push(reversedFoods[i]);
    }
    
    // At the end, remember to .reverse() back the result.
    return result.reverse();
}

// console.log(removeEgg3(['egg','apple','egg','egg','ham'])); //! Output : [ 'egg', 'apple', 'ham' ]

//----- 11u. -----//
//! in exercise 11t, one problem with .revers() is that it doesn't create a copy of the array it is reversing. it modifies the original array. update the code so the function doesnt not modify the orginall array. (hint: use .slice() method to create a copy of an array values)
/*
! - const foods = ['egg','apple','egg','egg','ham'];
! - console.log(removeEgg(foods)) => ['egg','apple','ham']
! - console.log(foods) => ['egg','apple','egg','egg','ham'] 
*/

//----- 11v. -----//
/*
! we'll do the famous FizBuzz problem. create a loop that display 1 to 20 in the console. if the number is divisible by 3, display "Fizz" instead of the number. if it's divisible by 5, display 'Buzz' instead. if it's divisible by 3 and 5, display "FizzBuzz" instead. (reminder: divisible by 3 means num %3 === 0)
! 1,2, Fizz, 4, Buzz, Fizz, 7, 8....13, 14, Fizzbuzz, 16, 17...
*/



//----- 11w. -----//
/*
! create a copy of exercise 11q, where we created findIndex(). below it, return an array where each string only appears once (there are no duplicates). try  to use findIndex() function in your solution
! - unique(['green','red','blue',red]) => ['green', 'red', 'blue']
! - unique(['red','green','green','red']) => ['red','green']
*/

//----- 11x. -----//
/*
! Create 3 files 11x.html, 11.css and 11.js and copy the code for the Todo List project into these files.
! - Update the <link> and <script> elements to load 11x.css and 11x.js 
! - Update the todolist to use localStorage (if we modify the todo list and refresh the page, the todo list should stay the same)
! - hint: remember that localStorage only supports strings. You can use JSON.stringify() to conver an array to a string

*/

//----- 11t. -----//

//----- 11t. -----//

 