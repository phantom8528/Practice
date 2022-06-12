//06-11-22
//--------------------------------------

/**
 * Given two non-empty arrays of integers, write a function that determines
 * whether the second array is a sub-sequence of the first one
 * 
 * Sample Input:
 * ------------------
 * array = [5,1,22,25,6,-1,8,10]
 * sequence = [1,6,-1,10]
 * 
 * Sample Output:
 * -------------------
 * true
 */

const array = [5,1,22,25,6,-1,8,10]
const sequence = [1,6,-1,10]

function isValidSubsequnce(array1, array2){
    let subSequence = [];
    for (let i=0; i<array2.length; i++){

        let index = array2[i];
        if(array1.includes(index)){
            subSequence.push(index);
            //compare length of subSequence to array2
            if(subSequence.length === array2.length){
                console.log("Length of Sub-Sequence: ", subSequence.length);
                console.log("Length of Array 2: ", array2.length)
                break;
            }
        }
    }

    if(subSequence.length === array2.length){
        // console.log(true);
        return true;
    }else{
        // console.log(false);
        return false
    }

}

// console.log("My Solution");
// console.log(isValidSubsequnce(array, sequence));
//SOLUTION FAILED ON OF THEIR TEST CASES

//--------ALGOEXPERT'S SOLUTION---------------
function isValidSubsequnce2(array1, array2){
    let arrIdx = 0;
    let seqIdx = 0;
    while (arrIdx < array1.length && seqIdx < array2.length){
        //while loop operation 1
        if(array1[arrIdx] === array2[seqIdx]){
            seqIdx++;
        }
        //while loop operation 2
        arrIdx++
    }
    return seqIdx === array2.length;

}
// console.log("AlgoExpert's Solution 1");
// console.log(isValidSubsequnce2(array, sequence));
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/**
 * Write a function that takes in a non-empty array of distinct integers
 * and an integer representing a target sum . If any two numbers in the input 
 * array sum up to the target sum, the function should return them in an array, in any order
 * If no two numbers sum up to the target sum, the function should return an empty array.
 * 
 * NOTE: that the target sum has to be obtained by summing two different integers
 * in the array; you can't add a single integer in order to obtain the target
 * sum
 * 
 * You can assume that there will be at most one pair of numbers summing up to the target sum
 * 
 */

//1. provide a sample input 
const array1 = [3,5,-4,8,11,1,-1,6];
const targetSum1 = 10;

//Sample Output: [-1, 11];

//2. function that takes in a non-empty array
const twoNumberSum = (array, targetSum) => {
    //3. make sure that the array isn't' empty
    let index1 = 0;
    let index2 = 1;
    if (array.length === 0){
        return false;
    }else{
        for (i in array){
            array[index1] + array[index2];
        }
    }

}

// console.log(`
// My Solution (Two Number Sum):
// __________________________________
// `);

// twoNumberSum(array1, targetSum1);
// console.log(twoNumberSum(array1, targetSum1))

//--------ALGOEXPERT'S SOLUTION---------------
//1. sort the array in O(N) time

//2. initialize left pointer to first item in the array

//3. initialize right pointer for last number in the array

//4. add left pointer and right pointer together 

//5. compare the sum to the target sum
/**
 * if sum is greater than the target sum, move the right pointer.
 * if sum is less than the target sum, move the left pointer
 */

//NOTE: You don't use additional space, you use constant space 

const twoNumberSum2 = (targetArray, targetSum) => {
    let left = 0; //<--targets the first item in the array
    let right = targetArray.length-1;//<-- targets the last item in the array

    while(left < right){
        const currentSum = targetArray[left] + targetArray[right];

        if(currentSum === targetSum){
            return [targetArray[left], targetArray[right]];
        }else if (currentSum > targetSum){
            right--;
        } else if (currentSum < targetSum){
            left++
        }
    }
    return [];

}


//---REPETITION---
const twoNumberSum3 = (array, target) =>{
    //1. sort the array
    array.sort((a,b) => a-b);
    //2. declare a left pointer 
    let left = 0;
    //3. declare a right pointer, to target the last item in the array
    let right = array.length - 1;
    //4. loop through the array 
    while (left < right){
        //5. add the first position in the array to the last position in the array
        let sum = array[left] + array[right];

        //6. compare the sum to the target
        if (sum === target){
            return [array[left], array[right]]; //if yes, return the two items in the array that add up to the target
        }else if(sum < target){
            left++; //7. if the sum is less that the target, move the left pointer 
        }else if(sum > target){
            right--;//8. if the sum is greater than the target, move the right pointer
        }
    }
    return [] //9. if there are no numbers inside of the array that add up to the given target, return an empty array

}

