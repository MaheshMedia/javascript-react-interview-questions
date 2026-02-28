//Problem 3: Reverse an Array (In-Place)

function reverseArray(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}

let nums = [1, 8, 6, 4, 5, 10];
console.log(reverseArray(nums));