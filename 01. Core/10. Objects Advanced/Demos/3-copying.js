// Case 1
// Which of these are a valid way to shallow copy an object?
const original = {
  year: 1889,
  title: 'The Starry Night',
  artist: 'Vincent van Gogh',
  colors: ['red', 'blue']
}

const copy1 = Object.assign({}, original);

const copy2 = {
  ...original,
  ...copy1,
  year: 2000
};

//destructuring
const { title, ...copy3 } = original;
console.log(title);
console.log(copy3)

// copy4 holds reference to the original object
const copy4 = original;
// copy4.year = 2022;

copy1.colors.push('yellow');
// console.log(original);

// deep copy! Be careful with different types when stringifying
const copy5 = JSON.parse(JSON.stringify(original));
console.log(copy5);
console.log(original);
copy5.colors.push('purple');
console.log(copy5);
console.log(original);

// Case 2
// Create object with object literal
const personPlain = {
  name: 'Maria',
  age: 25,
  sayHello: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};

// Add property courses
personPlain.courses = ['Math'];

// Shallow copy
const personShallow = Object.assign({}, personPlain);
const personShallowSpread = { ...personPlain };

// Deep copy, but without functions!
const personDeep = JSON.parse(JSON.stringify(personPlain));


console.log(`\nObject literal`);
console.log(personPlain);

console.log(`\nShallow copy`);
console.log(personShallow);

console.log(`\nShallow copy Spread operator`);
console.log(personShallowSpread);

console.log(`\nDeep copy [Without functions]`);
console.log(personDeep);

personPlain.sayHello();
