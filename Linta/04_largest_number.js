
// Question 4: Write a function that finds and returns the largest number in an array.

function findLargestNumber(numbers) {
    let l=numbers[0];
    for(i=0;i<numbers.length;i++)
        if(l<numbers[i])
            l=numbers[i];
        return l;
  }
  
  console.log(findLargestNumber([10, 20, 5, 8])); 
  // Expected Output: 20
