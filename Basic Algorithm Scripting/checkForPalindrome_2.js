function palindrome(str) {
var formatString = str.toLowerCase().replace(/\W|_/g, '');
var palindromeTest = formatString.split('').reverse().join('');
  
  if (palindromeTest === formatString) {
    return true;
  } else {
    return false;
  }
}



palindrome("eye");