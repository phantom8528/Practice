// 06-09-22
//----------------------------------------------------------------------------------------------------------------

/**
*   The variables 'firstInteger', 'firstDecimal', and 'firstString' are declared for you -- do not modify them.
*   Print three lines:
*   1. The sum of 'firstInteger' and the Number representation of 'secondInteger'.
*   2. The sum of 'firstDecimal' and the Number representation of 'secondDecimal'.
*   3. The concatenation of 'firstString' and 'secondString' ('firstString' must be first).
*
*	Parameter(s):
*   secondInteger - The string representation of an integer.
*   secondDecimal - The string representation of a floating-point number.
*   secondString - A string consisting of one or more space-separated words.
**/
function performOperation(secondInteger, secondDecimal, secondString) {
    // Declare a variable named 'firstInteger' and initialize with integer value 4.
    const firstInteger = 4;
    //converting second secondInteger to an int and adding it to firstInteger
    const newSecondInteger = parseInt(secondInteger);
    let firstSum = firstInteger + newSecondInteger
    console.log(firstSum);

    // Declare a variable named 'firstDecimal' and initialize with floating-point value 4.0.
    const firstDecimal = 4.0;
    const newSecondDecimal = parseFloat(secondDecimal);
    let secondSum = newSecondDecimal + firstDecimal;
    console.log(secondSum);
    
    // Declare a variable named 'firstString' and initialize with the string "HackerRank".
    const firstString = 'HackerRank ';
    console.log(firstString.concat(secondString)); //<-- concat method used to combine both strings
    
    // Write code that uses console.log to print the sum of the 'firstInteger' and 'secondInteger' (converted to a Number        type) on a new line.
    
    
    // Write code that uses console.log to print the sum of 'firstDecimal' and 'secondDecimal' (converted to a Number            type) on a new line.
    
    
    // Write code that uses console.log to print the concatenation of 'firstString' and 'secondString' on a new line. The        variable 'firstString' must be printed first.
    
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::Iterating Through a String::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

let testString = "javascript";
let testString2 = 'javascriptloops';

const vowelsAndConsonants2 = (sample) => {
    let vowelsArray = [];
    let consonantsArray = [];
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (s of sample){
        if (vowels.includes(s)){
            vowelsArray.push(s);
            // console.log(sample[s]);
        }else{
            consonantsArray.push(s);
            // console.log(sample[s]);
        }
    }
    // console.log("Here's My Answer !!!!")
    let v = vowelsArray.map((v) => console.log(v));
    let c = consonantsArray.map((c) => console.log(c));

    // console.log(vowelsArray);
    // console.log(consonantsArray);
}

// vowelsAndConsonants2(testString2);

//NOTE: Code refuses to run in hackerrank

//Attempt 2
function vowelsAndConsonants(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let consonants =  [];
    for (let i = 0; i<s.length; i++){
        let index = s[i];
        if(vowels.includes(index)){
            console.log(index)
        }else{
            consonants.push(index)

        }
    }
    let c = consonants.map((i) => console.log(i));
    // console.log(consonants);
}

console.log("Second Attempt");
vowelsAndConsonants(testString2); //<-- Successful, Hackerrank took it

//:::::::::::::::::::::::::::::::::::::::::::::::::::::Regular Expressions:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */

    //1. Declare an array containing all vowels
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    //2. ???
    let re = regex



    
    
    /*
     * Do not remove the return statement
     */
    return re;
}
