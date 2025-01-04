// Question 4: Write a function that finds and returns the largest number in an array.

function findLargestNumber(numbers) {
  for(let i=0;i<numbers.length;i++)
  {
    for(let j=i+1;j<numbers.length;j++)
    {
      if(numbers[j]<numbers[i])
      {
        let temp = numbers[i];
        numbers[i]=numbers[j];
        numbers[j]=temp;
      }
    }
  }
  return(numbers[numbers.length-1]);
}

console.log(findLargestNumber([10, 20, 5, 8])); 
// Expected Output: 20
