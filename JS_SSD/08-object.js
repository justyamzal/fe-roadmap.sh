const { prod } = require("mathjs");

//------ Objects ----- //
const product = {
    name: 'socks',
    price: 1090
};
//! Accessing Property
// console.log(product);
// console.log(product.name);
// console.log(product.price);

//changing value of product
product.name = 'cotton socks';
// console.log(product);

product.newProperty = true;
// console.log(product);

delete product.newProperty;
// console.log(product);


//Bracket Notation : let us use properties that don't work with dot notation
// which one should we use. bracket notation or dot notation?  we usually use dot notation by default because it's shorter and easier to read but if we need to use properties that dont world use bracket notation

const product2 = {
    name: 'shirt',
    'delivery-time': '1 day',
    rating: {
        stars: 4.5,
        count: 87
    },
    fun: function function1() {     //function inside object = method
        console.log('function inside object');
    }
};  

// console.log(product2);

// console.log(product2.name);
// console.log(product2.name);
// console.log(product2['name']);
// console.log(product2['delivery-time']);

// console.log(product2.rating.count);
// product2.fun();

//!Built-in objects : math.random or console.log are know as built-in object bcs they are provided by languange, and other built-in object is JSON, localStorage
    //JSON : Javasscript Object Notation, similliar with javascript obj but has a has less feature but more universal
    //We use JSON : - when we send data between computers, when we store data

// console.log(typeof console.log);
// console.log(JSON.stringify(product2));
 
//! changing to string
// const jsonString = JSON.stringify(product2); 
//! changing to json object
// console.log(JSON.parse(jsonString));


const  object1 = {
    message: 'hello',
};

const object2 = object1;

object1.message = 'Good object!';
console.log(object1);
console.log(object2);

const object3 = {
    message: 'Good Job!'
};

console.log(object3 === object1);
console.log(object1 === object2);  /* why this true and above is false? it's because object 1 and 2 is same reference, and the object 3 have some other references not the values inside */

const object4 = {
    message: 'Good job!',
    price: 799
};

const {message, price} = object4;
console.log(message);
console.log(price);

const object5 = {
    message,
    // method: function function1() {
    //     console.log(method);
    // }
    method() {
        console.log('method');
    }
};
// console.log(object5);
object5.method();  //Shorthand





/*
In this lesson :
1. Objects = group related values together
2. added a score to rock,paper,scissors
3. built-in objects (JSON, local storage)
4. more details (null, auto-boxingm references)
5. shorcuts (destructing, shorthand property, shorthand method)

*/










