// Create a function that checks an array for prime numbers then inserts any primes into a new array.                               
// Example 1:                                                                                                                                       
// Input: numArray = [1,2,3,4,5,6,7,8,9,10]
// Output: primeArray = [2,3,5,7]
// Example 2:
// Input: numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83] 
// Output: primeArray = [19 ,29 ,47 , 83]

let numArray = function(x) {
    
    let prime = []
    let composite = []
    
    if(x < 2){
        return false
    }

    for(let i = 0; i < x.length; i++) {
        
        if(x[i] % 2 == 0) {
          composite.push(x[i])
        } else {
          prime.push(x[i])
        }
    }
    
   const primeAndComposite = {
       prime,
        composite,
   }

    return primeAndComposite
}

console.log(numArray([3, 5, 7, 8, 9 , 16, 13, 23, 25, 27]))




















// let myFunction = function(number) {
//     for(let i = 0; i <= 2)
// }
// let x = function(factor) {
//     if(factor * 1 == factor) {
//         if(factor * 2 > factor) {
//             console.log()
//         }
//     }
// }


















// function isPrime(num) {
//     for (let i = 2; i * i <= num; i++)
//         if (num % i === 0)
//           return false; 
//     return num > 1;
// }


// console.log(isPrime([1, 2, 3, 4, 5, 6, 7, 8, 9]));

