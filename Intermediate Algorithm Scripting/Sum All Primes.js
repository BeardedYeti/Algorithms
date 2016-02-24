/*Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.*/

function sumPrimes(num) {

  var primes = [];
  var total = 0;

  for(var i = 2; i <= num; i++) {
    var isPrime = true;
    for(var l = 2; l < i; l++) {
            if(i % l === 0) {
        isPrime = false;
      }
    }
      if(isPrime) {
        primes.push(i);
      }
  }
  for(var j = 0; j < primes.length; j++) {
    total += Number(primes[j]);
  }
  return total;
}



sumPrimes(10);