//--REPETITION--

const twoNumberSum4 =  (array, target) => {
    //1. sort the array
    array.sort((a,b) => a-b);
    //2. assign left pointer to the first position in the array
    let left = 0;
    //3. assign right pointer to the last position in the array
    let right = array.length-1;
    //4. use a while loop to iterate through the array
    while (left < right){
        //5. add the first item in the array to the last item in the array
        let currentSum = array[left] + array[right];
        //6. compare currentSum to the target
        if (currentSum === target){
            return [array[left], array[right]];//7. if the sum is equal to the target, return an array with the two numbers
        }else if(currentSum < target){
            left++; //8. if the currentSum is smaller, move the left pointer
        }else if(currentSum > target){
            right--;//9. if the currentSum is greater move the right pointer
        }
    }
    return [];//10. if no numbers are found that equal to the target, return an empty array

}

let input1 = [3,5,-4,8,11,1,-1,6]
let input2 = 10;

console.log(twoNumberSum4(input1, input2));
//returns: [11, -1]
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/**
 * Validate Subsequence
 * -----------------------------------------
 * Given two non-empty arrays of integers, write a function that determines
 * whether the second array is a sub-sequence of the first one
 * 
 * Sample Input:
 * ------------------
 * array = [5,1,22,25,6,-1,8,10]
 * sequence = [1,6,-1,10]
 * 
 * Sample Output:
 * -------------------
 * true
 * ----------------------------------------------
 * note: you have to traverse both arrays
 * note: sequence cares about order
 */

//plan:

//1. initialize a pointer underneath the first item of sequence array
//2. initialize a pointer underneath the second item of the main array
//use while loop to traverse through both arrays in tandem
//3. compare the main array item to the sequence array item. 
//3a. if they're equal, ...., then move pointer to the next item in the sequence array
//3b. if they're not equal, move the main item array
//4. if the sequence array pointer moves beyond the bounds of the array, it means that the sub-sequence has been found

const isValidSubsequnce3 = (main, sequence) => {
    let mainIndex = 0;
    let sequenceIndex = 0;

    while(mainIndex < main.length && sequenceIndex < sequence.length){
        if(main[mainIndex] === sequence[sequenceIndex]){
            sequenceIndex++;
        }
        mainIndex++
    }
    return sequenceIndex === sequence.length;
}

//--REPETITION--

const isValidSubsequnce4 = (main, sequence) => {
    let mainIdx = 0;
    let seqIdx = 0;

    while(mainIdx < main.length && seqIdx < sequence.length){
        if(main[mainIdx] === sequence[seqIdx]){
            seqIdx++
        }
        mainIdx++
    }
    return seqIdx === sequence.length;
}

//--REPETITION--

const isValidSubsequnce5 = (main, sequence) => {
    let index1 = 0;
    let index2 = 0;

    while (index1 < main.length && index2 < sequence.length){
        if(main[index1] === sequence[index2]){
            index2++
        }
        index1++
    }
    return index2 === sequence.length;

}


const param1 = [5,1,22,25,6,-1,8,10];
const param2 = [1,6,-1,10];

console.log(isValidSubsequnce5(param1, param2));

//POP QUIZ - Two Number Sum

const twoNumberSum5 = (array, target) => {
    array.sort((a,b) => a-b);
    let left = 0;
    let right = array.length-1;
    let sum = 0

    while (left < right){
        sum = array[left] + array[right];

        if(sum === target){
            return [array[left], array[right]];
        }else if(sum < target){
            left++;
        }else if (sum > target){
            right--;
        }
        
    }
    return [];
    
}

console.log("pop-quiz (06/12/22)");
console.log(twoNumberSum5(input1, input2));

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/**
 * Sorted Square Array
 * --------------------------------
 * Write a function that takes in a non-empty array of integers
 * that are sorted in ascending order and returns a new array of same length with 
 * the squares of the original integers also sorted in ascending order
 * 
 * sample input:
 * ----------------------------
 * array = [1,2,3,4,5,6,7,8,9]
 * 
 * sample output:
 * ---------------------------
 * array = [1,4,9,25, 36, 64, 81]
 */

