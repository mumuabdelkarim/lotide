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
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};
