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
} */

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
//* to solve this problem we will use two pointer approach, first pointer to find all the unique elements and second pointer to keep track of the position of unique elements, so whenever we will find a unique element then we will update the value of that position to that unique element and at last we will return the count of unique elements which is also the length of array without duplicates.

function removeDuplicates(nums) {

    let x = 0;//* pointer to keep track of the position of unique elements
    for (let i = 0; i < nums.length; i++) {
        //* i is pointer which will go through every number\

        if (nums[i] > nums[x]) {
            //* moving the pointer to the next when a[i] is greater than a[x] pointer
            x = x + 1;
            //* updating the pointer index value with bigger unique elm
            nums[x] = nums[i];
        }
    }
    return x + 1;//* at last , x pointer will be positioned at the last unique index, but as index is 0 based , so we have to add 1 to get the number of unique elements;

};

const nonDecreasingArray=[0,0,1,1,1,2,2,3,3,4,5]

console.log(removeDuplicates(nonDecreasingArray));

//* Lesson - 4-2 Remove Element


function removeElement(nums,val) {

    let x = 0;//* pointer to keep track of the position of  numbers
    for (let i = 0; i < nums.length; i++) {
        //* i is pointer which will go through every number\

        //* shift elements to the left if it is not equal to val
        if (nums[i] !== val ) {
      
            nums[x] = nums[i];
                  x = x + 1;
        }
    }
    return x ;

};

const numberArray=[2,3,5,2,6,2,7,2,9,2]

console.log(removeElement(numberArray, 2));

//* Lesson 4-3 Reverse String

function reverseString(s) {
    let length = s.length;
    let halfLength = Math.floor(length / 2);

    for (let i = 0; i < halfLength; i++){
        //* swapping values using temporary variable
        let temp = s[i];
        s[i] = s[length - 1 - i]
        s[length - 1 - i] = temp;
        
    }
  return s
};

console.log(reverseString(["h", "e", "l", "l", "o"])); 

//* Lesson 4-4 Best Time to Buy and Sell
//* you are given ana array named prices where prices[i] is the price of given stock on i th day.
//* you want to maximize your profit by choosing an single day to buy one stock and choosing a different day in future to sell the stock.
//* return the maximum profit you can achieve from this this transaction and if you can not achieve any profit then return 0.
/*
let maxProfit = function (prices) {
    let min = prices[0];
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }
        if (prices[i] < min) {
            min = prices[i]
        }
    }
    return maxProfit;
};
console.log(maxProfit(7, 1, 5, 3, 6, 4, 8));


//* Lesson 4-5 Merge Sorted Arrays

let merge = function (nums1, m, nums2, n) {
    
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = m + n - 1; i >= 0; i--){
        if (p < 0) break;
        if (p >= 0 && nums1[p1] > nums2[p2]) {
            nums[i] = nums[p1];
            p1--
        }
        else {
            nums1[i] = nums2[p2];
            p2--
        }
    }

}

*/
//* Lesson 4-6 Move Zeros
//* we will shift all the non zero values to the front , make sure all zeros come at the last.


function moveZeros(nums) {
    
    //* using two pointer approach
    let x = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] !== 0) {
            nums[x] = nums[i];
            x++;
        }
    }

    //* filling remaining blanks with 0
    for (let i = x; i < nums.length; i++) {
        nums[i]=0
     }
}


//* Lesson 4-7 Max Consecutive

function findMaxConsecutiveOnes(nums) {
    let currCount = 0;
    let maxCount = 0;
    for (let i = 0; i < nums.length; i++){
        //* when current number is 1 increase current count by 1
        if (nums[i] === 1) {
            currCount++
        } else {
            //* when current number is 0 , update max Count to current count or max which one is greater, and set currCount to 0;
            maxCount = Math.max(currCount, maxCount)
            currCount = 0;
        }
    }
    //* returning larger number between currCount and maxCount
    return Math.max(currCount, maxCount);
}

//* Lesson 4-8 Missing Number

function  missingNum(nums){
    let n = nums.length; //* total numbers in the array
    let totalSum = n * (n + 1) / 2;//* calculating total sum
    
    let partialSum = 0;

    for (let i = 0; i < nums.length; i++){
        //* calculating sum with out the missing num
        partialSum =partialSum+nums[i]
    }

    //* calculating missing num by subtracting partial sum from total sum
    return totalSum - partialSum;

}

