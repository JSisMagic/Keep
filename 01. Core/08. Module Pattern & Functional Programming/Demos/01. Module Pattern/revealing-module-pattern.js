const counter = (function () {
  let count = 0;

  // You have to return the counter as a function, otherwise it will not create a closure and the counter won't be updated
  const getCount = function () {
    return count;
  }

  const increment = function () {
    count++;
  };

  const reset = function () {
    count = 0;
  };

  // Reveal only what you need. Everything else is private
  // Easier to read and understand what is private and what no
  return {
    getCount,
    increment,
    reset,
  }
}());

console.log(counter.getCount());
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.reset();
console.log(counter.getCount());
