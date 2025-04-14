        // ----- Comparison Operators of boolean ----- //
        /*
        > , Greater Than
        < , Less than
        >= , Greater than or equal to
        <= , Less than or equal to
        ====, equal to  , == (dont use this to avoid conversion behaviour) 
        !==, not equal to, != (dont use this to avoid conversion behaviour)
        */

const { or } = require("mathjs");


        // console.log(3 > 5 - 5);
        // console.log(5 === '5.00');

        if(true) {
            // console.log('hello');
        } else {
            // console.log('else');
        }

        if(false) {
            // console.log('hello');
        } else {
            // console.log('else');
        }

        // if(15 >= 16) {
        //     console.log('You can drive');
        // } else if (15 >= 14) {
        //     console.log('Almost there!');
        // } else {
        //     console.log('You can not drive');
        // }

        const age = 15;

        if (age >= 16) {
            // console.log('You can drive');
        } else if (age >= 14 ) {
            // console.log('Almost there!');
        } else {
            // console.log('You can not drive');
        }


        //----- OR Operators ----- //
        // console.log(true || false);
        // console.log(!false);
        
        //----- AND Operators ----- //
        // console.log(0.2 >= 0 &&  0.2 < 1/3);

        //* --- Truthy ---
        // it behaves just like true ()


        const cartQuantity = 5;
        if(cartQuantity) {
            // console.log('cart has Products');
        }

        //* --- Falsy ---
        // it behaves just like false
        // false 0 '' NaN  undefined null (Any value not on this list is truthy)
        if(0) {
            // console.log('truthy');
        } else {
            // console.log('falsy');
        }


        //----- Ternary Operators -----// (shorcut of if else statement)
        const result = 0 ? 'truthy' : 'falsy';
        // console.log(result);

        const currency_ = 'EURO' || 'USD'; // T || T
        const currency = undefined || 'USD'; // F || T

        // console.log(currency_); //! there are two true, but it will get auto select for the left side first
        // console.log(currency);