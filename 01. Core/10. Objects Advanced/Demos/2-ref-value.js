// types -> primitive (number, string, boolean, undefined, null) 
// referenced -> arr, objects, functions
let a = 10
let b = 20
let c = [1, 2]
let d = c
d.push(3)

a = [1, 2]
b = [1, 2]
console.log(a === b)
// what is the result & why?

a = [1, 2]
b = a
console.log(a === b)
// now it is okay

const hundred = 100;
const two = 2;
const multiply = (x, y) => x * y;

const twoHundred = multiply(hundred, two);

const person = {
  name: "Alex",
  age: 25
}

const growUp = person => {
  person.age++;
  return person;
}

console.log(person);
console.log(growUp(person));
console.log(person);

// impure - how to fix this? 

const growUpPure = person => {
  const newPersonObj = JSON.parse(JSON.stringify(person));
  newPersonObj.age++;
  return newPersonObj;
}

console.log(person);
console.log(growUpPure(person));
console.log(person);

// test yourself
const changeAgeAndReference = person => {
  person.age = 25;
  person = {
    name: 'John',
    age: 50
  };

  return person;
}

const personObj1 = {
  name: 'Alex',
  age: 30
};

const personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); // -> ?
console.log(personObj2); // -> ?