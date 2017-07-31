/* -=-=-=-=-=-=-=-=QUESTION1=-=-=-=-=-=-=-=-
1. Write a function which takes an array of numbers and returns the mode of that array.
[2, 4, 4, 4, 6, 6, 1] - > 4
[0, 0, 0, 10] -> 0
[1] -> 1
*/
/* Solution Comments: This solution uses a combination of variables, for loops and if/else statements to output the mode of each array. Our first for loop/if else satement loops through the arrays and keeps track of how many times a number appears in the array. We then move ino the second part where we separate out the values and output the key value that appears the most in each array. */


var mode = function (numbers) {
    var keepTrack = {};
        for (var i = 0; i < numbers.length; i++) {
            if (!(numbers[i] in keepTrack) ) {
                keepTrack[numbers[i]] = 1;
            } else {
                keepTrack[numbers[i]]++;
            }
        }
        var biggestNum = 0;
        var biggestKey = '';
        for (var key in keepTrack) {
            if (keepTrack[key] > biggestNum) {
                biggestNum = keepTrack[key];
                biggestKey = key;
            }
        }
        return biggestKey;
};

// console.log(mode([2, 4, 4, 4, 6, 6, 1]));
// console.log(mode([0, 0, 0, 10]));
// console.log(mode([1]));

/*-=-=-=-=-=-=-=-=QUESTION2=-=-=-=-=-=-=-=-
2. Write a funciton which, given a year as a number, returns whether that number is a leap year.
2000 -> true
1900 -> false
2016 -> true
*/
/* Solution Comments: I used an if/else if/ else statement to find the solution to this problem. IF the year is divisible by 4 perfectly, AND NOT able to be divided by 100, then it is a leap year. ELSE IF the year is divisible by 4 AND 100 AND 400, then it is true, everything else is false. */



var leapYear = function (year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else if (year % 4 === 0 && (year % 100 === 0 && year % 400 === 0)){
        return true;
    } else {
        return false;
    }
};

// console.log(leapYear(2000));
// console.log(leapYear(1900));
// console.log(leapYear(2016));

/* -=-=-=-=-=-=-=-=QUESTION3=-=-=-=-=-=-=-=-
3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
[1,2,5] -> 3
[1,2,3,4,5] -> 6
[3,4,5] -> 1
*/
/* Solution Comments: In this function, we loop through the array of numbers starting with 1 and if indexOf(i) is equal to -1 (meaning that it's not the next number) we return that index number with thes number that does not appear in the array.   */

var firstInt = function (nums) {
    for (var i = 1; true; i++) {
        if (nums.indexOf(i) === -1) {
            return i;
        }
    }
};

// console.log(firstInt([1, 2, 5]));
// console.log(firstInt([1, 2, 3, 4, 5]));
// console.log(firstInt([3, 4, 5]));



/* -=-=-=-=-=-=-=-=QUESTION4=-=-=-=-=-=-=-=-
4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.
[1,1,2,3,1,2,3] -> [1,2,3]
[1,4,4,4,2,2,4,4,4] -> [1,4,2]
*/
/* SOLUTION COMMENTS: My solution uses E6 Set functionallity.
Set takes an array and returns it without any duplicates.
I created my function in a variable called removeDuplicate
Within the function I created a new variable to hold the Set Method
within the set metod, I plug in my array from the function parentheses.
return newArr; and plug in the arrays.*/

var removeDuplicate = function (array) {
    var newArr = new Set(array);
    return newArr;
};

// console.log(removeDuplicate([1, 1, 2, 3, 1, 2, 3]));
// console.log(removeDuplicate([1,4,4,4,2,2,4,4,4]));


/*-=-=-=-=-=-=-=-=QUESTION5=-=-=-=-=-=-=-=-
5. Write function that translates a text to Pig Latin, and another that translates back. English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding "ay".

"The quick brown fox" -> "Hetay uickqay rownbay oxfay".
*/

// convert string into array of strings;
// grab first letter of each string in the array (var)
// move it to the back of respective string in the array (var)
// add "ay" to each string in the array
// concatinate string [one word] into one string
// use join to convert array back into string
// reverse function back to english string i started with.

