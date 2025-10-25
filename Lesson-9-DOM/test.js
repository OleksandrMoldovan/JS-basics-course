// const createDog = (newDogName, NewDogAge) => {
//   const newObj = {
//     name: newDogName,
//     age: NewDogAge,
//   };
//   return newObj;
// };

// console.log(createDog("Rex", 33));
// console.log(createDog("Iov", 22));

class Dog {
  constructor(dogName, dogAge, dogType) {
    this.name = dogName;
    this.age = dogAge;
    this.type = dogType;
  }
  bark() {
    console.log(`Woof. My name is ${this.name}`);
  }
}

const dog4 = new Dog("Lucky2", 5, "Taxist2");
console.log(dog4);
//console.log((dog4.bark = "Abracadabra umbra umbra bra"));


dog4.bark();
