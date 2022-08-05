/* 20-6 Get Odd Numbers of an array and get odd Sum of an array */
// getOddNumbersOfArray

/* 
function getOddNumbersOfArray(oddNumbers) {
  for (var i = 0; i < oddNumbers.length; i++) {
    // console.log(oddNumbers[i]);
    if (oddNumbers[i] % 2 !== 0) {
      console.log("odd numbers : ", oddNumbers[i]);
    }
  }
  //   console.log(oddNumbers);
}
var nums = [5, 7, 8, 10, 45, 30];
getOddNumbersOfArray(nums);
 */
/* 
function getOddNumbersOfArray(oddNumbers) {
  var total = 0;
  for (var i = 0; i < oddNumbers.length; i++) {
    if (oddNumbers[i] % 2 !== 0) {
      console.log("odd numbers : ", oddNumbers[i]);
      var element = oddNumbers[i];
      total += element;
    }
  }
  console.log(total);
}
var nums = [5, 7, 8, 10, 45, 30];
getOddNumbersOfArray(nums);
 */

function getOddNumbersOfArray(oddNumbers) {
  var total = 0;
  for (var i = 0; i < oddNumbers.length; i++) {
    if (oddNumbers[i] % 2 !== 0) {
      console.log("odd numbers : ", oddNumbers[i]);
      var element = oddNumbers[i];
      total += element;
    }
  }
  return total;
}
var nums = [5, 7, 8, 10, 45, 30];
var sumOfAllOddNumbers = getOddNumbersOfArray(nums);

console.log("Total of all odd numbers in the array : ", sumOfAllOddNumbers);
