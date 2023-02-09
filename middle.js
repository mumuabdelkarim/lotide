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

// assertArraysEqual

let assertArraysEquals = function(actual, expected){
  if (eqArrays(actual, expected)){
    console.log("Assertion Passed")
  } else {
    console.log("Assertion Failed")

  }
}
assertArraysEquals([1,2,3], [1,2,3]);

let middle = function(array){
 if (array.length <= 2){
 return [];
 } else if (array.length % 2 === 0){
  let i = array.length/2 
  return [array[i - 1], array[i]]
 } else { 
 let i = Math.floor(array.length/2)
 return [array[i]]
 } 
} 
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
middle([1, 2]) // => []
console.log(middle([1, 2]))