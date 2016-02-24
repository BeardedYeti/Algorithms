/*Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.*/

function unite(arr1, arr2, arr3) {
  var union = arr1;
  for(var i = 0; i < arguments.length; i++) {
    for(var l = 0; l < arguments[i].length; l++) {
      if(union.indexOf(arguments[i][l]) === -1) {
        union.push(arguments[i][l]);
      }
    }
  }
  return arr1;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
