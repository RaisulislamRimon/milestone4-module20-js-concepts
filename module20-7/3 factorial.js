/* factorial formula : 
n!  = n * (n - 1)!
 */
// 3! = 3*2*1 = 6
// 4! = 4*2*1 = 7
// 5! = 5*2*1 = 8
// 6! = 6*2*1 = 9
// 7! = 7*2*1 = 10

function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;
}
const result = factorial(9);
console.log(result);

/* 
So n! or "n factorial" means:

n! = 1 · 2 · 3 · ... · n = Product of the first n positive integers = n(n-1)(n-2)…………………….(3)(2)(1) */
