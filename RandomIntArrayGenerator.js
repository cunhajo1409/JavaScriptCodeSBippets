/*
Generate an array of n random integers between min and max
*/

function RadomIntArrayGenerator(arrLength, maxInt, minInt = 1) {
  let arr = [];
  for (i = 1; i < arrLength; i++) {
    min = Math.ceil(minInt); // Round up min to the nearest integer
    max = Math.floor(maxInt); // Round down max to the nearest integer
    newInt = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(newInt);
  }
  return arr;
}

console.log([...RadomIntArrayGenerator(30, 99, 1)]);
