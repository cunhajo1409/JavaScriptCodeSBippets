const inStr =
  "asdg;lkh;lkh1345h;lksADF;LKJHa;lkdsvZCX77etrpp]w[et[oyiqasfdvjha;df9oo9";
const charArray = [...inStr];

const charObject = [...inStr].reduce((acc, char, index) => 
    {

         console.log(`acc = ${acc} , char = ${char}, index = ${index}.`)
        //console.log(acc);
        acc[char] = 0;
        return acc;
    }, 
    {});

console.log(charObject);

// this code counts the number of elements in an object
//
//let count = 0;
//for (const key in charObject) {
//  if (charObject.hasOwnProperty(key)) {
//    count++;
//  }
//}
//console.log(count);

// this code splits the string into an array of objects with char as the key and zero as the  integer,
// one entry for each char in the string even if the character repeats.
//const charObjectArray = charArray.map((char, index) => ({
//  [char]: 0
//}));
//console.log(charObjectArray);
