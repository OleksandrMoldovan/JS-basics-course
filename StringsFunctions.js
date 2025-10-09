//EX1
let myFirstName = "oleh";
console.log(
  `First Name is upperrcase is ${
    myFirstName.slice(0, 1).toUpperCase() + myFirstName.slice(1)
  }`
);

//EX2

let txt = "Learning JavaScript is fun";
if (txt.includes("JavaScript") === true) {
  console.log("JS in here");
} else console.log("NO JS NO MONEY");

//EX3

let EX3 = "frontend developer";
console.log(EX3.indexOf("d"));

//EX 4

let EX4 = "Hello, World!";
console.log(EX4.slice(7, -1));

//Ex 5

let EX5 = "      Oleksandr REAL GANGSTA       ";
console.log(EX5.trim());

//EX 6
let Ex6 = "I love cats. Cats are the best creatures in the whole universe.";
console.log(Ex6.replace(/cats/gi, "butterflies"));

//EX 7
let EX7 = "apple,banana,orange,pear, peach, lemon";
console.log(EX7.split(","));
