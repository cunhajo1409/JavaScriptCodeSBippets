// MaxAdjecentSumofNElements
/*  given an array of numbers and an <integer> less the number of elements in the array
    return the sum of <integer> numbers from the array with the highest result 

 Examples:
{ [1,2,5,2,8,1,5],2 } would return 10
{ [1,2,5,2,8,1,5],4 } would return 17
{ [4,2,1,6],1 } would return 6
{ [4,2,1,6,2],4 } would return 13
{ [],4 } would return null


*/

function MaxSubArraySum2Pointers(inArr, cnt) {
  if (cnt > inArr.length) {
    return null;
  }
  let max = -Infinity;
  let cntStart = 0;
  let cntEnd = cntStart + (cnt - 1);
  let loopCtr = 1;
  let sum = 0;
  while (cntEnd <= inArr.length) {
    if (cntEnd > inArr.length - 1) {
      break;
    }
    console.log(`\nWhile Loop : ${loopCtr}`);
    sum = 0;
    for (let i = cntStart; i <= cntEnd; i++) {
      sum += inArr[i];
    }
    console.log(
      `Sum started at ${cntStart} and ended at ${cntEnd} for total of ${sum}.`
    );
    if (sum > max) {
      console.log(`Max ${max} replaced with ${sum}`);
      max = sum;
    } else {
      console.log(`Max ${max} remains, sum = ${sum}`);
    }
    cntStart++;
    cntEnd++;
    loopCtr++;
  }

  return max;
}

function MaxSubArraySlidingWindow(inArray, cnt)
{
    
}

console.log(MaxSubArraySum2Pointers([1, 2, 5, 2, 8, 1, 5], 2));
