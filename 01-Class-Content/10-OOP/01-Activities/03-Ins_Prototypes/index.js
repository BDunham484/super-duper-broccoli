// Prototype methods on constructor function

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
}

Dog.prototype.nap = function () {
  console.log('Zzzzzzzzz');
};

const dog = new Dog('Rex', 2, 'Bulldog');

dog.nap();
