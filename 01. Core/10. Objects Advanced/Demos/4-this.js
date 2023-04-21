// what is this
// you could refer to the object itself by using it
// only available in function calls
// functions MUST NOT be arrow functions


/* 
Functions that are stored in object properties are called “methods”.
Methods allow objects to “act” like object.doSomething().
Methods can reference the object as this.
The value of this is defined at run-time.

When a function is declared, it may use this, but that this has no value until the function is called.
A function can be copied between objects.
When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.
*/



const art1 = {
  year: 1889,
  title: 'The Starry Night',
  artist: 'Vincent van Gogh',
  colors: ['red', 'blue'],
  owner: {
    name: 'Pesho',
    generateInfo() {
      return `${this.name} owns painting ${art1.title}`
    }
  },
  generateInfo: function() {
    return `${this.title} by ${this.artist}`
  }
}


console.log(art1.generateInfo());
console.log(art1.owner.generateInfo());

const art2 = {title: 'Some title'}
art2.generateInfo = art1.generateInfo;

console.log(art2.generateInfo());


const weirdExample = {
  name: 'Dr. Strange',
  someFn: function fnNormal (){
    console.log("******" + this.name)
  },
  fnCollection: [() => console.log(this.name), () => console.log(this), function fnNormal (){
    console.log(this.name)
  }]
}

weirdExample.someFn();
weirdExample.fnCollection.forEach(fn => fn());
