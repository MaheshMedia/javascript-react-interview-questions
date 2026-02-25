//Problem 1: Find the Largest Element in an Array

let arr = [7, 2, 3, 6, 8, 9, 13, 78, 109];

let largest = arr[0];

for(i = 0; i < arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i]
    }
}

console.log('Largest Number in the array is', largest)





//Day 1.1 – Find Smallest Element in Array

let Smallest = arr[0];

for(i = 0; i < arr.length; i++){
    if(arr[i] < Smallest){
        Smallest = arr[i]
    }
}

console.log("Smallest element in the array is", Smallest)