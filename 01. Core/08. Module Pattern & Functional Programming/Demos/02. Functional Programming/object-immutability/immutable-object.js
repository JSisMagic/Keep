const person = {
  name: 'John',
  age: 30,
};

// This will freeze all flat methods and properties on the object making them non-modifiable
Object.freeze(person);

person.age = 31;
console.log(person.age); // 30

person.pet = 'Dog';
console.log(person.pet); // undefined