const inStr =
  "asdg;lkh;lkh1345h;lksADF;LKJHa;lkdsvZCX77etrpp]w[et[oyiqasfdvjha;df9oo9";

includeNumbers = false;
includeNonAlpha = false;
includeAlphaUpper = false;
includeAlphaLower = true;

//[...inStr].forEach(x => console.log(`Character = ${x}, ASCII Code = ${x.charCodeAt(0)}.`));

function calcStrInventory(str) {
  return [...str].reduce((acc, char) => {
    charIsLower = char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122;
    charIsUpper = char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90;
    charIsNumber = char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57;
    charIsAlpha = charIsUpper || charIsLower;

    // strCharInfo = `Char: ${char}
    //                ASCII Code: ${char.charCodeAt(0)}
    //                isAlpha: ${charIsAlpha}
    //                isLower: ${charIsLower}
    //                isUpper: ${charIsUpper}
    //                isNumber: ${charIsNumber} .`

    // console.log(strCharInfo)

    if (acc[char]) {
      acc[char]++;
    } else {
      if (
        (charIsLower && includeAlphaLower) ||
        (charIsUpper && includeAlphaUpper) ||
        (charIsNumber && includeNumbers) ||
        (!charIsAlpha && !charIsNumber && includeNonAlpha)
      ) {
        acc[char] = 1;
      }
    }

    return acc;
  }, {});
}

//calcStrInventory(inStr);

console.log(inStr.length > 0 ? calcStrInventory(inStr) : "Empty Input string.");

// this code splits the string into an array of objects with char as the key and zero as the  integer,
// one entry for each char in the string even if the character repeats.
// const charObjectArray = [...inStr].map((char, index) => ({
//  [char]: 0
// }),{});
// console.log(charObjectArray);
