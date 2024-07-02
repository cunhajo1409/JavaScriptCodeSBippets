function getDigit(number, position) {
  digitArray = Array.from(String(number).split("").reverse().join(""), Number);
  return position + 1 > digitArray.length ? 0 : digitArray[position];
}

function digitCount(number) {
  return number === 0 ? 0 : Array.from(String(number), Number).length;
}

function maxDigitCount(arr) {
  let maxDigits = 0;
  for (i = 0; i < arr.length; i++) {
    let digiCount = digitCount(arr[i]);
    maxDigits = digiCount > maxDigits ? digiCount : maxDigits;
  }
  return maxDigits;
}

function radixSort(arr) {
  let maxDigiCount = maxDigitCount(arr);
  //    console.log(`Largest number has ${maxDigiCount} digits.`);

  for (let k = 0; k < maxDigiCount; k++) {
    //create and array of length ten where each element is itself an empty array
    let digitBuckets = Array.from({ length: 10 }, () => []);
    //        console.log(`Newly created digitBuckets array = ${digitBuckets}.`);
    for (let i = 0; i < arr.length; i++) {
      //for each interation, evaluate the digit and the current number in the array at position k
      //and push the number at i in the array into the corresponding bucket
      /*
        console.log(
         `Calling getDigit for position ${k + 1} of number ${arr[i]}. `
      );
*/
      let thisDigit = getDigit(arr[i], k);
      //        console.log(`pushing value ${arr[i]} into digitBuckets ${thisDigit}.`);
      digitBuckets[thisDigit].push(arr[i]);
      //        console.log(`Bucket ${thisDigit} = ${digitBuckets[thisDigit]}.`);
    }

    //    console.log(digitBuckets);
    arr = [].concat(...digitBuckets);
    //    console.log(`${arr}\n`);
  }
  return arr;
}

// let number = 577;
// let position = 3;
// console.log(`The ${position} digit of number ${number} is ${getDigit(number,position)}.`)

// let arr = [76889,678,45,7,23,1267]
// console.log(`Largest number of digits of any number in ${arr} is ${maxDigitCount(arr)}.`)

let inArray = [
  64, 85, 38, 28, 87, 79, 93, 5, 6, 43, 41, 2, 31, 66, 13, 52, 73, 63, 44, 10,
  24, 24, 91, 22, 78, 25, 27, 30, 44,
];
console.log(radixSort(inArray));
