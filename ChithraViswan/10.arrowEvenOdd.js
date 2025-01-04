// Question 10: Write an arrow function that checks if a number is even or odd.
// It should return "Even" if the number is even and "Odd" if the number is odd.

let checkEvenOdd=(num)=>
{
  if(num%2==0)
    return("Even");
  else
    return("odd");
}

console.log(checkEvenOdd(4)); 
// Expected Output: Even
console.log(checkEvenOdd(7)); 
// Expected Output: Odd
