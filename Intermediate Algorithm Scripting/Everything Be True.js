/*Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.*/

function every(collection, pre) {
  // Is everyone being true?
  //Set variable for comparing
  var truth = 0;


  for(var properties in collection) {
    //Checks if collection properties the same property in pre and whether or not they both have a value then sets to true
    if(collection[properties].hasOwnProperty(pre) && (collection[properties][pre])) {
      truth++;
    }
  }
//Returns truth as true if successes are equal to objects
return truth == collection.length;
}
every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
