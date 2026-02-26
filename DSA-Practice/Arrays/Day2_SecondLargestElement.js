//Problem 2: Find Second Largest Element in Array

let arr = [1, 5, 6, 2, 12, 11, 38, 98, 23];

let largest = -Infinity;
let secondLargest = -Infinity;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        secondLargest = largest;
        largest = arr[i];
    }else if(arr[i] > secondLargest && arr[i] != largest){
        secondLargest = arr[i];
    }
}

console.log("Second Largest Array is",secondLargest)



//Problem 2.1: Find Third Largest Element in Array

let thirdLargest = 0

for(let i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        thirdLargest = secondLargest;
        secondLargest = largest;
        largest = arr[i];
    }else if(arr[i] > secondLargest && arr[i] != largest){
        thirdLargest = secondLargest
        secondLargest = arr[i]
    }else if(arr[i] > thirdLargest && arr[i] != largest && arr[i] != secondLargest){
        thirdLargest = arr[i]
    }
}

console.log("Third Largest element is",thirdLargest);
