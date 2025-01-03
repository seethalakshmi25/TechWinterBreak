// Question 2: Create a function that returns the second color from an array passed as a parameter.


function getSecondColor(colors) {
  if (colors.length >= 2) {
    return colors[1]; // Return the second element
  } else {
    return "Array does not have a second color"; // Handle edge case
  }
}

console.log(getSecondColor(["red", "blue", "green", "yellow", "purple"])); 
// Expected Output: blue
