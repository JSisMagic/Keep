// Utility library for js https://lodash.com/ 
// https://lodash.com/docs/4.17.10
import _ from 'lodash';

let personToModify = {
  name: 'John',
  age: 26,
};

// This will mutate the person object
// Impure function
const addYears = function (person, ageToAdd) {
  person.age += ageToAdd;
}

addYears(personToModify, 10);
console.log('Mutated\n-----------');

console.log(`Original person object ${personToModify.age}`);

// This is a pure function
// It returns completely new object
const addYearsLodash = function (person, ageToAdd) { 
  const personCloned = _.cloneDeep(person);
  personCloned.age += ageToAdd;
  return personCloned;
}

const addYearsVanillaJS = function (person, ageToAdd) { 
  const personCloned = Object.assign({}, person);
  personCloned.age += ageToAdd;
  return personCloned;
}


const personNew = addYearsLodash(personToModify, 10);
const personNewJS = addYearsVanillaJS(personToModify, 10);

console.log('\nNon-mutated\n-----------');
console.log(`Original person object ${personToModify.age}`);
console.log(`New person object ${personNew.age}`);
console.log(`New person object ${personNewJS.age}`);

