/*Flatten a nested array. You must account for varying levels of nesting.*/

function steamroller(arr) {
  // I'm a steamroller, baby
  var flat = [];
  flatten(arr);
  function flatten(arr) {
    arr.forEach(function(number) {
      if(!Array.isArray(number)) {
        flat.push(number);
      } else {
        flatten(number);
      }
    });
  }
  return flat;
}

steamroller([1, [2], [3, [[4]]]]);
