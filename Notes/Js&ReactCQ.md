
## Coding Questions List:-

1) How to find the duplicate elements in array in javaScript ?
2) How to find the Max and Min value in a given array in javaScript ?
3) How to find the second largest value in the array ?
4) How to find missing elements in a given array ?
5) How to find even or add numbers in array ?
6) How to find the sum of all elements  ?
7) How to find factorial of a given number ?
8) How to find the prime number ?
9) How to find vowels from string  ?
10) How to reverse a string ?
11) How to find palindrome ?
12) How to swap two variables with out using third variable ?
13) How to merge two arrays and sort them ?
14) How to find factor of given integer ?
15) How to make calculator in javascript ?
16) How to compare two Arrays are equal or not ?
17) How to find the intersection of two arrays/sets ?
18) How to find union of two arrays/set ?
19) How to convert first letter of string in UpperCase ?
20) How to find the Fibonacci sequence ?
21) How to print star pattren in dimond shapes ?
22) How to check the No of Occurrence of Character in String ?
23) Program to Check Armstrong Number ?
24) How to find the first non repeating character in string? exp:- abcab
25) from API data. filter the age below 26 age json values and you should append it to the div you have in the HTML. through js append the values to the div.
26) Write a function that performs binary search on a sorted array in js ?









## Explanation to Methods of each Questions:-


1) How to find the duplicate elements in array ?

//Example 1
let arrList = ["Nit", "Mit", "Nit", "Vin", "Nav", "Vin", "Aky"];
let arrFilter = arrList.filter((ele, index, arr) => {
    console.log(`value of ele = ${ele}, index = ${index}, arr = ${arr}`)
return arr.indexOf(ele) !== index;
})
console.log(arrFilter);

//Example 2
let arrList = [2,3,4,6,3,6,7,9,2];
let arrFilter = arrList.filter((ele, index, arr) => {
return arr.indexOf(ele) !== index;
})
console.log(arrFilter);

//Example 3 -> with out using the build in functions
function findNonDuplicates(arr) {
    let nonDuplicates = [];

    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;

        // Check if arr[i] is duplicated in the rest of the array
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                isDuplicate = true;
                break;
            }
        }

        // If arr[i] is not duplicated, add it to the nonDuplicates array
        if (!isDuplicate) {
            nonDuplicates.push(arr[i]);
        }
    }

    return nonDuplicates;
}

const numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 9, 9];
const nonDuplicates = findNonDuplicates(numbers);
console.log("Non-duplicate numbers:", nonDuplicates);


1.1) Sort the array of objects based on the 2nd index in an array with out using the built in functions?

    const subjects = [
        {"name": "Math", "score": 81},
        {"name": "English", "score": 77},
        {"name": "Chemistry", "score": 87},
        {"name": "Physics", "score": 84},
    ];

    // Bubble sort algorithm to sort by the score property
    for (let i = 0; i < subjects.length - 1; i++) {
        for (let j = 0; j < subjects.length - i - 1; j++) {
            if (subjects[j].score > subjects[j + 1].score) {
                // Swap the elements
                let temp = subjects[j];
                subjects[j] = subjects[j + 1];
                subjects[j + 1] = temp;
            }
        }
    }

    console.log(subjects);

2) How to find the Max and Min value in a given array ?

let arrList = [2, 34, 54, 3, 7, 68, 10];
let result = arrList.reduce((prv, cur) => {
    console.log(`value of prv = ${prv}, cur = ${cur} `);
    return prv > cur ? prv : cur;
});
console.log(result);

3) How to find the second largest value in the array ?

let arrList = [2, 34, 54, 3, 7, 68, 10];
const largestValue = (arr) => {
    const firstLargestValue = Math.max(...arr);
    index = arr.indexOf(firstLargestValue);
    arr.splice(index, 1);
    const secondLargest = Math.max(...arr);
    return secondLargest;
}
console.log(largestValue(arrList));

4) How to find missing elements in a given array ?

let arrList = [1, 2, 3, 4, 5, 6, 8, 10];
let missList = [];
function missValue(arr) {
    const minNumber = Math.min(...arr);
    const maxNumber = Math.max(...arr);
    for (let i = minNumber; i < maxNumber; i++){
        if(arr.indexOf(i)<0){
            missList.push(i)
        }
    }
    return missList;
}
console.log(missValue(arrList));

5) How to find even or add numbers in array ?

let arrList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = arrList.filter((item) => {
    return item % 2 === 0;
})
const oddNumbers = arrList.filter((item) => {
    return item % 2 !== 0;
})
console.log(`Even numbers = ${evenNumbers}`);
console.log(`Odd numbers = ${oddNumbers}`);

6) How to find the sum of all elements in array ?