//* Lesson 4-9 Single Number
//* when we xor num with 0 it returns the same number but when we xor a num with itself it gives 0 , in this problem to remove duplicates we are using xor concept.
function singleNumber(nums) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++){
        xor = xor ^ nums[i];
    }

    return xor;
};

//*
//! Lesson 5-1 Recursion
//* recursion :- function calls itself to solve smaller version of the same problem

//* base case:- stop condition (when to stop  calling itself)
//* recursive case :- part where function calls itself.

//* we should always write the base case at the top, and make sure it stops the recursion. if we don't stop it then stack overflow can happen.
//* example of recursion (if we remove the base case it will go into a infinite loop , and after a point stack overflow will happen )
function fun(num) {
    //* base case
    if (num === 0) return;
    //* recursive case
    console.log(num);
    num = num - 1;
    fun(num);
};

let a = 10;
fun(a)

function fun2(num) {
    if (num > 10) return;

    console.log(num);
    // num = num + 1;
    // fun2(num)
    fun2(++num)//* same as writing above two lines
};

fun2(1)

//* Lesson 5-2 Sum of First n numbers

//*important formula :- 
// * sum of m = n+sum of (n-1)
//*Example:-
// * sum of 5 = 5 + sum of (5-1) = 5 + sum of 4

function sum(n) {
    if (n == 0) return 0;
    return n +sum(n-1)
}
console.log(sum(5));

//! Lesson 5-3 Sum of all numbers in Array
let arr1 = [5, 3, 2, 0, 1];
function sum2(n) {
    if (n == 0) return arr1[0];
    return arr1[n]+sum2(n-1)
};
console.log(sum2(arr1.length - 1));

//* sum of odd numbers

function sum3(n) {
    let isOdd = ((arr1[n] % 2) != 0);
    if (n == 0) return isOdd ? arr1[n] : 0;
    
    return  ((isOdd ? arr1[n] : 0)+(sum3(n-1)))
};
console.log(sum3(arr1.length - 1));

//! Lesson 5-4 Factorial of n

function factorial(n) {
    if (n == 1) return 1; //* base case because factorial of 1 is always 1
    
    return n*factorial(n-1)
}
console.log(factorial(5));

//* Lesson 5-5 Power of Two

let isPowerOfTwo = function (n) {
    if (n == 1) return true;
    else if ((n % 2 != 0) || n < 1) return false;

    return isPowerOfTwo(n/2)
}
console.log(isPowerOfTwo(16));

//* Lesson 5-6 Recursion Masterclass
//* fibonacci numbers starts from 0,1.and every number is sum of previous two numbers example :- 0,1,1,2,3,5,8
//* formula of fibonacci num
//* f(n) = f(n - 1) + f(n - 2)

function fib(n){
    //* base case
    if (n <= 1) return n;
    //* recursive case
    return fib(n-1)+fib(n-2)

}
console.log(fib(8))
//* here time complexity O (2n) two to the power of n , also called exponential time complexity. which is not good, it is very high time complexity.

///*  Lesson 6-1 Linear Search
//* Linear search is an algorithm which searches for an element inside an array

let arr3 = [3, 2, 6, 0, 5];

function linearSearch(arr,target) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === target) {
            return i;//* if current index is equal to the target then return the index;
        }
    }
    return -1;
}

console.log(linearSearch(arr3, 0));

//! Lesson 6-2 binary Search
//* binary search is an algorithm which searches for an element inside an array, but it will only work when the array is sorted.

