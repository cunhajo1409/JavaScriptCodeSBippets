// function SearchLinear
// simple linear search
/*
    Function that takes and array ( we can not be sure its sorted )
    and determines if the target value is contained in the array.
*/

/*
    using for each has to be handled this way because forEach will not short circuit
    when a condition inside the function is met or a return is issued
*/

/*
function SearchLinear(inArr, target)
{   let found = false;

    inArr.forEach(function(x,i)
    {
        if (inArr.includes(target)) found = true;
    })

    return found;
}
*/

/* for of does short circuit and can be handle in the more intuitive way
 */
/*
function SearchLinear(inArr, target)
{
    for (let x of inArr)
        {
            if (x==target)
                {   
                    return true;
                    break;
                }
        }
    return false;
}
*/

/* can also use some method to acheive short circuit linear search
 */

function SearchLinear(inArr, target) {
  return inArr.some((num) => {
    if (num === target) {
      return true; // This will exit the some loop
    }
    return false;
  });
}

console.log(
  SearchLinear([1, 5, 7, 9, 23, 76, 84, 67, 93, 102, 45, 71, 3, 234], 84)
);
