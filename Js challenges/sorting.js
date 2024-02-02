function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sortDescendingAndRemovePrimes(arr) {
  // Remove prime numbers from the array
  const filteredArray = arr.filter((num) => !isPrime(num));

  // Sort the filtered array in descending order
  for (let i = 0; i < filteredArray.length; i++) {
    for (let j = i + 1; j < filteredArray.length; j++) {
      if (filteredArray[i] < filteredArray[j]) {
        // Swap elements if they are out of order
        const temp = filteredArray[i];
        filteredArray[i] = filteredArray[j];
        filteredArray[j] = temp;
      }
    }
  }

  return filteredArray;
}

// Test the function
const array = [6, 2, 8, 19, 4, 10, 12, 17, 3, 21];
console.log("Original Array:", array);

const sortedArray = sortDescendingAndRemovePrimes(array);
console.log("Sorted Array (Descending, Primes Removed):", sortedArray);
