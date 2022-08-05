/* 20-4 Check whether a year is a Leap Year or not (simplified way) */
/* 
function isLeapYear(year) {
  var remainder = year % 4;
  if (remainder === 0) {
    console.log("Leap Year: ", year);
  } else {
    console.log("Not leap year : ", year);
  }
}

isLeapYear(1952);
isLeapYear(1933);
isLeapYear(1960);
 */
/* 
function isLeapYear(year) {
  var remainder = year % 4;
  if (remainder === 0) {
    //   console.log("Leap Year: ", year);
    return true;
  } else {
    //   console.log("Not leap year : ", year);
    return false;
  }
}

var leapYear = isLeapYear(1952);
console.log("Leap Year: ", leapYear);
var leapYear1 = isLeapYear(1933);
console.log("Leap Year: ", leapYear1);
var leapYear2 = isLeapYear(1960);
console.log("Leap Year: ", leapYear2);

 */
/* 
function isLeapYear(year) {
  var remainder = year % 4;
  //   console.log("Leap Year: ", year);
  if (remainder === 0) return true;
  //   console.log("Not leap year : ", year);
  return false;
}

var leapYear = isLeapYear(1952);
console.log("Leap Year: ", leapYear);
var leapYear1 = isLeapYear(1933);
console.log("Leap Year: ", leapYear1);
var leapYear2 = isLeapYear(1960);
console.log("Leap Year: ", leapYear2);
 */

// program to check leap year
function checkLeapYear(year) {
  //three conditions to find out the leap year
  if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
    console.log(year + " is a leap year");
  } else {
    console.log(year + " is not a leap year");
  }
}

// take input via browser using prompt
// const year = prompt('Enter a year:');
const year = 1980;

checkLeapYear(year);
