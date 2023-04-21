const counter = (function () {
  let count = 0;

  return {
    // You have to return the counter as a function, otherwise it will not create a closure and the counter won't be updated
    getCount: function () {
      return count;
    },
    increment: function () {
      count++;
    },
    reset: function () {
      count = 0;
    }
  }
}());

console.log(counter.getCount());
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount());
counter.reset();
console.log(counter.getCount());
