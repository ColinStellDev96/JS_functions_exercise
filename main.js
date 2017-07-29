/*
1. Write a function which takes an array of numbers and returns the mode of that array.
[2, 4, 4, 4, 6, 6, 1] - > 4
[0, 0, 0, 10] -> 0
[1] -> 1
*/

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

/*
2. Write a funciton which, given a year as a number, returns whether that number is a leap year.
2000 -> true
1900 -> false
2016 -> true
*/

var leapYear = function (year) {
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else if (year % 4 === 0 && (year % 100 === 0 && year % 400 === 0)){
        return true;
    } else {
        return false;
    }
};
//
// console.log(leapYear(2000));
// console.log(leapYear(1900));
// console.log(leapYear(2016));

/* 3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
[1,2,5] -> 3
[1,2,3,4,5] -> 6
[3,4,5] -> 1
*/

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



/*
4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.
[1,1,2,3,1,2,3] -> [1,2,3]
[1,4,4,4,2,2,4,4,4] -> [1,4,2]
*/
// My solution uses E6 Set functionallity.
// Set takes an array and returns it without any duplicates.
// I created my function in a variable called removeDuplicate
// Within the function I created a new variable to hold the Set Method
// within the set metod, I plug in my array from the function parentheses.
// return newArr; and plug in the arrays.

var removeDuplicate = function (array) {
    var newArr = new Set(array);
    return newArr;
};

// console.log(removeDuplicate([1, 1, 2, 3, 1, 2, 3]));
// console.log(removeDuplicate([1,4,4,4,2,2,4,4,4]));


/*
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
    var stringArr = string.split(' ');
    var finalArr;
    for (var i = 0; i < stringArr.length; i++) {
        var word = stringArr[i];
        var word2 = word.slice(1);
        var letter = word.slice(0,1);
        var newWord = word2 + letter + 'ay';
        finalArr = newWord.toString();
        // console.log(finalArr);
    }
};

// console.log(pigLatin('The quick brown fox')); // NOT FINISHED WITH THIS YET



/*
6. Write a function which takes in two arrays and determines if they contain the same number of the same values.
[], [] -> true
[2, 3, 4], [1, 2, 3] -> false
["a", "c", "b"], ["a", "b", "c"] -> true
[1, 1, 1], [1, 1, 1, 1] -> false
*/

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


/*
7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with elements limited by the cutoff value.
[1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
[1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]
*/

var maxCut = function (arr) {

};






/*
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
    for(let a = 0; a <= 10; a++) {
        var rando = Math.floor((Math.random() * 100));
        if (returnArray.indexOf(rando) != -1) {
            continue;
        } else {
            returnArray.push(rando);
        }
    }
    return returnArray;
};
// returnArray.push();
// console.log(randomNumbers());



/*
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


/*
10. Write a function which, given an array, determines the subarray with the largest sum.
[1, 1, 1, -1] -> [1, 1, 1]
[1, 5, -4, 3, 2, -3] -> [1, 5, -4, 3, 2]
[2, 2, -10, 5, -10, 2, 2] -> [5]
[1, 3, -4, 5, 7, 9] -> [5, 7, 9] OR [1, 3, -4, 5, 7, 9]
*/

// loop through length of array
// determine which numbers will return a new array that would output largest sum
//

// STILL A WORK IN PROGRESS

var subArray = function (arr) {
    var arrMax = 0;
    var newArrMax = 0;

    for (var i = 0; i < arr.length; i++) {
        arrMax = Math.max(0, arrMax + arr[i]);
        newArrMax = Math.max(newArrMax, arrMax);
    }
    return newArrMax;
};
console.log(subArray([1, 1, 1, -1]));
console.log(subArray([1, 5, -4, 3, 2, -3]));
console.log(subArray([2, 2, -10, 5, -10, 2, 2]));
console.log(subArray([1, 3, -4, 5, 7, 9]));

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









/*
12. Write a program to count the occurrences of all letter pairs in a sample of text (like the first paragraph of the Constitution). Disregard differences between lower and upper case letters. Output the 10 most frequent letter pairs, in order by percent of total. Your program should correctly process situations where the input string is empty or where less than 10 pairs occur.

Example output:
th 2.37%
in 2.20%
fj 2.00%
...
*/
