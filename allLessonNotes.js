//! lesson 2-4 Loops 01
 for (let i = 0; i < 5; i++){
    console.log("hello world")
}
//* in  above for loop, let i = 0; is initialization of the variable, i<5 is the condition and i++ is the change. here the most important part is the condition. in every iteration js engine will check if every condition is tre or not, if true then only code block {} will be executed if the condition does not match then loop wil end .
//* 1. i=0 , print h w
//* 2. i=1 ,print h w
//* 3. i=2 ,print h w
//* 4. i=3 ,print h w
//* 5. i=4 ,print h w
//* 6 now i=5 condition i<5 becomes false , so loop will end
for (let i = 5; i > 0; i--){
  //* reverse loop
  console.log("hello world"+i);
} 
// * hello world5
// *  hello world4
// *  hello world3
// *  hello world2
// *  hello world1
//* then i = 0 do not match with condition so loop ends.

function greet() {
    console.log("hii")
}
for (let z = 0; z < 10; z++) {
  //* calling function inside loop
    greet()
}
//  hii
//  hii
//  hii
//  hii
//  hii
//  hii
//  hii
//  hii
//  hii
//  hii

//* printing values of an array using for loop
const arr = [23, 545, 354, 24, 15, 34];

for (let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

//* printing even no and odd nums
for (let i = 0; i < arr.length; i++){
  if (arr[i] % 2 === 0) {
      // * even mo
        console.log("even no "+arr[i])
  } else if (arr[i] % 2 === 1) {
    //* odd no
        console.log("odd no " + arr[i])
    }
}

//* while loop
let i = 0;//* initializing value
while (i < 5) {//* condition
    console.log("hi" + i)

    //*changing /incrementing the value of i
    i++
}
//  hi0
//  hi1
//  hi2
//  hi3
//  hi4

//! Lesson 2-5 Loops 2
//* write a function that searches for an element in an array  and returns the index, if the element is not present then return -1
// const arr = [230, 545, 354, 24, 15, 34];

function searchElement(arr,searchNum){
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i])
        if (arr[i] === searchNum){
            return i;
        } 

    }

    return -1;
};

console.log(searchElement(arr, 24));

//* create a function that returns bumber of negative numbers from an array
let mixedArr = [2, -4, 33, 52, -9, 3, -44];

const countNegative = (arr) => {
    let counter = 0;
    for (let i = 0; i < mixedArr.length; i++){
        if (mixedArr[i] < 0) {
            // whenever it is negative value increasing the counter by 1
            counter++
        }

    }
    return counter;
}

//* write a function that returns the largest number in the array

const mixedArr2 = [34, 5, 3, 543, 224, 4552, 223, 5]
function findLargest(arr) {
    let largestNum = -Infinity;//* here we can use either -Infinity or arr[0] which means array's 0th index, we should not use 0 here because if the array has all values negative then it will not work because of 0 , so either choose -Infinity  or arr[0].
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largestNum) {
            //* if array's current index value is greater than the largestNum then change largestNum value to that array 's index value
            largestNum= arr[i]
        }
    }
    return largestNum;
}
console.log(findLargest(mixedArr2))


//! Lesson 2-6 Second Largest

//* write a function that returns the largest number in the array
const mixedArr3 = [4, 9, 0, 2, 8, 7,9, 1];
//* to find the second largest, we have keep track the first largest and second largest, so whenever we will find a first largest , then we can the previous first largeat value will be the second largest.

