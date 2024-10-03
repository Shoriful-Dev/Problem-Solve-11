/* Write a Function called calculateMenu that takesan array of numbers as input and returns the mean 
 (average) of those numbers. */


const calculateMean = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let sum = arr.reduce((accum, curElem) => accum + curElem, 0);
  return sum / arr.length;
}

console.log(calculateMean([1,2,3,4,5])); // Output: 3
console.log(calculateMean([10,20,30])); // Output: 20
console.log(calculateMean([-1,0,1])); // Output: 0
console.log(calculateMean([])); // Output: 0

