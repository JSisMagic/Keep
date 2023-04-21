// Library for immutable objects/collections https://github.com/facebook/immutable-js
const { List } = require('immutable');

const list = List([1, 2, 3]);

list.push(5);

console.log(`List is not mutated: ${list}`);

const listNew = list.push(5);

const listNewJS = [...list, 5];

console.log(`Instead a new list is returned with Immutable.js: ${listNew}`);
console.log(`Instead a new list is created with spread operator: ${listNewJS}`);
