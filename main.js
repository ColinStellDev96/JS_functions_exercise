/*
1. Write a function which takes an array of numbers and returns the mode of that array.
[2, 4, 4, 4, 6, 6, 1] - > 4
[0, 0, 0, 10] -> 0
[1] -> 1
*/

var mode = function (arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(arr);
    }
};

mode(2, 4, 4, 4, 6, 6, 1);
mode(0, 0, 0, 10);
mode(1);

/*
2. Write a funciton which, given a year as a number, returns whether that number is a leap year.
2000 -> true
1900 -> false
2016 -> true
MY UNDERSTANDING: If year is divisible by 4 with no remaining it is a leap year, unless that year is divisible by 100 (first IF statement). The year divisible by 100 ARE leap years if they are divisible by 400 (second IF statement). everything else is not a leap year.
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

// console.log(leapYear(2000));
// console.log(leapYear(1900));
// console.log(leapYear(2016));

/* 3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
[1,2,5] -> 3
[1,2,3,4,5] -> 6
[3,4,5] -> 1
*/




/*
4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.
[1,1,2,3,1,2,3] -> [1,2,3]
[1,4,4,4,2,2,4,4,4] -> [1,4,2]
*/
