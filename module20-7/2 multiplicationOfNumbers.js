function multiplicationOfNumbers(nums) {
  let result = 1;
  for (let i = 1; i <= nums; i++) {
    // result += i;
    result *= i;
  }
  return result;
}
var result = multiplicationOfNumbers(7);
console.log(result);
