const { List } = require('immutable');
const { cloneDeep } = require('lodash');

const colors = {
  red: 'red',
  white: 'white',
  blue: 'blue',
};

const cars = [
  {
    make: 'BMW',
    hp: 200,
    color: colors.red,
  },
  {
    make: 'Opel',
    hp: 120,
    color: colors.white,
  },
  {
    make: 'Kia',
    hp: 200,
    color: colors.blue,
  },
];


const carsImmutable = List(cars);
console.log(`Length before push of immutable array: ${carsImmutable.size}`);

carsImmutable.push(1);
console.log(`Length after push of immutable array: ${carsImmutable.size}`);

const newCarsImmutable = carsImmutable.reduce((acc, car) => {
  // Clone the car object. New copy
  const newCar = cloneDeep(car);

  // Create a new list
  acc = acc.push(newCar);

  return acc;
}, List([]));

// Change the first element of cars array
cars[0].make = 'BMW 3';

console.log(`First element of cars array: ${cars[0].make}`);
console.log(`First element of carsImmutable array: ${newCarsImmutable.get(0).make}`);



