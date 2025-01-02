// Question 7: Write a function named sumPostitveArray which accepts a parameter
//If the array contains any negative numbers, return the sum of all positive numbers only.

// Write function here

function sumPositiveArray(arr) {
  // Filter out the negative numbers and sum up the positive numbers
  const positiveNumbers = arr.filter(num => num > 0);
  return positiveNumbers.reduce((sum, num) => sum + num, 0);
}



//for testing the output
console.log(sumPositiveArray([1, -2, 3, 4, -5])); 
// Expected Output: 8 (1 + 3 + 4)
console.log(sumPositiveArray([-1, -2, -3, -4])); 
// Expected Output: 0