var pigLatin = function (string) {
    var stringLow = string.toLowerCase();
    var stringArr = stringLow.split(' ');
    var finalArr = [];
    for (var i = 0; i < stringArr.length; i++) {
        var word = stringArr[i];
        var word2 = word.slice(1);
        var letter = word.slice(0,1);
        var newWord = word2 + letter + 'ay';
        finalArr.push(newWord);
        var stringSent = finalArr.join(' ');
    }
    var finalStr = '"' + stringSent.charAt(0).toUpperCase() + stringSent.slice(1) + '"';
    return finalStr; console.log(finalStr);
};

var pigEnglish = function (string) {
    var stringLow = string.toLowerCase();
    var stringArr = stringLow.split(' ');
    var finalArr = [];
    for (var i = 0; i < stringArr.length; i++) {
        var word = stringArr[i];
        var firstLett = word[word.length - 3];
        var word2 = firstLett + word;
        var word3 = word2.slice(0, - 3);
        finalArr.push(word3);
        var stringSent = finalArr.join(' ');
    }
    var finalStr = '"' + stringSent.charAt(0).toUpperCase() + stringSent.slice(1) + '"'
    return finalStr;
};

// console.log(pigLatin('The quick brown fox'));
// console.log(pigEnglish('Hetay uickqay rownbay oxfay'));


/*-=-=-=-=-=-=-=-=QUESTION6=-=-=-=-=-=-=-=-
6. Write a function which takes in two arrays and determines if they contain the same number of the same values.
[], [] -> true
[2, 3, 4], [1, 2, 3] -> false
["a", "c", "b"], ["a", "b", "c"] -> true
[1, 1, 1], [1, 1, 1, 1] -> false
*/
/* Solution Comments: This function takes two arrays and compares them to see if they are the same. I have two for loops that run the length of each respective array plugged in. I then run an IF/ELSE IF/ ELSE statment that 1. compares the length of each array and if they are not the same length, we return false. 2. if the index values of each array are the same, we return true, 3. everything else will return false.   */

var samVar = function (arr, arr2) {
    for (i = 0; i <= arr.length; i++)
        for (j = 0; j <= arr2.length; j++) {
        if (arr.length < arr2.length) {
            return false;
        } else if (arr[i] === arr2[i]) {
            return true;
        } else {
            return false;
        }
    }
};

// console.log(samVar(['[]'], ['[]']));
// console.log(samVar([2, 3, 4], [1, 2, 3]));
// console.log(samVar(['a', 'c', 'b'], ['a', 'b', 'c']));
// console.log(samVar([1, 1, 1], [1, 1, 1, 1]));


/*-=-=-=-=-=-=-=-=QUESTION7=-=-=-=-=-=-=-=-
7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with elements limited by the cutoff value.
[1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
[1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]
*/
/* Solution Comments: For this solution, I have a function that takes the array and the desired cutoff value. I loop through the array and simply compare each index value of the arry with the number for the cutoff value, if that value is greater than the cutoff value, each index value after that in the arry becomes the cutoff value */

var maxCut = function (arr, num) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            arr[i] = num;
        }
    } return arr;
};

// console.log(maxCut([1,2,3,4,5,6,7,8], 4));
// console.log(maxCut([1,5,7,3,1,5,7], 3));


/*-=-=-=-=-=-=-=-=QUESTION8=-=-=-=-=-=-=-=-
8. Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.

-> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
-> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)
*/
// ---- STEPS -----
// create random #
// check if it's in the array
// add if not in array
// skip if in array

var randomNumbers = function () {
    var returnArray = [];
    for(var a = 0; a <= 10; a++) {
        var rando = Math.floor((Math.random() * 100));
        if (returnArray.indexOf(rando) != -1) {
            continue;
        } else {
            returnArray.push(rando);
        }
    }
    return returnArray;
};

// console.log(randomNumbers());



