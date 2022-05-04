// Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even 
// numbers.
// Example:
// Input: [2, 4, 7, 11, 15, 16]
// Output: Even numbers: [2, 4, 16]
//   Odd Numbers: [7, 11, 15]

const array = [2, 5, 6, 9, 10, 13, 14]

const oddNumbers = array.filter(odd => odd % 2)
console.log(`this are the odd numbers ${oddNumbers}`)

const evenNumber = array.filter(even => even % 2 === 0)
console.log(`this are the even numbers ${evenNumber}`)


// ////
// function getEvenNumbers() {
//     var arr = [1, 2, 3, 4, 5, 6];

//      for (var i = 0; i < arr.length; i++) {
//      if (arr[i] % 2 === 0) {
//              console.log(arr[i]);
//     }

// }
// }
// getEvenNumbers()


function splitOddAndEven(numbers) {
    let odd = [];
    let even = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
       
        even.push(numbers[i]);
      } else {
        
        odd.push(numbers[i]);
      }
    }
  
    
    const returnObject = {
      odd,
      even,
    };
  
    return returnObject;
  }


console.log(splitOddAndEven([2, 4, 5,6 ,34, 45, 55]));
