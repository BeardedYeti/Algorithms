function palindrome(str) {
  str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  backwards = str.split('').reverse().join('');

  if (str === backwards) {
    return true;
  } else {
    return false;
  }
}



palindrome("eye");