/*-=-=-=-=-=-=-=-=QUESTION9=-=-=-=-=-=-=-=-
9 Write a function which takes two sorted lists and merges them into a new sorted list.
[1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,9,10]
[], [] -> []
[-1, 0, 1], [-2, 2] -> [-2, -1, 0, 1, 2]
*/
// arr both lists together
// sort them accordingly
//return new list.

var sorted = function(arr1, arr2) {
    var newArray = [];
    var i = 0, j = 0, index = 0;
    while(newArray.length != (arr1.length + 1 + arr2.length) -1) {
        if (arr1 === arr2) {
            return arr1;
        }
        else if (arr1[i] < arr2[j]) {
            newArray.push(arr1[i]);
            i++;
        } else {
            newArray.push(arr2[j]);
            j++;
        }
    } return newArray;
};

// console.log(sorted([1,2,5,6,9], [3,4,5,10]));
// console.log(sorted('[]', '[]'));
// console.log(sorted([-1, 0, 1], [-2, 2]));


/* ----------=-=-=-=-=-=-=-=-BONUS-=-=-=-=-=-=-=-=-----------------*/


/*
10. Write a function which, given an array, determines the subarray with the largest sum.
[1, 1, 1, -1] -> [1, 1, 1]
[1, 5, -4, 3, 2, -3] -> [1, 5, -4, 3, 2]
[2, 2, -10, 5, -10, 2, 2] -> [5]
[1, 3, -4, 5, 7, 9] -> [5, 7, 9] OR [1, 3, -4, 5, 7, 9]
*/

// loop through length of array
// determine which values will return a new array that would output largest sum
//
//     newArrMax = Math.max(arrMax, newArrMax);
// } return newArrMax;
// STILL A WORK IN PROGRESS

var subArray = function (arr) {
    var arrMax = [];
    var newArrMax = [];
    for (var i = 0; i < arr.length; i++) {
        arrMax = Math.max(0, arrMax, arr[i]);
        newArr = arrMax.push(arr[i]);
        newArrMax = Math.max(arrMax.push(), newArrMax);
        // console.log(nnewArr);
 }
};


// console.log(subArray([1, 1, 1, -1]));
// console.log(subArray([1, 5, -4, 3, 2, -3]));
// console.log(subArray([2, 2, -10, 5, -10, 2, 2]));
// console.log(subArray([1, 3, -4, 5, 7, 9]));

/*
11. One way of encoding a message is called a "square code". Given a message like:
"Have a nice day!"
We determine an appropriate size of a square or rectangle to contain this message without spaces like so:
have
anic
eday
!
We then read the square in columns, which gives us our encoded message:
hae! and via ecy
Write two functions, called encodeSquare and decodeSquare. encodeSquare should be able to encrypt any arbitrary string, and decodeSquare should be able to unencrypt any arbitrary encoded string. The unencrypted string will have no spaces, and that's ok.
*/
// STILL A WORK IN PROGRESS

var encodeSquare = function (input) {
    var inputAsArray = input.split('');
    inputAsArray.forEach(function(arr){
        arr = arr.split('');
    });
    var rootOf = Math.sqrt(inputAsArray.length);
    if (rootOf === Math.floor(rootOf)) {
        rootOf++
    }
    var output = [];
    for (var i = 0; i < rootOf; i++){
        output.push([]);
    }
    for (var i = 0; i < output.length; i++) {
        for (var j = 0; j < rootOf; j++) {
            output[i].push(inputAsArray.shift());
        }
    }
    for (var i = 0; i < output.length; i++){
        output[i] = output[i].join('');
    }
    return output.join('\n');
};
// console.log(encodeSquare("Have a nice day!"));



// var unSquare = function (input) {
//     return input.split('\n').join('')
// };

/*
12. Write a program to count the occurrences of all letter pairs in a sample of text (like the first paragraph of the Constitution). Disregard differences between lower and upper case letters. Output the 10 most frequent letter pairs, in order by percent of total. Your program should correctly process situations where the input string is empty or where less than 10 pairs occur.

Example output:
th 2.37%
in 2.20%
fj 2.00%
...
*/
