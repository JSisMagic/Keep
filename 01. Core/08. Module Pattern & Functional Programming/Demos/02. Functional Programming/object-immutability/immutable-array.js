const primes = [2, 3, 5, 7, 11, 13, 17, 19];

// This will freeze all flat methods and properties on the array making them non-modifiable
Object.freeze(primes);

primes[0] = 1;
console.log(`First prime: ${primes[0]}`); // 'First prime: 2

const primesLength = primes.length;
try {
  primes.push(23);
} catch (error) {
  // push, pop, shift and unshift will throw an error
  console.log(primes.length === primesLength); // true, array hasn't changed
}
