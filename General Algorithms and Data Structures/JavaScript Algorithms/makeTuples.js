//Tuples
// Makes every combination of arrays in an array
// Loop in a loop
// O(n^2)

function makeTuples(input) {
    var answer = [];
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < input.length; j++) {
            answer.push([input[i], input[j]]);
        }
    }
    return answer;
}

makeTuples(arr);