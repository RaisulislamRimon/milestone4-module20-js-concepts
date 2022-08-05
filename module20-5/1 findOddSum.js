/* 20-5 Calculate Sum of all numbers of an array */
// Practice Problem 3

// function getSumOfAnArray(numbers) {
//   //   console.log("getSumOfAnArray: " + numbers);
//   console.log(numbers);
//   /* for (var i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//   } */
//   numbers.forEach((number) => {
//     console.log(number);
//   });
// }

// var numbers = [5, 7, 8, 10, 45, 30];
// getSumOfAnArray(numbers);
/* 
function getSumOfAnArray(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    // total = total + numbers[i];
    total += numbers[i];
  }
  // console.log(total);
  return total;
}

var numbers = [5, 7, 8, 10, 45, 30];
var result= getSumOfAnArray(numbers);
console.log(result); */

/* 
var numbers = [5, 7, 8, 10, 45, 30];
var result = numbers.reduce((total, number) => {
  return total + number;
}, 0);
console.log(result);
 */
/* 
function myNumbers(num) {
  console.log(num);
}

var numbers = [5, 7, 8, 10, 45, 30];

myNumbers(10);
 */
/* 
function myNumbers(num) {
  var total = 0;
  for (var i = 0; i < num.length; i++) {
    total = total + num[i];
  }
  return total;
}

var numbers = [5, 7, 8, 10, 45, 30];

var sum = myNumbers(numbers);
console.log(sum);
 */

var numbers = [5, 7, 8, 10, 45, 30];

var sum = numbers.reduce((total, number) => {
  return (total += number);
}, 0);
console.log(sum);
