// Question 5: Write a function that calculates the sum of all numbers in an array.

function calculateSum(numbers) {
  let sum = 0; // Initialize sum to 0
  for (let number of numbers) {
    sum += number; // Add each number to sum
  }
  return sum;
}

console.log(calculateSum([1, 2, 3, 4, 5])); 
// Expected Output: 15
