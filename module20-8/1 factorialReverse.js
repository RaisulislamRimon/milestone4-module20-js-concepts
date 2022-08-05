/* 20-8 Factorial using a while loop or a decrementing loop */

/* 
function factorial(number) {
  let result = 1;
  while (number >= 1) {
    result *= number;
    number--;
  }
  return result;
}

let factorialResult = factorial(9);
console.log(factorialResult);
 */

function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result *= i;
  }
  return result;
}

let factorialResult = factorial(9);
console.log(factorialResult);

/* 
function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result = result * i;
    console.log(i);
  }
  //   console.log(result);
  return result;
}
let factorialResult = factorial(9);
console.log(factorialResult);
 */
