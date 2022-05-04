// Write a function that takes in a string and returns a boolean value whether or not the string contains a pair of 
// matching brackets ({}, [], ()). These brackets must be nested appropriately in order to return a true value
// Example 1:
// Input: str = “{hello world}” brackets(srt)
// Output: True
// Example 2:
// Input: str = “{hello world]” brackets(srt)
// Output: False

const validBracketsAndBraces = function(str) {
const firstChar = str.charAt(0)
const lastChar = str.charAt(str.length -1)


    if (
        (firstChar === "(" && lastChar === ")") ||
        (firstChar === "{" && lastChar === "}") ||
        (firstChar === "[" && lastChar === "]")
      ) {
        console.log(true)
      } else {
        console.log(false)
      }

}

validBracketsAndBraces('{hello]')