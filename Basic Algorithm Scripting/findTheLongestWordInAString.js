function findLongestWord(str) {
  var wordsArray = str.split(' ');
  var biggestNumber = 0;
  for (var i in wordsArray) {
    if (wordsArray[i].length > biggestNumber) {
      biggestNumber = wordsArray[i].length;
    }
  }
  return biggestNumber;
}

findLongestWord('The quick brown fox jumped over the lazy dog');