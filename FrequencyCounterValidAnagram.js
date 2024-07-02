// Frequency Counter - validAnagram
/* Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
// Note: You may assume the string contains only lowercase alphabets.

// Time Complexity - O(n)
*/

/* Plan:
  use the frequency counter pattern, prefereably using advanced functions (.reduce on a array of acharcters)
  in other words count frequency of each character in each string removing characters or special or numbers, and if their frequency match, they can be said to be anagrams of each other. */

const strWord1 = "night";
const strWord2 = "thing";

//console.log([...strWord1]);
//console.log([...strWord2]);

// function using reduce on array of charcters to catalog charcters and frequency
// in this case using only uppers and lowers
function calcStrInventory(str, lowers, uppers, numbers, specials) {
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
        (charIsLower && lowers) ||
        (charIsUpper && uppers) ||
        (charIsNumber && numbers) ||
        (!charIsAlpha && !charIsNumber && specials)
      ) {
        acc[char] = 1;
      }
    }

    return acc;
  }, {});
}

//create inventory of charaters for each string
const objWord1 = calcStrInventory([...strWord1], true, true, false, false);
const objWord2 = calcStrInventory([...strWord2], true, true, false, false);

//console.log(objWord1);
//console.log(objWord2);

//compare inventory of characters.
//objects must have same characters in the same frequency

// function first checks if obj1 and obj2 have the same number of elements
// then ensure all the  elements from obj1 exist in obj2 and with the sme value
function areObjectsEqual(obj1, obj2) {
  for (const key in obj1) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    } else {
      if (obj1.hasOwnProperty(key)) {
        if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
          return false;
        }
      }
    }
  }
  return true;
}

console.log(areObjectsEqual(objWord1, objWord2));
