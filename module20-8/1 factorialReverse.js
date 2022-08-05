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
/* 
function factorial(number) {
  let result = 1;
  for (let i = number; i >= 1; i--) {
    result *= i;
  }
  return result;
}

let factorialResult = factorial(9);
console.log(factorialResult);
 */
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
/* 
function factorial(number) {
  let num = 1;
  let result = 1;
  while (num <= 7) {
    result *= num;
    num++;
  }
  return result;
}
let factorialResult = factorial(9);
console.log(factorialResult);
 */

// factorial using while loop in reverse way

function factorial(number) {
  let num = number;
  let result = 1;
  while (num >= 1) {
    result *= num;
    num--;
  }
  return result;
}
let factorialResult = factorial(9);
console.log(factorialResult);
