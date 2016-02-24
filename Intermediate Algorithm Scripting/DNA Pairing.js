/*The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.*/

function pair(str) {
  var dnaArr = [];
  str = str.split("");
  for (var i = 0; i < str.length; i++) {
    dnaArr.push([str[i], pairing(str[i])]);
  }
  function pairing(basePairs) {

    switch (basePairs) {
      case 'A':
        return 'T';
      case 'C':
        return 'G';
      case 'G':
        return 'C';
      case 'T':
        return 'A';
    }
  }


  return dnaArr;
}

pair("GCG");
