/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.*/

function smallestCommons(arr) {

  var min;
  var max;

  if(arr[0] > arr[1]) {
    max = arr[0];
    min = arr[1];
  } else {
    min = arr[0];
    max = arr[1];
  }


  function range(min, max) {
    var arrRange = [];
    for(var i = min; i <= max; i++) {
      arrRange.push(i);
    }
    return arrRange;
  }

  function gcd(x, y) {
    return !y ? x : gcd(y, x % y);
  }

  function scm(x, y) {

    return (x * y) / gcd(x, y);
  }

  var result = min;
  range(min, max).forEach(function(n) {
    result = scm(result, n);
  });
  return result;
}



smallestCommons([1, 13]);