let arrList = [12, 34, 1, 3, 56, 8];
function sumOfArray(arr) {
    return arrList.reduce((prv, cur) => {
    return prv + cur
    })
}
console.log(sumOfArray(arrList));

7) How to find factorial of a given number ?

let number = prompt("please enter the number to find the factorial");
let fact = 1;
    if (number < 0) {
    console.log(`factorial of ${number} is not possible`)
    } else {
        for (let i = 1; i <= number; i++) {
        fact = fact * i;
        }
        console.log(`factorial of ${number} is ${fact}`);
}

8) how to find the prime number ?

let number = prompt("plese enter the number to find the prime numbers");
if (number == 1) {
    console.log(`${number} is not prime neither composite`);
} else if (number < 0) {
    console.log(`prime number of ${number} is not possible`)
} else {
    for (let i = 2; i < number; i++){
        if (number % i == 0) {
            var result = `${number} is not prime number`
            break;
        } else {
            var result = `${number} is prime number`
        }
    }
    console.log(result);
}

9) How to find vowels from string ?

let string = prompt("enter the letter");
const vowels = ['a', 'e', 'i', 'o', 'u'];
const countVowel = (str) => {
    var count = 0;
    str.toLowerCase();
    for (let letter of str) {
        if (vowels.includes(letter)) {
            count++
        }
    }
    return count;
}
console.log(countVowel(string));

let inputLetter = prompt("enter a name to find the vowels");
const vowels = ['a', 'e', 'i', 'o', 'u'];
let strToArr = Array.from(inputLetter);
let list = [];

for (let letter of strToArr) {
    if (vowels.includes(letter)) {
        list.push(letter);
    }
}
console.log(`voles in letter ${inputLetter} are ${list}`);

10) How to reverse a string ?

let string = prompt("enter the string");
const stringReverse = () => {
    let strToArr = string.split('');
    let arrReverse = strToArr.reverse();
    let arrToStr = arrReverse.join("");

    return arrToStr;
}
console.log(stringReverse(string));

11) How to find palindrome ?

let inputData = prompt("enter to find the palindrome")
let strToLower = inputData.toLocaleLowerCase();
const findPalindrome = (str) => {
    let reverseStr = str.split("").reverse().join("");
    if (reverseStr === strToLower) {
        return true;
    } else {
        return false;
    }
}
console.log(findPalindrome(strToLower));

12) How to swap two variables with out using third variable ?

let a = 10;
let b = 20;
[b, a] = [a, b];  this is array destructuring
console.log(`the value if a is ${a} and value of b is ${b}`);

13) How to merge two arrays and sort them ?

we can mergin in two ways using concat() or spread operator
const arr1 = ['100', '8', '9'];
const arr2 = ['45', '7', '190'];
const result1 = arr1.concat(arr2);
const sortArr1 = result1.sort((a, b) => {
    console.log(`value a = ${a}, b = ${b}`)
    return a - b;
});
const result2 = [...arr1, ...arr2];
const sortArr2 = result2.sort((a, b) => {
    return a - b;
})
console.log(sortArr2);

14) How to find factor of given integer ?

let number = prompt("please enter the number to find the factorial")
console.log(`the factorial number of ${number} is`)
if (number < 0) {
    console.log("Please enter the positive number");
} else {
    for (let i = 0; i <= number; i++){
        if (number % i == 0) {
            console.log(`${i}`)
        }
    }
}

15) How to make calculator in javascript ?

let operator = prompt("please enter the operator + - * /");
let num1 = parseFloat(prompt("please enter num 1"));
let num2 = parseFloat(prompt("please enter num 2"));
switch (operator) {
    case "+": console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case "-": console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case '*': console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case "/": console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
}

16) How to compare two Arrays are equal or not ?

let arr1 = [2, 9, 6, 8, 4];
let arr2 = [4, 8, 6, 9, 2];
const isArrSame = arr1.length == arr2.length &&
    arr1.every((curEle) => {
        if(arr2.indexOf(curEle) > -1)
        return(curEle=[arr2.indexOf(curEle)])
    })
console.log(isArrSame);

17) How to find the intersection of two arrays/sets ?

let arr1 = [2, 9, 6, 8, 4, 4, 4];
let arr2 = [4, 8, 6, 9, 12];
let intersectionArr = arr1.filter((ele)=>{
    return arr2.includes(ele);
})
console.log([... new Set(intersectionArr)]);

18) How to find union of two arrays/set ?

let arr1 = [1, 2, 6, 8, 17];
let arr2 = [4, 8, 6, 19, 12, 17];
let unionArr = [...arr1, ...arr2];
console.log([...new Set(unionArr)]);

19) How to convert first letter of string in UpperCase ?