function binarySearch(nums,target) {
    let left = 0;
    let right = nums.length - 1;
    while (right >= left) {
        let middle = Math.floor((left + middle) / 2);

        if (target === nums[middle]) {
            return middle;
        } else if (target < nums[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1
        }
    }
    return -1;
};
//* time complexity (log2 n) (log base2 n )
//* as the space complexity is constant so it will be o(1) not O(3), as it is constant.
//* Lesson 6-3 Bubble Sort
//* this sorting algorithm checks values pair by pair, to it shifts smaller value to the left side and larger value to the right side.and it does this swapping/shifting again and again till the array is sorted properly.
//* this algorithm is called bubble sort because we are bubbling up the largest element to the last of the array in first iteration.
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        //* isSwapped variable is for breaking the loop when no swap has happened 
        let isSwapped = false;
        for (let j = 0; j < n - 1 - i; j++){
            if (arr[j] > arr[j + 1]) {
                //* swapping values when left index's value is larger than right side value
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                isSwapped = true;
            }

            if (!isSwapped) break;
        }
    }
    return arr;
}

let arr2 = [5, 3, 2, 6, 0, 1];

console.log(bubbleSort(arr2));
//* In the above code the outer loop Is running n-1 times And the inner loop is running n-1-i times So the outer loop And the inner loop both has The time complexity is O(n2)(n square) times and space complexity is O(1).for a sorting algorithm this is not a good time complexity.

//* Lesson 6-4 Selection Sort
let selectionSort = function (arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        //* find the minimum in the array
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
};
let arr4 = [3, 5, 2, 1, 6, 8];

console.log(selectionSort(arr4));
//* In the above code the outer loop Is running n-1 times And the inner loop is running n times So the outer loop And the inner loop both has The time complexity is O(n2)(n square) times and space complexity is O(1).for a sorting algorithm this is not a good time complexity.

//! Lesson 6-5 Insertion sort

let insertionSort = function (arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++){
        let curr = arr[i];
        let prev = i - 1;
        while (arr[prev] > curr && prev >= 0) {
            arr[prev + 1] = arr[prev]
            prev--;
        }
        arr[prev + 1] = curr;
    }
    return arr;
}

let arr5 = [5, 4, 6, 7, 2, 0, 1, 6];
console.log(insertionSort(arr5));

//! Lesson 6-6 Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
}


function merge(left, right) {
    
    let res = [];
    let j = 0;
    let i = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i]);
            i++;
        } else {
            res.push(right[j])
        }
    }

    return[...res,...left.slice[i],right.slice[j]]
}

//* time complexity of (n log base 2 of n) nlog2n; which is a good time complexity

//!----------------------------------------------------------

   //*Write a program to print even numbers from 1 to n except numbers which are divisible by 4.

//* Use Continue statement to avoid printing. */
function print_output(n){
 
    for (let i = 0; i <= n; i++){

        if (i % 4 === 0) {
            continue;
        }

        if (i % 2 === 0) {
            console.log(i)
        }
    }
    
    
}

//* Write a program to print all the numbers from 1 to n .If m is present in between the sequence then stop printing any other number and break out of the loop.
//* Input :-
//* n = 10 m = 4
//* Output :-
//* 1
//* 2
//* 3

//* ans
function print_series(n,m){
     //** Print the following series from 1 to n if m is present stop printing the series 
    //*   Note print all the numbers in a separate line 

    for (let i = 1; i <= n; i++){
        if (i === m) {
            break;
        }
        console.log(i)
    }
    
    
}

for (let i = 0; i < 4; i++ ) {
    let row = "";
    //* below loop is responsible for  columns(single line) containing 4 stars
    for (let j = 0; j < 4; j++){
        row=row+"*"
    }
    console.log(row);
}
//* ****
//* ****
//* ****
//* ****

// let n = 5;
for (let i = 0; i < 5; i++) {
    
    let row = "";
    for (let j = 0; j < i +1; j++){
        row=row+"*"
    }
    console.log(row)
}
//* *
//* **
//* ***
//* ****
//* *****
//*-------------------------
for (let i = 0; i < n; i++) {
    
    let row = "";
    for (let j = 0; j < i+1 ; j++){
        row=row+ (j+1)
    }
    console.log(row)
}
//* 1
//* 1 2
//* 1 2 3
//* 1 2 3 4
//* 1 2 3 4 5
//* ----------------------------
for (let i = 0; i < n; i++) {
    
    let row = "";
    for (let j = 0; j < i+1 ; j++){
        row=row+ (i+1)
    }
    console.log(row)
}
//* 1
//* 22
//* 333
//* 4444
//* 55555

//* -----------------------------

