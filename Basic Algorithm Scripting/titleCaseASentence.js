function titleCase(str) {
  var arr = str.split(' ');
  var txt = '';
  for (var i = 0; i < arr.length; i++) {
    txt += arr[i].charAt(0).toUpperCase() + arr[i].substring(1).toLowerCase() + ' ';
  }
  return txt.trim();
}

titleCase("I'm a little tea pot");