function findSecondLargest(arr) {
    //* handling corner case :- if the array has only one element or no elements so it is a empty array, we should ask this question to the interviewer, if the interviewer says to return null in that condition then we have also do it like below:-
    if (mixedArr3.length < 2) {
        return null;
    }
    //* corner case 2 :- what if in the array there are duplicates like [4, 9, 0, 2, 8, 7,9, 1]; we also have to handle this corner case , so to handle it in the second else if condition we have to also check that current index is not equal to firstLargest like :- (arr[i] > secondLargest && arr[i] !== firstLargest)
    //* corner case 3:- if array includes negative numbers then also our current solution will work.

//* -----------
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        //* updating second Largest in two cases, 1, when current index is larger than firstLargest then before updating first largest we will update the secondLargest and 2. when current index is larger than second index.So in every iteration we will check with with first largest then secondLargest.
        if (arr[i] > firstLargest) {
            //* before updating firstLargezst , as firstLargest will hold  the second largest value , we will change the second largest to previous first largest 
            secondLargest = firstLargest
            firstLargest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            //* when current index value is greater than secondLargest and current index is not equal to firstLargest(corner case 2) then we will update second largest value to current index value
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

console.log(findSecondLargest(mixedArr3));

//* possible corner cases we handled
//* 1 array has only one value or no value (empty array)
//* 2.array has negative numbers
//* 3. array has duplicates.

//! lesson 2-7 Loop in Loop
//* loop within a loop
for (let i = 0; i < 3; i++){

    for (let j = 0; j < 3; j++) {
        console.log("i=" + i + " j=" + j)
    }
} 


//! lesson 2-7 Loop in Loop

//* loop within a loop
for (let i = 0; i < 3; i++){

    for (let j = 0; j < 3; j++) {
        console.log("i=" + i + " j=" + j)
    }
}
/*
*Ans
*  i=0 j=0
*  i=0 j=1
*  i=0 j=2
*  i=1 j=0
*  i=1 j=1
*  i=1 j=2
*  i=2 j=0
*  i=2 j=1
*  i=2 j=2

*/

for (let i = 0; i < 3; i++){

    for (let j = 0; j < i; j++) {
        console.log("i=" + i + " j=" + j)
    }
}
/*
* Ans
 * i=1 j=0
 * i=2 j=0
 * i=2 j=1
*/

for (let i = 0; i < 5; i++) {

    for (let j = 0; j <= i; j++) {
        console.log("i=" + i + " j=" + j)
    }
}
//* ans
//  i=0 j=0
//  i=1 j=0
//  i=1 j=1
//  i=2 j=0
//  i=2 j=1
//  i=2 j=2
//  i=3 j=0
//  i=3 j=1
//  i=3 j=2
//  i=3 j=3
//  i=4 j=0
//  i=4 j=1
//  i=4 j=2
//  i=4 j=3
//  i=4 j=4
//* loop ran for 15 times
for (let i = 0; i < 3; i++) {

    for (let j = i; j > 0; j--) {
        console.log("i=" + i + " j=" + j)
    }
}
//* ans
//* Console
//  i=1 j=1
//  i=2 j=2
//  i=2 j=1


for (let i = 5; i >0; i--) {

    for (let j = 0; j > i; j++) {
        console.log("i=" + i + " j=" + j)
    }
}
//*ans
// Console
//  i=5 j=0
//  i=5 j=1
//  i=5 j=2
//  i=5 j=3
//  i=5 j=4
//  i=4 j=0
//  i=4 j=1
//  i=4 j=2
//  i=4 j=3
//  i=3 j=0
//  i=3 j=1
//  i=3 j=2
//  i=2 j=0
//  i=2 j=1
//  i=1 j=0
//*-  loop ran for 15 times

//! Lesson 2-8 Star Pattern

//* 4*4 star pattern
//* print below star pattern using for loop:-
//  ****
//  ****
//  ****
//  ****
//*ans
/*
let n = 4

//* outer loop is responsible for every row 
for (let i = 0; i < 4; i++ ) {
    let row = "";
    //* below loop is responsible for  columns(single line) containing 4 stars
    for (let j = 0; j < n; j++){
        row=row+"*"
    }
    console.log(row);
}
*/

//* i loop is responsible for number of row , so change in i loop will number of starts in row, and j loop will ve responsible for number of columns , so change in j loop will increase number of columns.

//*----------------
//* print below star pattern
//* *
//* **
//* ***
//* ****

//* ans
//* i loop is responsible for rows so as it has 4 rows , so in i loop condition will i < 4, but in j loop in first iteration it should run 1 time to print 1 start , in second iteration it should run 2 times to print 2 start , in 3rd 3 times and in 4th it should run 4 times .to do it in j loop the condition should be j < i+1 , then only we will get wanted result.
//* when 1=0 i want one * start to be printed , when i is 1 we want 2 star to be printed , when i is 2 , then 3 start should be printed and when i is 3 then 4 stars to be printed.
//* that why in j loop we need this condition j<i+1.
/*
let n = 4;
for (let i = 0; i < n; i++) {
    
    let row = "";
    for (let j = 0; j < i + 1; j++){
        row=row+"*"
    }
    console.log(row)
}
*/
//* print below pattern:-
//* 1
//* 1 2
//* 1 2 3
//* 1 2 3
//* 1 2 3 4
//* 1 2 3 4 5

//* ans
/*
let n = 5;
for (let i = 0; i < n; i++) {
    
    let row = "";
    for (let j = 0; j <= i ; j++){
        row=row+ (j+1)
    }
    console.log(row)
}*/
//* j < i+1 is same as writing j <= i

//* print below pattern

//* 1
//* 22
//* 333
//* 4444
//* 55555

//* ans
/*
let n = 5;
for (let i = 0; i < n; i++) {
    
    let row = "";
    for (let j = 0; j <= i ; j++){
        row=row+ (i+1)
    }
    console.log(row)
}*/
//* j < i+1 is same as writing j <= i

//* print below pattern
//* 12345
//* 1234
//* 123
//* 12
//* 1

//* ans
/*
let n = 5;
for (let i = 0; i < n; i++) {
    
    let row = "";
    for (let j = 0; j < n-i ; j++){
        row=row+ (j+1)
    }
    console.log(row)
}
*/
//* print below pattern
//* *****
//* ****
//* ***
//* **
//* *
//* ans
/*
let n = 5;
for (let i = 0; i < n; i++) {
    
    let row = "";
    for (let j = 0; j < n-i ; j++){
        row=row+ "*"
    }
    console.log(row)
}*/

//* Print below star pattern:-
//*     *
//*    **
//*   ***
//*  ****
//* *****

//* ans
//* we will write two loops inside one for adding spaces and one for * stars.
/*
let n = 5;
for (let i = 0; i < n; i++){
   let row = "";
    for (let j = 0; j < n - (i + 1); j++) {
        //* for spaces
        row = row + " "
    }
    for (let k = 0; k < i + 1; k++){
        //* for stars
        row=row+"*"
    }
    console.log(row);
}*/

//* print below pattern
//* 1
//* 10
//* 101
//* 1010
//* 10101

//* ans
/*
let n = 5;
for (let i = 0; i < n; i++){
    let row = "";
    let toggle = 1;

    for (let j = 0; j < i + 1; j++){
        row = row + toggle;

        //* switch the toggle
        if (toggle == 1) {
            toggle=0
        } else {
            toggle=1
        }
    }
    console.log(row);
}
*/
//* print below pattern
//* 1
//* 01
//* 010
//* 1010
//* 10101
//* ans
//* in the previous pattern toggle  was refreshing in every iteration but in this pattern if we don't refresh the the toggle then we can print this pattern easily. to do that we just have to initialize the toggle outside of the loop.
/*
let n = 5;
 let toggle = 1;
for (let i = 0; i < n; i++){
    let row = "";
   

    for (let j = 0; j < i + 1; j++){
        row = row + toggle;

        //* switch the toggle
        if (toggle == 1) {
            toggle=0
        } else {
            toggle=1
        }
    }
    console.log(row);
}
*/
//* lesson 2-9 Count Digit
//* write a function that returns the count of digits in a number
/*
function countDigits(n) {
    //*corner case 1:- if the number is 0 , zero then is should return 1 not 0 , because 0 is also a digit,so we handled this corner case like below
    //* if number value is zero
    if (n == 0) return 1;
    //*corner case 2:-  if the number is a negative number then also our solution should work , to do that we have convert the negative value to positive value first using Math.abs(number) then our solution will also work for negative values.
    //* converting negative num to positive
    n = Math.abs(n);

    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++
    }
    return count
}
 
console.log(countDigits(53242));
*/
//* we used a variable count which will keep track of the count; now we will divide the number by 10 and every time we will do this division we will increase the count by 1; and to we also have use Math.floor() to round down the value , and we will do it till number is greater than 0;


//* lesson 2-10 Palindrome
//*  palindrome means if we reverse a number then it should be same as the original number.So we will create a function which will check if the number is a palindrome number or not.
//* create a function which checks if the number is a palindrome number or not

/*
let isPalindrome = function (num) {
    //* corner case:- if num is negative value then always it can not be be a palindrome number because of the - sign, so if it is a - negative number we will return just false;
    if (num < 0) return false;

    let numCopy = num;
    let rev = 0;

    while (num > 0) {
        let lastDigit = num % 10;
        rev = (rev * 10) + lastDigit;
        num = Math.floor(num / 10);
    }
    if (rev === numCopy) {
        return true;
    } else {
        return false;
    }
};

console.log(isPalindrome(2567652))
*/
//* Lesson 2-11 Reverse Integer

//* reverse an integer, and if the reversed integer go outside the 32 bit integer range( not below than - 2 to the power 31 to  +2 to the power 31 range) then return just 0.

let reverse = function (num) {
    //*corner case 1:- keeping track of the original inputted number so we can compare at last if it is negatibve value or not.
    let numCopy = num;
    //* if numb is ngative value then converting it to a positive value
    num = Math.abs(num);
    //* setting initial value of reverse variable to 0
    let rev = 0;

    while (num > 0) {
        //* calculating last digit
        let lastDigit = num % 10;
        //* adding last digit to this rev varibale in every iteration
        rev = (rev * 10) + lastDigit;
        //* deleting last digit fromthe actual number
        num = Math.floor(num / 10)
    }

    //* 32 bit condition handling
    let limit = Math.pow(2, 31)
    if (num < -limit || num > limit) return 0; 

    //* if num is a negative num then returning negatived reversed nogative value other wise returning positive Value(corner case 1:- negative value)
    return numCopy < 0 ? -rev : rev;
};

console.log(reverse(-544423))

//* Lesson 3-1 Time and Space Complexity
//* Time complexity:- It is used to measure the efficiency of an algorithm in terms of speed , as the input size grows.
//* Big O Notation:- represents worst case time complexity.
//* Linear Search has time complexity of O(n).
//* Binary Search has time complexity of O(log n).
//*   whenever we see a nested loop , so  a loop inside another loop then the time complexity is O(n2) (O of n square) .
//* when we have a loop which runs n times and inside that loop we are performing any task which runs log n  times that means the time complexity is O(n log n).
//* when we have 3 nested loops that means the time complexity is O(n3) (O of n cube).
//* also O(2m) (2 to the power n)
//* also O(n!)(O of n factorial) this is very high complexity
//* O(1) :- it is also called constant time complexity, it means how much the input size grows , time complexity will not change , like find a particular index of an array like arr[5].

//* In terms of efficiency the best is O(1);
//* the efficiency chart will loop like :- O(1) > O(log n) > O (n)  > O (n log n) > O (n2)(n square) > O ( 2n) (2 to the power n) > O(n!) (n factorial)
//* when we are using space for1 or 4 ,5 of any number f variable which is countable that means space complexity is o(1).
//* suppose we are creating a array which has n number of elements then the space complexity is O(n).
//* suppose we are using 2 d matrix of n*n that means space complexity is n2 (n square).
//* if my time complexity is O(2n) , or O(3n) or O(10n) , we ignore  the number and say complexity is O(n).
//* even for O(n2 +n) (n square + n) then also we will say time complexity is O(n2) (n square) and ignore the +n.
//* so the bigger one is the actual time complexity.

//* Lesson - 4-1 Remove Duplicates
//* Remove duplicates from an sorted array, the array is in non decreasing order which means it can have duplicates:-
//* 16.48
