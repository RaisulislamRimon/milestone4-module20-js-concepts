/* // 20-2 Unit Convert Inch to Feet, miles to kilometer

const myInch = 84;
const myInch = 84;
const myFeet = myInch / 12;
console.log(myFeet);

const dataInch = 144;
const dataFeet = 144 / 12;
console.log("dataFeet : ", dataFeet);

const nanaInch = 60;
const nanaFeet = 60 / 12;
console.log("NanaFeet : ", nanaFeet);
 */

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}
// let myValue = inchToFeet(84);
const myValue = 84;
inchToFeet(myValue);
console.log(myValue);
console.log(inchToFeet(myValue));
