/*Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.*/

function translate(str) {

  var wordArr = str.split("");
  var vowels = /[aeiou]/gi;

  if(wordArr[0].match(vowels)) {
    return wordArr.join("") + "way";
  } else {
    var cons = str.indexOf(str.match(vowels)[0]);
    return str.substr(cons) + str.substr(0, cons) + "ay";
  }

  return str;
}

translate("glove");