let inputStr = prompt("enter the value to convert");
const firstLetterCapital = (str) => {
    let newStr = str.split(" ");
    let newArr = newStr.map((value) => {
        return value.charAt(0).toUpperCase() + value.slice(1);
    })
    return newArr.join(" ");
}
console.log(firstLetterCapital(inputStr));

20) How to find the Fibonacci sequence ?

let number = prompt("enter the number to find fibonacci sequence");
let num1 = 0;
let num2 = 1;
for (let i = 0; i <= number; i++){
    let temp = num1 + num2;
    num1 = num2;
    num2 = temp;
    console.log(temp);
}

21) How to print star pattren in dimond shapes ?

to print the normal pattren
for (let i = 0; i <= 6; i++){
    for (let j = 0; j < i; j++){
        document.write("*" + "&nbsp" + "&nbsp;");
    }
    document.write("<br/>")
}

to print the pyramid
for (let i = 1; i <= 6; i++){
    for (let k = 1; k <= 6 - i; k++){
        document.write("&nbsp;&nbsp;");
    }
    for (let j = 1; j <= i; j++){
        document.write("*" + "&nbsp;" + "&nbsp;");
    }
    document.write("<br/>");
}

to print the dymand
for (let i = 1; i <= 6; i++){
    for (let k = 1; k <= 6 - i; k++){
        document.write("&nbsp&nbsp;");
    }
    for (let j = 1; j <= i; j++){
        document.write("*" + "&nbsp;" + "&nbsp;");
    }
    document.write("<br/>")
}
for (let i = 1; i <= 6; i++){
    for (let k = 1; k <= i; k++){
        document.write("&nbsp;&nbsp;");
    }
    for (let j = 1; j <= 6 - i; j++){
        document.write("*" + "&nbsp;" + "&nbsp;")
    }
    document.write("<br/>")
}

22) How to check the No of Occurrence of Character in String ?

let string = prompt("please enter string");
let letter = prompt("please enter letter");
let strLenght = string.length;
var counter = 0;
for (let i = 0; i < strLenght; i++){
    if (string[i] == letter) {
        counter++;
    }
}
console.log(`in ${string} occourence of ${letter} = ${counter}`);

23) Program to Check Armstrong Number ?

let number = prompt("please enter the number");
let temp = number;
let lengthOfDigit = number.toString().length;
let sum = 0;
while (temp > 0) {
    371/10=1 modulus
    let digit = temp % 10;
    sum += digit ** lengthOfDigit;
    temp = parseInt(temp / 10);
}
if (sum == number) {
    console.log(`${number} is an Armstrong number`)
} else {
    console.log(`${number} is not an Armstrong number`)
}

24) How to find the first non repeating character in string? exp:- abcab

    function firstNonRepeatingChar(str) {
        // Create an object to store character frequencies
        const charCount = {};

         // Iterate through the string and count character frequencies
        for (const char of str) {
            if (charCount[char]) {
            charCount[char]++;
            } else {
            charCount[char] = 1;
            }
        }

        // Iterate through the string again to find the first non-repeating character
        for (const char of str) {
            if (charCount[char] === 1) {
            return char; // Return the first non-repeating character
            }
        }

        // If there are no non-repeating characters, return null or a suitable value
        return null;
    }

    // Example usage:
    const inputString = "programming";
    const result = firstNonRepeatingChar(inputString);
    console.log(result); // Output: "p"

25) from API data. filter the age below 26 age json values and you should append it to the div you have in the HTML. through js append the values to the div.

**output is wrong need to do work around and get the answer**
    // index.js component
        let emp = [
        {
            name: "abc",
            age: 20,
        },
        {
            name: "xyz",
            age: 30,
        },
        {
            name: "cde",
            age: 25,
        },
        {
            name: "fgh",
            age: 28
        },

    ];

    // Filter the below 26 age json values (name:age)
    const result = emp.filter((value)=>{
        value.age < 26;
    })

    const app = document.getElementById('app');

    result.map(({name, age})=>{
        const dataToShow = `${name} ${age}`
        console.log(dataToShow);
        app.innerHTML = dataToShow;
    })

    // index.html component
    <div id="app"> </div>

26) can you write the click event. like when you click in the "html page" it should print console in the "js page"?
    - when we click on "welcome Nitish" it should print "hello" in the console

    // index.html
    <div id="app">Welcome Nitish</div>

    // index.js
    const divSelect = document.getElementById('app');

    divSelected.addEventListiener('click', ()=> {
        console.log("Hello");
    })

    //output= Hello

27) can you write the form with simple username, password and submit button? can you add div above the form, add background color above 768px width should be 50% and below width 100%

    **learn directly from the website**

28) 5431 = 5+4+3+1 = 13 = 1+3 = 4. can you write a Js code








```
