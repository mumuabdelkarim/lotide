const assertEqual = function(actual, expected) {


  if (actual === expected) {
    console.log("Assertion Passed");

  } else
    console.log("Assertion Failed");
};
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
console.log("\n---\n");


let eqArrays = function(actualArray, expectedArray){
  if (actualArray.length !== expectedArray.length){
    return false;
  }

 for (let i = 0; i < actualArray.length; i++){
  if (actualArray[i] !== expectedArray[i]){
    return false;
  } 
 }
 return true;
}

assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays([1,2], [1,2,3]), false);
assertEqual(eqArrays([1,2,3], [1,2]), false);
assertEqual(eqArrays([1,2,3], [1,2,"3"]), false);