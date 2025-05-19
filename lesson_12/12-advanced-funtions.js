
/*
In this lesson:
1. Function are values
2. setTimesout(),setInterval
3. forEach()
4. Arrow functions, .addEventListener()
5. .filter(), ,map()

*/ 



//calling function

//* general functions
/*
advantages:
1. easy to read
2. easy to hoisting, /hoisting : calling function before initialize the function
*/
function greeting() {
    // console.log('hello');
}
greeting();

const function1 = function greeting() {
    // console.log('hello2');
};


//* function anonymous , anonymous functions: function without name 

const function2 = function() {
    // console.log('hello3');
};
function2();


// console.log(function1);
// console.log(typeof function1);



//functions are values; it's just another type of values, we can save it in a variable

//method : is function save inside an object
const object1 = {
    num: 2,
    fun: function() {
        // console.log('hello4');
    }
};

object1.fun();

function display(param) {
    // console.log(param);
}
// display(2);



//! what else can we do with a value : passing a value into a function, we cab also pass a function into a function


function run(param) {
    param();
}

run(function() {
    // console.log('Hellow World');  
    
});

// functions are value also 

//callback : passing a function into another function 


//* setTimeout: allow us to run function in the future ,how long to wait before running this function
setTimeout(function() {
    // console.log('timeout after 3 seconds');
    // console.log('timeout2');
},3000);

// console.log('next line');  

//! Synchronous code : will wait for one line to finish before going to the next line  
/*
advantage: 
- it doesnt block our code for 3 seconds
*/

//* setInterval : running function every time that already decided /initialize (will keep running after certain period of time)
setInterval(function() {
    // console.log('interval');  
},3000);

//it will keep running a function in the future




//Asynchronous code : wont wait for a line to finish before going to the next line

//Arrow Functions : arrow functions have shorcut

//addEventListener() : let us run some code when we interact with the element




//* forEach(): is the preferred way to loop through an array and easy to read
// [
//     'make dinner',
//     'wash dishes',
//     'watch youtube'
// ].forEach(function(value,index){
//     console.log(index);
//     console.log(value);
// });

/*
[
    'make dinner',
    'wash dishes',
    'watch youtube'
].forEach(function(value,index){
    if (value === 'wash dishes') {
        return;
    }
    
    // console.log(index);
    // console.log(value);
});
*/
//! you can use break in the foreach case like these, so prefer use 'if'



const regularFunction = function(param,param2) {
    console.log('hello');
    // return 5;
};
// regularFunction();


const arrowFunction = (param,param2) => {
    console.log('hello2');
    // return 5;
};
// arrowFunction();

const oneParam = param => {
    console.log(param + 1);
};
// oneParam(2);


const oneLine = () => 2 + 3;
// console.log(oneLine());
// oneLine();


[
    'make dinner',
    'wash dishes',
    'watch youtube'
].forEach((value,index) => {
    if (value === 'wash dishes') {
        return;
    }
    
    // console.log(index);
    // console.log(value);
});

//* Filter
/*
1. creates a new array[]
2. return true, => put value in array  
*/
//! filter works same like foreach
// console.log([1,-3,5].filter((value, index) => { 
    
    // if(value >= 0) {
        // return true;
    // } else {
        // return false;
    // }
    // return value >= 0;
// }));

//* Map
// console.log([1, 1, 3].map((value ) => {
    // return value * 2;
// }));

// console.log([1, 1, 3].map(value => value * 2));




/*
* Perbedaan filter() dengan map() dan forEach():
*- filter() :
1. Menghasilkan array baru yang hanya berisi elemen-elemen yang memenuhi kondisi.
2. Tidak mengubah array asli.

*-map() :
1. Menghasilkan array baru dengan transformasi elemen-elemen.
2. Selalu mengembalikan array dengan panjang yang sama dengan array asli.

*-forEach() :
1. Tidak menghasilkan array baru.
2. Digunakan untuk menjalankan fungsi pada setiap elemen tanpa mengembalikan nilai.
*/


//! Case Code

/*
* Case Study: Data Karyawan
*/ 

const employees = [
    { name: "Alice", department: "HR", salary: 5000 },
    { name: "Bob", department: "IT", salary: 8000 },
    { name: "Charlie", department: "IT", salary: 7500 },
    { name: "David", department: "Finance", salary: 6000 },
];

//! 1.Filter -> ambil hanya data dari departemen IT
const itEmployees = employees.filter(emp => emp.department === 'IT');
// console.log(itEmployees);

//! 2. map -> ambil hanya nama karyawan saja
const names = employees.map(emp => emp.name);
// console.log(names);

//! 3. forEach() -> tampilkan gaji masing-masing karyawan
employees.forEach(emp => {
    // console.log(`${emp.name} earn $${emp.salary}`);
});


/*
🔄 Perbandingan Singkat

Method	    Return Value	            Bisa digunakan untuk	    Modifikasi data?	Cocok untuk
-----------------------------------------------------------------------------------------------------------------
filter()	Array baru (filtered)	    Menyaring elemen	            Tidak	        Validasi / Search
map()	    Array baru (transformed)	Mengubah isi elemen	            Tidak	        Transformasi data
forEach()	undefined (no return)	    Menjalankan proses per elemen	Tidak	        Side effects (log, update luar)

*/

