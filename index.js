// Time complexity: O(n)
// Space complexity: O(n)
function hasTargetSum(array, target) {
  const seenNumbers = new Set(); // initialize an empty Set
  for (const number of array) {
    const complement = target - number;
    // .has returns true if the Set includes the complement
    if (seenNumbers.has(complement)) return true;

    // .add adds the number to the Set
    seenNumbers.add(number);
  }
  return false;
}

// Runtime: 0(n)
// function hasTargetSum (arr, target) {
//   const obj = {};
//   for (const num of arr) {
//     // n steps 
//     const complement = target - num;
    
//     if (complement in obj) return true;
//     obj[num] = true
//   }
//   return false
// }


/* 
  Write the Big O time complexity of your function here
  Runtime: 0(n^2) = O(n²) - input bigger runtime worse
  Space: 0(n)
*/

/* 
  Add your pseudocode here

  create an object to keep track of all the numbers we've seen
  iterate over the array of numbers
    for the current number, identify a complementary number that adds to our target
    (for example: if our number is 2, and the target is 5, the complementary number is 3)
    check if any of the keys in our object is the complement to the current number
      if so, return true
    save the current number as the key on our object so we can check it later against other numbers
  if we reach the end of the array, return false

  // hasTargetSum([22, 19, 4, 6, 30],25)
  // iterate through each num to identify a complement
  // if key of complement exists in obj

*/

/*
  Add written explanation of your solution here
  make a function that checks
  
  function hasTargetSum(array, target) {
  // iterate over the array of numbers
  for (let i = 0; i < array.length; i++) {
    //  n steps
    // for the current number, identify a complementary number that adds to our target
    // (for example: if our number is 2, and the target is 5, the complementary number is 3)
    const complement = target - array[i];
    // iterate over the remaining numbers in the array
    for (let j = i + 1; j < array.length; j++) {
      // check if any of the remaining numbers is the complement
      // if so, return true
      // n * n steps / O(n²)
      if (array[j] === complement) return true;
    }
  }
  // if we reach the end of the array, return false
  //1 step
  return false;
}
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
