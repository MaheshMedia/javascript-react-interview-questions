
## DSA of Array

1. Linear Search in array ?



1. Linear Search in array ?

let arr = [10, 20, 30, 40, 50];
let number = prompt("enter the number bwn 10 to 50");
let arrLnt = arr.length;

const arrSearch = (arr, number, arrLnt) => {
    for (let i = 0; i < arrLnt; i++){
        if (arr[i] == number) {
            return i;
        }
    }
}
let result = arrSearch(arr, number, arrLnt);
(result == -1) ? console.log("Element is not present in array") : console.log("Element is present at index " + result);

### using recursion method

let linerarSearch = (arr, size, key) => {
    if (size == 0) {
        return -1;
    } else if (arr[size - 1] == key) {
        return size - 1;
    }
    return linerarSearch(arr, size - 1, key);
}
Drive code
let main = () => {
    let arr = [10, 20, 30, 40, 50];
    let key = prompt("enter the number bwn 10 to 50");
    let arrLength = arr.length;
    let ans = linerarSearch(arr, arrLength, key);
    if (ans == -1) {
        console.log(`The element ${key} is not found`);
    } else {
        console.log(`The element ${key} is found at ${ans} index of the given array.`);
    }
    return 0;
}
main();







