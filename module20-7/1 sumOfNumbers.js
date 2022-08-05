/* 
let sum = 0;
for (let i = 1; i <= 7; i++) {
  sum += i;
  console.log(i, sum);
}
 */

function sumOfNumbers(nums) {
  let sum = 0;
  for (let i = 1; i <= nums; i++) {
    sum += i;
    console.log(i, sum);
  }
  return sum;
}

sumOfNumbers(7);
