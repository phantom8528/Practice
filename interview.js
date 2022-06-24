//06-13-22
//---------Revel Systems Interview Questions------------
//FizzBuzz: Given an array of numbers, if a number is divisible by 
//3, print out fizz. If a number is divisible by 5, print out buzz. 
//If the number is divisible by 3 and 5, print out FizzBuzz. 

const { range } = require("express/lib/request");

const sample = [3,6,25,14,16,23.5,90,30,4,8,2];

const fizzBuzz = (input) => {
    for ( i in input){

        if(input[i] % 15 === 0){return 'FizzBuzz'}
        else if (input[i] % 5 === 0){return 'Buzz'}
        else if (input[i] % 3 === 0){return 'Fizz'}
        else{return input[i]}

    }

}
console.log("SOLUTION");
// console.log(fizzBuzz(sample));

//06/14/22
//-------------------

/**
 * Given a number n, for each integer i in the range of from 1 to n
 * inclusive, print one value per line as follows: 
 * -if i is a multiple of both 3 and 5 print "FizzBuzz"
 * -if i is a multiple of 3, print "Fizz"
 * -if i is a multiple of 5, print "Buzz"
 * -if i is NOT a multiple of 3 or 5, print out the value of i
 */

const fizzBuzz2 = (n) => {
    let i = 1;
    while (i <= n){
        // console.log(i);
        if (i % 15 === 0 ){console.log('FizzBuzz')}
        else if (i % 3 === 0){console.log('Fizz')}
        else if (i % 5 === 0){console.log('Buzz')}
        else {console.log(i)}
        i++
    }
    
}

let input2 = 25

// fizzBuzz2(input2);

const rangeTest = (n) => {
    let target = range(1,n);
    for (i in target){
        console.log(i);
    }
}

rangeTest(input2);