let inArr = [
  93, 97, 26, 63, 65, 35, 64, 33, 16, 73, 65, 76, 66, 95, 77, 42, 36, 97, 63,
  25, 30, 6, 62, 95, 24, 66, 56, 27, 99,
];

function pivot(arr, start = 0, end = arr.length + 1) {
  let pivot = arr[start];
  let swapIdx = start;
  let loopCtr = 1;

  //   console.log(
  //     `start = ${start}, end = ${end}, pivot = ${pivot}, swapIdx = ${swapIdx}.\n`
  //  );
  for (i = start + 1; i < arr.length; i++)
  {
    // console.log(`Loop : ${loopCtr}`);
    // console.log(
    `i = ${i}, i value = ${arr[i]}, start = ${start}, end = ${end}, pivot = ${pivot}, swapIdx = ${swapIdx}.`;
    //    );
    if (pivot > arr[i]) {
      swapIdx++;
      //swap elements at position i and swapIdx
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
      //   console.log(`swapIdx = ${swapIdx}, i = ${i}.\n`);
      //   console.log([...arr]);
    }
  }

  //swap swapIdx and pivot
  [arr[swapIdx], arr[start]] = [arr[start], arr[swapIdx]];
  //   console.log(`swapIdx = ${swapIdx}, i = ${i}.\n`);
  //   console.log([...arr]);

  return swapIdx;
}

function SortQuick(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right); //23
    SortQuick(arr, left, pivotIdx - 1);
    SortQuick(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log([...inArr]);
console.log(SortQuick(inArr));
