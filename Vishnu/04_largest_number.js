// Question 4: Write a function that finds and returns the largest number in an array.

function findLargestNumber(numbers) {
  let largest = numbers[0]; // Assume the first number is the largest
  for (let number of numbers) {
    if (number > largest) {
      largest = number; // Update if a larger number is found
    }
  }
  return largest;
}

console.log(findLargestNumber([10, 20, 5, 8])); 
// Expected Output: 20
