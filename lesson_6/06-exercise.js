// ----- Lesson 6 Exercise - Booleans and If-statement

//* 6a.
const hour = '9';

//* 6b.
let name = 'Alex';

//* 6c.
if (hour >= 6 && hour <= 12 ) {
    // console.log(`Good Morning ${name}`);
} else if (hour >= 13 && hour <= 17) {
    // console.log(`Good Afternoon ${name}`);
} else {
    // console.log(`Good Night ${name}`);
}

//* 6d.
const age = 5;

if(age <= 6 || age >= 65) {
    // console.log('Discount');
} else {
    // console.log('No Discount');
}

//* 6e
const age_ = 5;
const isHoliday = true;

      // && has a higher priority than || so for
      // this to work correctly, we need to add
      // brackets () around the || check to make
      // sure that it gets done first.

    if(!isHoliday && (age_ <= 6 || age_ >= 65)) {
        // console.log('Discount');
    } else {
        // console.log('No Discount');
    }


//----- Flip Coin Game -----// 

//* 6f
// const RandomNumber =  Math.random();
// let result;

//* 6h
// if (RandomNumber < 0.5) {
    // result = 'heads';
// } else {
    // result = 'tails';
// }

// console.log(`The coin is`,result);

// const guess = 'heads';
// if(guess === result ) {
    // console.log(`You guess is ${guess} and it is "CORRECT", You win!`);
// } else {
    // console.log(`You guess is ${guess} and it is "WRONG", You Lose!`);
// }

//* 6j
const randomNumber = Math.random();
const result = randomNumber < 0.5 ? 'heads':'tails';

const guess = 'heads';
console.log(`You pick ${guess} coin and the coin is ${result}`);
console.log(guess === result? 'You Win' : 'You lose');

//* 6k
//! see at the 06-cart-quantity.html 
//* 6l
//! see at the 06-cart-quantity.html






