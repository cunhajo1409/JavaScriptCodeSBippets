// function countUniqueValues
// multiple pointer pattern
/*
Implement a functioncalled countUniqueValues, which accepts a sorted array, and counts the unique value in the array.
there can be negative numbers in the array, but it will always be sorted.
*/

function CountUniqueValues(inArr) {
  let curPntr = 0;
  let nxtPntr = 1;
  let loopCtr = 1;

  while (nxtPntr < inArr.length) {
    console.log(`Loop count: ${loopCtr}.`);
    console.log(
      `current index: ${curPntr} \n current value: ${inArr[curPntr]}\n next index : ${nxtPntr}\n next value : ${inArr[nxtPntr]}`
    );

    if (inArr[curPntr] === inArr[nxtPntr]) {
      console.log(`Same, move next:`);
      nxtPntr++;
      console.log(`increment next to : ${nxtPntr}`);
    } else {
      if (nxtPntr == curPntr + 1) {
        console.log(`Different adjacent:`);
        curPntr++;
        nxtPntr++;
        console.log(`Not equal adjacent values, increment both:`);
        console.log(`Current to: ${curPntr + 1}, next to ${nxtPntr + 1}.`);
      } else {
        console.log(`Different, non-adjacent:`);

        curPntr++;
        //let newElement = inArr.splice(nxtPntr, 1)[0];
        let newElement = inArr[nxtPntr];
        console.log(`newElement = ${newElement}`);
        inArr.splice(curPntr, 1, newElement);
        nxtPntr++;

        console.log(
          `Move nxtValue to current.\nDelete next value.\nIncrement curPntr to + 1`
        );
      }
    }
    loopCtr++;
    console.log(`new array:`);
    console.log(inArr);
    console.log(`\n`);
  }
  //return inArr;
  return inArr.splice(0, curPntr + 1).length;
}

//console.log(CountUniqueValues([1, 1, 1, 2, 3, 3, 4, 4, 5, 6]));
//console.log(CountUniqueValues([1, 2]));
console.log(CountUniqueValues([1, 2, 3, 4, 7, 12, 13]));
//console.log(CountUniqueValues([ ]));
//console.log(CountUniqueValues([-2, -1, 0, 1]));
