// Write a function that takes in two numbers and determines the largest positive integer that divides the two 
// numbers without a remainder.

// Example 1:
// Input: gdc_two_numbers(336,360)
// Output: 24

function gdc_two_numbers(num1, num2) {
    if ((typeof num1 !== 'number') || (typeof num2 !== 'number')) 
      return false;
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    while(num2) {
      var t = num2;
      num2 = num1 % num2;
      num1 = t;
    }
    return num1;
  }

console.log(gdc_two_numbers(336, 360));


