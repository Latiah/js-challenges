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

function filterPrimeNumbers(numbers) {
  const primeNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      primeNumbers.push(numbers[i]);
    }
  }
  return primeNumbers;
}

// Test the function
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = filterPrimeNumbers(numbers);
console.log("Prime Numbers:", primeNumbers);
