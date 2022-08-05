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

function getSumOfAnArray(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    // total = total + numbers[i];
    total += numbers[i];
  }
  console.log(total);
}

var numbers = [5, 7, 8, 10, 45, 30];
getSumOfAnArray(numbers);