// let n = 5;
for (let i = 0; i < n; i++) {
    
    let row = "";
    for (let j = 0; j < n - i; j++) {
        row = row + "*"
    }
    console.log(row)
}
//* *****
//* ****
//* ***
//* **
//* *
//* ---------------------
// let n = 5;
for (let i = 0; i < n; i++) {
    
    let row = "";
    for (let j = 0; j < n-i ; j++){
        row=row+ (j+1)
    }
    console.log(row)
}
//* 12345
//* 1234
//* 123
//* 12
//* 1

//* ----------------------------

for (let i = 0; i < n; i++) {
    
    let row = "";
    for (let j = 0; j < n-i ; j++){
        row=row+ (i+1)
    }
    console.log(row)
}
//* 11111
//* 2222
//* 333
//* 44
//* 5
//* ---------------------------


// let n = 5;

//     for (let i = 1; i <= n; i++){
//         let row = "";
//         for (let j = 1; j <= i ; j++){
//             row=row+"*"
//         }
//         let spaceCount = (1 * n) - (1 * i);
//         for (let k = 1; k <= spaceCount; k++){
//             row = row + " ";
//         }
//         for (let l = 1; l <= i; l++){
//             row=row+"*"
//         }

//         console.log(row);
//     }
      
// *    *
// **   **
// ***  ***
// **** ****
// **********

//* ---------------------------------
 let n = 5;

    // let i = n;

    while (i >= 1) {
        let row = "";
        let j = 1;
        while (j <= i) {
            row = row + "*";
            j++;
        }
        console.log(row);
        i--;
    }

    let k = 1;

    while (k <= n) {
        let row = "";
        let l = 1;
        while (l <= k) {
            row = row + "*";
            l++
        }
        console.log(row);
        k++
    }


//* *****
//* ****
//* ***
//* **
//* *
//* *
//* **
//* ***
//* ****
//* *****

//*  ----------------------------------------
//* A conditional star pattern uses a conditional statement, like an if-else block, inside a nested loop to decide whether to print a star (*) or a space ( ) at a specific position. Instead of always printing a star, the if condition checks the current row and column numbers to determine what character should be displayed.
function hollowSquareStarPattern(n) {
   
    for (let i = 1; i <= n; i++){
    let rowOutput = "";
     
        for (let j = 1; j <= n; j++){
            if (i === n ||i===1|| j === 1 || j === n) {
                rowOutput = rowOutput + "*";
            } else {
                rowOutput = rowOutput + " "
            }
        }
        console.log(rowOutput)
    }
}
//* for input 5 out out should be
//* *****
//* *   *
//* *   *
//* *   *
//* *****
//*  ----------------------------------------

// for (let i = 0; i < 5; i++){
//     let row = "";
//     for (let j = 0; j < i+1 ; j++){
//         row= row+(i+1)
//     }
//     console.log(row);
// }

//** -------------------------------------
/*Given an array find the maximum in it and return it

Example:-
Input:-
Arr=[5, 4, 7, 2, 6]
Ouput:-*/

/*
function findMax(arr) {
    // Edge case: if the array is empty
    if (arr.length === 0) return null;

    let max = arr[0]; // Assume first element is max

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Update max if a larger number is found
        }
    }
    return max;
}

// Example usage:
let Arr = [5, 4, 7, 2, 6];
console.log(findMax(Arr)); // Output: 7
*/

//* ------------------------------
/*
Complete the function to find the minimum in the array and return it

Input :- Array and the length of the array

[5,6,2,9,-2] , 5




Output:-

-2
*/

// function find_minimum(arr,length){
//         /*Function to find the minimum in the array--> arr
//           return the minimum value*/

//     if (length === 0) return null;

//     let min = arr[0];

//     for (let i = 0; i < length; i++){
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     };
//     return min
    
// }

//* --------------------------
//* Write a program to store first n prime numbers in an array . After storing return the array.


/*

Input:-

n=5

Output:- Return the output in the form of an array.

2

3

5

7

11
*/


// function prime_numbers(n){
// /* Function to store first n prime_numbers in an array
//* Return the array containing the prime numbers */

//     let primes = [];
//     let num = 2;

