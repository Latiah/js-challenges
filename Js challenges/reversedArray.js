function reverseArrayInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap elements at left and right indices
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    // Move pointers towards the center
    left++;
    right--;
  }
}

// Test the function
const numbers = [1, 2, 3, 4, 5];
console.log("Original array:", numbers);

reverseArrayInPlace(numbers);
console.log("Reversed array:", numbers);
