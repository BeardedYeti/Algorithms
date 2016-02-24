/*Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, add(2, 3) should return 5, and add(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = add(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.*/

function add() {
  //If only 1 arg and its a number
  if(arguments.length === 1 && typeof arguments[0] === 'number') {
    //Store singular number
    var stored1 = arguments[0];
    //Return Function
    var returned = function(stored2) {
      //Return only if stored2 is a number
      if(typeof stored2 === 'number') {
        return stored1 + stored2;
      }
    };
    return returned;
  } else if(typeof arguments[0] === 'number' && typeof arguments[1] === 'number') {
    //returns the sum of the two input numbers
    return arguments[0] + arguments[1];
  }
}

add(2,3);