//---MY SOLUTION - Brute Force--
console.log("---MY SOLUTION (Sorted Squares) - Brute Force Approach---");

const sortedSquareArray = (array) => {
    //as a precaution, make sure the array actually sorted
    array.sort((a,b) => a-b);
    //1. declare a new array
    let newArray = []
    //1. loop through the array and return each of items squared
    array.map((item) => {
        //2. square the array item
        let square = item * item;
        newArray.push(square);
        // array.pop(item);
    });
    //5. make sure the array is sorted 
    newArray.sort((a,b) => a-b);
    console.log(newArray);
}

//--REPETITION--
const sortedSquareArray2 = (array) => {
    //1. declare a new array
    let newArray = [];
    //2. loop through each item in the array
    array.map((item) => {
        //3. square each item in the array
        let square = item * item;
        //4. push the squared item into the newArray
        newArray.push(square);
    });
    //5. make sure the array is sorted in the same fashion as the items in initial array
    newArray.sort((a,b) => a-b);
    //6. return the newArray filled with the squared items of the first array
    console.log(newArray);
}

let sampleArray3 = [1,2,3,4,5,6,7,8,9];
let sampleArray4 = [1,2];

sortedSquareArray2(sampleArray3);

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/**
 * Tournament Winner
 * ---------------------------------
 * Theres an algorithms tournament where teams compete against each other.
 * Only two teams compete against each other at a time.
 * In each competition one team is the home team, and the other is the away team.
 * There is a winner and a loser for each competition. 
 * There are no ties.
 * 
 * Winner of the tournament is the one that receives the most points
 * 
 * Given an array of pairs (i.e. let array = [ [homeTeam1, awayTeam2], [homeTeam3, awayTeam4] ]) representing 
 * the teams that have faced off against each other, and an array containing the results of each competition, 
 * write a function that returns the winner of each tournament.
 * Each team is a string of at least 30 characters
 * 
 * A second array contains the results of the tournament. A 1 means tha the home team won, and 0 means that the away team won
 * 
 * It's guarnateed that at least one team will win the tournament and that each team will compete against
 * all the other teams exactly once. It's also guaranteed that the tournament will always have at least two teams
 */

console.log("--MY SOLUTION (Tournament Winner) 1--");

const tournamentWinner = (competitions, results) => {
    //1. assign and index for the result, the hometeam, and the awayteam;
    let stats = 0;
    let round = 0;
    let home = 0;//<-- won't change
    let away = 1;//<-- won't change

    //2. loop through the results list as it is a reflection of how many rounds there were in the tournament
    while(round < results.length){
        //3. if the stat is 0, the away team won
        if (results[stats] === 0){
            console.log(`Team ${competitions[round][away]} defeats ${competitions[round][home]}`);
        //4. if the stat is 1, than the home team won    
        }else if (results[stats] === 1){
            console.log(`Team ${competitions[round][home]} defeats ${competitions[round][away]}`)
        }
        round++;//<-- targets the next pair in the competitions array
        stats++;//<-- targets the next stat in the results array

    }//<-- END OF WHILE LOOP

}

console.log("--MY SOLUTION (Tournament Winner) 2--");

const tournamentWinner2 = (competitions, results) => {
    //1. assign and index for the result, the hometeam, and the awayteam;
    let stats = 0;
    let round = 0;
    let home = 0;//<-- won't change
    let away = 1;//<-- won't change


    //2. loop through the results list as it is a reflection of how many rounds there were in the tournament
    while(round < results.length){
        //3. if the stat is 0, the away team won
        if (results[stats] === 0){
        console.log(`Team ${competitions[round][away]} defeats ${competitions[round][home]}`);//<-- comment out for the final answer
        //4. if the stat is 1, than the home team won    
        }else if (results[stats] === 1){
            console.log(`Team ${competitions[round][home]} defeats ${competitions[round][away]}`);//<-- comment out for the final answer
        }
        round++;//<-- targets the next pair in the competitions array
        stats++;//<-- targets the next stat in the results array

    }//<-- END OF WHILE LOOP
    //5. Compare awayTeam to homeTeam in order to determine a winner 

}

let comp = [
    ['HTML', 'C#'],
    ['C#', 'Python'],
    ['Python', 'HTML']
];

let res = [0,0,1];

tournamentWinner(comp, res);













