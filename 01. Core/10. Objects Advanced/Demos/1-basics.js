// Create un object and add some properties
// Objects shape data uniting behavior and state - functions and props
// if Object does not exists - undefined
// Objects we know - Math, arrays, default export, error
//const film = {};
const film = { title: 'The Starry Night' };

// we have intellisense
console.log(film.title);
const year = 1889;
film[year] = 1889;
film['to-be-deleted'] = true;
console.log(film);

// delete property
delete film['to-be-deleted'];
console.log(film);

// check for property - be careful with truthy and falsy!
if ('year' in film) {
  console.log('yes');
}

if (film.hasOwnProperty('year')) {
  console.log('yes');
}

if (film.year === undefined) {
  console.log('yes');
}

// iterate through properties
// for (const key in object) {
//   if (Object.hasOwnProperty.call(object, key)) {
//     const element = object[key];
    
//   }
// }

// lets create complex object
const course = {
  title: 'Math',
  passScore: 85,
  faculty:{
    name: "Math and Calculation",
    dean: {
      name: "Maria Lorry",
      address: {
        street: "Lane Str",
        number: 34,
        phone: +459872636484949
      }
    }
  },
  students:[
    {
      name: "Tom",
      scores: [45, 78, 56]
    },
    {
      name: "Anna",
      scores: [34, 22, 40]
    },
    {
      name: "John",
      scores: [88, 80, 94]
    }
  ]
}

//check chain properties
console.log(course.students[0].name);
console.log(course.faculty?.address?.number);
console.log(course.faculty?.dean?.address?.number);