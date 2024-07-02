// function sumZero
// multiple pointer pattern
/*
Write a function called sumZero which accepts a SORTED array of integers. The fubction should find the first pai where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
*/
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  //  console.log(`left = ${left}, right = ${right}`);
  //  let loopCtr = 1;

  while (left < right) {
    //    console.log(`Loop ${loopCtr}`);
    //    console.log(`: left = ${left}, right =  ${right}, sum = $ `);
    let sum = arr[left] + arr[right];
    //    console.log(`sum = ${sum}`);
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
      //      console.log(`right-- : ${right}`);
    } else {
      left++;
      //      console.log(`left++ : ${left}`);
    }
    //    loopCtr++;
  }
}

let result = sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]);
console.log(result);
