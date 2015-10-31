function repeat(str, num) {
    var a = [];
    while(a.length < num){
        a.push(str);
    }
    return a.join('');
}

repeat('abc', 3);