//     while (primes.length < n) {
//         let isPrime = true;
//         for (let i = 2; i <= Math.sqrt(num); i++){
//             if (num % i === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if (isPrime) {
//             primes.push(num);
//         }
//         num++;

//     }
//     return primes;
    
// }
//* -----------------
/*After watching the video write the code to print all the subarrays possible. Note - print in the similar way as given here.

Input:-

[1,2,3,4,5]

Output:-

1
12
123
1234
12345
2
23
234
2345
3
34
345
4
45
5
*/
/*
*Ans
* function printSubarrays(arr) {
    let n = arr.length;

    //* Outer loop for the starting point
    for (let i = 0; i < n; i++) {
        
        //* Inner loop for the ending point
        for (let j = i; j < n; j++) {
            let subarray = "";
            
            //* Loop to collect elements from i to j
            for (let k = i; k <= j; k++) {
                subarray += arr[k];
            }
            
            console.log(subarray);
        }
    }
}

// Example usage:
let input = [1, 2, 3, 4, 5];
printSubarrays(input);\*/

//** ---------------------
/*
Given an array find the maximum sum subarray. Return the maximum sum of the subarray.

Input:-

[5,2,-4,-5, 3,-1,2,3,1]

Output:-

8

Reason :- 3,-1,2,3,1 is the maximum subarray possible.*/
///* ans
/*
function maxSubArraySum(arr) {
    let maxSum = -Infinity; // Start with the smallest possible number
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];

        // If currentSum is better than our previous best, update maxSum
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }

        // If currentSum drops below 0, reset it to start a new subarray
        if (currentSum < 0) {
            currentSum = 0;
        }
    }

    return maxSum;
}

// Example usage:
let input = [5, 2, -4, -5, 3, -1, 2, 3, 1];
console.log(maxSubArraySum(input)); // Output: 8
*/

//* -------------------------------
/*
Given an array of positive integers arr, return the sum of all possible odd-length subarrays of arr.
A subarray is a contiguous subsequence of the array.
 
Example 1:
Input: arr = [1,4,2,5,3]
Output: 58
Explanation: The odd-length subarrays of arr and their sums are:
[1] = 1
[4] = 4
[2] = 2
[5] = 5
[3] = 3
[1,4,2] = 7
[4,2,5] = 11
[2,5,3] = 10
[1,4,2,5,3] = 15
If we add all these together we get 1 + 4 + 2 + 5 + 3 + 7 + 11 + 10 + 15 = 58
*/
//* ans
/*
function sumOddLengthSubarrays(arr) {
    let totalSum = 0;
    let n = arr.length;

    //* 1. Pick the starting point
    for (let i = 0; i < n; i++) {
        //* 2. Pick the ending point
        for (let j = i; j < n; j++) {
            let length = j - i + 1;

            //* 3. Only process if the length is odd
            if (length % 2 !== 0) {
                //* 4. Sum the elements in this specific subarray
                for (let k = i; k <= j; k++) {
                    totalSum += arr[k];
                }
            }
        }
    }

    return totalSum;
}

//* Example usage:
let arr = [1, 4, 2, 5, 3];
console.log(sumOddLengthSubarrays(arr)); // Output: 58
*/
//*--------------------
/*
You have been given an array your task is to reverse the array and return the new reversed array.

Example 1:-

Input:-

[1,2,3,4,5]

Output:-

[5,4,3,2,1]
*/
//* ans
/*function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Swap elements using a temporary variable
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        // Move the pointers toward the center
        left++;
        right--;
    }

    return arr;
}

// Example usage:
let input = [1, 2, 3, 4, 5];
console.log(reverseArray(input)); // Output: [5, 4, 3, 2, 1]
*/
//* -------------------
/*
Given 2 Arrays concatenate both of them and return the final resultant array.

Arr1 will be concatenated first followed by Arr2.




Example 1:-

Input:-

Arr1=[1,2,3,4,5]

Arr2=[1,2,3]

Ouput:-

    [1, 2, 3, 4, 5, 1, 2, 3]
*/
//* ans
/*
function concatenateArrays(arr1, arr2) {
    let result = [];

    // Add elements from the first array
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i]);
    }

    // Add elements from the second array
    for (let j = 0; j < arr2.length; j++) {
        result.push(arr2[j]);
    }

    return result;
}

// Example usage:
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3];
console.log(concatenateArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 1, 2, 3]
*/

