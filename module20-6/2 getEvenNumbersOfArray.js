function getEvenNumbersFromArray(numbers) {
  const EvenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element % 2 === 0) {
      console.log(index, element);
      EvenNumbers.push(element);
    }
  }
  return EvenNumbers;
  // console.log(EvenNumbers);
}
const myNumbers = [12, 65, 45, 78, 32, 45, 91];
var resultOfEvenNumbers = getEvenNumbersFromArray(myNumbers);
console.log(resultOfEvenNumbers);
