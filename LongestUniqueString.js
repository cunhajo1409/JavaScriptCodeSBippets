// LongestUniqueString
/* Given a string, find the longest string of unique characters within the string
 Examples:
 "hellothere" would return "lother"
 "excellent idea" would return "lent id"
  
 Use Sliding Window Pattern
 */

function LongestUniqueString(inStr) {
  if (inStr.length == 0) return null;

  if (inStr.length < 2) return inStr;

  const charArr = [...inStr];

  //   console.log(`\n           0123456789`);
  //   console.log(`charArr = "hellothere"`);
  //   console.log(`charArr.slice(0,1).join('')     h`);
  //   console.log(`charArr.slice(0,2).join('')     he`);
  //   console.log(`charArr.slice(0,3).join('')     hel`);
  //   console.log(`charArr.slice(3,5).join('')     lo`);
  //   console.log(`charArr.slice(3,6).join('')     lot`);
  //   console.log(`charArr.slice(3,7).join('')     loth`);
  //   console.log(`charArr.slice(3,8).join('')     lothe`);
  //   console.log(`charArr.slice(3,9).join('')     lother`);
  //   console.log(`charArr.slice(3,10).join('')    lothere`);

  let curStart = 0;
  let curIndex = 1;
  let loopCtr = 1;

  let max = 0;
  let maxStr = "";

  while (curIndex < charArr.length) {
    tstArr = charArr.slice(curStart, curIndex);

    // console.log(`\nLoop number: ${loopCtr}`);
    // console.log(`curStart = ${curStart}`);
    // console.log(`curIndex = ${curIndex}`);
    // console.log(`current string (tstArr) = ${tstArr.join("")}`);
    // console.log(`compare index (curIndex) = ${curIndex}`);
    // console.log(`compare character (charArr[curIndex]) = ${charArr[curIndex]}`);

    if (tstArr.includes(charArr[curIndex])) {
      //   console.log(`Dupe found`);
      curStart = curIndex;
      maxStr = tstArr.length > max ? tstArr.join("") : maxStr;
      max = tstArr.length > max ? tstArr.length : max;
    } else {
      //   console.log("No dupe found");
    }

    curIndex++;
    loopCtr++;
  }

  return console.log(
    `\n String = ${charArr.join(
      ""
    )}\n Longest Unique String = ${maxStr}\n Longest Unique String Length = ${max}\n`
  );
}

LongestUniqueString("herewegoagaindammnit!");