//* -------------------------------
/*
Write a program to extract all the odd numbers that are present in the given array.

Store all these odd numbers in the new array and return it.

Example 1:-

Input:-

[1,2,3,4,5]

Output:-

[1,3,5]*/

//* ans
function extractOdds(arr) {
    let odds = []; // This will store our result

    for (let i = 0; i < arr.length; i++) {
        // If the remainder when divided by 2 is not 0, it's odd
        if (arr[i] % 2 !== 0) {
            odds.push(arr[i]);
        }
    }

    return odds;
}

// Example usage:
let input1 = [1, 2, 3, 4, 5];
console.log(extractOdds(input1)); // Output: [1, 3, 5]

//*  -----------------------------
/*
You are given an array Containing n-1 distinct numbers from range [1, n].
There is one element missing from the range[1,n] in the array. Find that missing Number and return it.

Solve it without using any extra array.

Example 1:
Input: nums = [3,4,1]
Output: 2
Explanation: n = 4 since there are 3 numbers, so all numbers are in the range [1,4]. 2 is the missing number in the range since it does not appear in nums.
*/

/*
function findMissingNumber(nums) {
    let n = nums.length + 1; // Total numbers that should be there
    
    //* Calculate what the sum SHOULD be
    let expectedSum = (n * (n + 1)) / 2;
    
    //* Calculate what the sum IS
    let actualSum = 0;
    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }
    
    //* The difference is the missing number
    return expectedSum - actualSum;
}

//* Example usage:
let nums = [3, 4, 1];
console.log(findMissingNumber(nums)); // Output: 2
*/

//***---------------------
/*
 *write a program to find the Prefix Sum array of the given input array.

Task:
Take the input array
Compute Prefix Sum.
Return the prefix sum array.
Example:
Input:
[1, 2, 3, 4, 5]
Output:
1 3 6 10 15
*/
//* ans
function computePrefixSum(arr) {
    if (arr.length === 0) return [];

    let prefixSum = new Array(arr.length);
    
    // The first element remains the same
    prefixSum[0] = arr[0];

    // Fill the rest of the array using the previous sum
    for (let i = 1; i < arr.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + arr[i];
    }

    return prefixSum;
}

// Example usage:
let input = [1, 2, 3, 4, 5];
console.log(computePrefixSum(input)); // Output: [1, 3, 6, 10, 15]

//* -----------------------
/*Write a program to find the Suffix Sum array of the given input array.

Task:
Take the input array
Compute Suffix Sum.
Return the Suffix sum array.
Example:
Input:
[1, 2, 3, 4, 5]
Output:
15 14 12 9 5 */

// Renamed the function to avoid conflict with the variable 'suffixArray'
var getSuffixSum = function(arr) {
    let n = arr.length;
    if (n === 0) return [];

    let suffixArray = new Array(n); // Used a unique name here

    suffixArray[n - 1] = arr[n - 1];
    
    for (let i = n - 2; i >= 0; i--) {
        // FIX: Use i + 1 to access the next element
        suffixArray[i] = arr[i] + suffixArray[i + 1];
    }
    
    return suffixArray;
};

//* --------------------------
/*
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
Return the running sum of nums.
 
Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
*/
//* ans
var runningSum = function(nums) {
    let result = new Array(nums.length);
    
    // The first element is always the same
    result[0] = nums[0];
    
    // Loop through the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // Current sum = previous total + current number
        result[i] = result[i - 1] + nums[i];
    }
    
    return result;
};

//* ----------------------------
/* 
*You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
 
Example 1:
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.*/

/*

var maximumWealth = function(accounts) {
    let maxWealth = 0;

    // Loop through each customer
    for (let i = 0; i < accounts.length; i++) {
        let currentCustomerWealth = 0;

        // Loop through each bank account of the current customer
        for (let j = 0; j < accounts[i].length; j++) {
            currentCustomerWealth += accounts[i][j];
        }

        // Check if this customer is the richest so far
        if (currentCustomerWealth > maxWealth) {
            maxWealth = currentCustomerWealth;
        }
    }

    return maxWealth;
};

// Example usage:
let accounts = [[1, 2, 3], [3, 2, 1]];
console.log(maximumWealth(accounts)); // Output: 6
*/
//* -----------------------------
/*Write a program to find the minimum element in a 2D Array.

Example 1:
Input: arr = [[1,2,3],[5,-2,7]]
Output: -2
*/

