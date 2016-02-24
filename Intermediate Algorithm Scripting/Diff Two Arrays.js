/*Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
In other words, return the symmetric difference of the two arrays.*/

function diff(arr1, arr2) {
  var newArr = [];
  for(var i = 0; i < arr1.length; i++) {
    if(arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i]);
    }
  }
  for(var l = 0; l < arr2.length; l++) {
    if(arr1.indexOf(arr2[l]) === -1) {
      newArr.push(arr2[l]);
    }
  }

  // Same, same; but different.
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
