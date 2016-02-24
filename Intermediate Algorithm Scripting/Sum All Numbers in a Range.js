/*Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

*/

function sumAll(arr) {

  var small = Math.min(arr[0], arr[1]);
  var big = Math.max(arr[0], arr[1]);
  var total = 0;

  for (var i = small; i <= big; i++) {
    total += i;
  }
  return total;
}

sumAll([1, 4]);