//* ans
/**
 * @param {number[][]} arr
 * @return {number}
 */
function findMinIn2DArray(arr) {
    // Edge case: check if the array or the first row is empty
    if (arr.length === 0 || arr[0].length === 0) return null;

    // Initialize minVal with the first element
    let minVal = arr[0][0];

    // Loop through each row
    for (let i = 0; i < arr.length; i++) {
        // Loop through each column in the current row
        for (let j = 0; j < arr[i].length; j++) {
            // Update minVal if a smaller number is found
            if (arr[i][j] < minVal) {
                minVal = arr[i][j];
            }
        }
    }

    return minVal;
}

// Example usage:
let arr11 = [[1, 2, 3], [5, -2, 7]];
console.log(findMinIn2DArray(arr11)); // Output: -2


//*  ----------------------------------
/*
Given a 2D integer array matrix, return the transpose of the matrix.
The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices. Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
*/
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    
    // Create a new matrix with swapped dimensions (cols x rows)
    // We initialize the rows first
    let result = Array.from({ length: cols }, () => new Array(rows));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // The magic swap: row index becomes column index
            result[j][i] = matrix[i][j];
        }
    }

    return result;
};

// Example usage:
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(transpose(matrix)); 
// Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
//* --------------------------
/*
Write a program to sort the array in descending order using Bubble sort algorithm. After Sorting return the array.
Note both the array and size is already given.
Input:-
[4,3,2,5,1]

Output:-
[5,4,3,2,1]
*/
//* ans
/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
 */
function bubbleSortDescending(arr, n) {
    // Outer loop for number of passes
    for (let i = 0; i < n - 1; i++) {
        
        // Inner loop for adjacent comparisons
        for (let j = 0; j < n - 1 - i; j++) {
            
            // For descending: swap if the current element is SMALLER than the next
            if (arr[j] < arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
let input11 = [4, 3, 2, 5, 1];
let size = input.length;
console.log(bubbleSortDescending(input11, size)); // Output: [5, 4, 3, 2, 1]

//* --------------------
/*

Write a program to sort the array in ascending order using Insertion sort algorithm. After Sorting return the array.
Note both the array and size is already given.
Input:-
[4,3,2,5,1]

Output:-
[1,2,3,4,5]
*/

//* ans
/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
 */
function insertionSort(arr, n) {
    // Start from the second element (index 1)
    for (let i = 1; i < n; i++) {
        let key = arr[i]; // The element we are currently positioning
        let j = i - 1;

        /* Move elements of arr[0..i-1], that are
           greater than key, to one position ahead
           of their current position */
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shifting to the right
            j = j - 1;
        }
        
        // Place the key in its correct sorted position
        arr[j + 1] = key;
    }
    
    return arr;
}

// Example usage:
let input2 = [4, 3, 2, 5, 1];
let size2 = input.length;
console.log(insertionSort(input2, size2)); // Output: [1, 2, 3, 4, 5]
//**------------------------
/* Write a program to sort the array in descending order using Selection sort algorithm. After Sorting return the array.
Note both the array and size is already given.
Input:-
[4,3,2,5,1]

Output:-
[5,4,3,2,1]*/

//* ans
/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
 */
function selectionSortDescending(arr, n) {
    // One by one move the boundary of the unsorted subarray
    for (let i = 0; i < n - 1; i++) {
        
        // Find the maximum element in the unsorted array
        let maxIndex = i;
        for (let j = i + 1; j < n; j++) {
            // Change to < for Ascending, keep > for Descending
            if (arr[j] > arr[maxIndex]) {
                maxIndex = j;
            }
        }

        // Swap the found maximum element with the first element
        if (maxIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
    
    return arr;
}

// Example usage:
let input111 = [4, 3, 2, 5, 1];
let size111 = input.length;
console.log(selectionSortDescending(input111, size111)); // Output: [5, 4, 3, 2, 1]