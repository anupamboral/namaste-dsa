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
