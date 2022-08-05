// 20-3 Check even and odd number using function

/* function isEven(number) {
  const remainder = number % 2;
  console.log(remainder);
}

isEven(30);
isEven(31); */

/* function isEven(value) {
  console.log(value);
  return value % 2 === 0;
} 

var checkEven = isEven(30);
console.log(checkEven, typeof checkEven);
var checkEven = isEven(23);
console.log(checkEven, typeof checkEven);
var checkEven = isEven(24);
console.log(checkEven, typeof checkEven);
*/
/* 
function isEven(num) {
  var remainder = num % 2;
  console.log(remainder);
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}

var checkEven = isEven(30);
// var checkEven = isEven(31);

// if (checkEven===true) {
if (checkEven) {
  console.log("Even");
} else {
  console.log("Odd");
}
 */

function isEven(num) {
  var remainder = num % 2;
  console.log(remainder);
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}

var checkEven = isEven(30);
console.log(checkEven);
var checkEven = isEven(31);
console.log(checkEven);
