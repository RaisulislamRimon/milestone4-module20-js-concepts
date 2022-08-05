function multiplicationOfNumbers(nums) {
  let result = 0;
  for (let i = 0; i < nums; i++) {
    // result += i;
    result *= i;
  }
  return result;
}
var result = multiplicationOfNumbers(7);
console.log(result);
