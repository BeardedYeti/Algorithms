// Cross Add
// Go over everything once
// O(n)

function crossAdd(input) {
	var answer = [];
	for (var i = 0; i < input.length; i++) {
		var goingUp = input[i];
		var goingDown = input[input.length-1-i];
		answer.push(goingUp + goingDown);
	}
	return answer;
}

var arr = [1, 2, 3];
crossAdd(arr);