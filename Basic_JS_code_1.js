let a = "I'm learning JS";
let b = "Hello";
("I'm learning JS");
console.log("some\ntext");
let c = `${b}, my name is Alex`;
console.log(c);

//EX 3 ---- STRINGS

let myNameText = "My name is:";
let myFirstName = "Oleksandr";
let myGreeting = myNameText + myFirstName;

let coffeePrice = 5;
let bagelPrice = 3;
console.log("Total costs:$" + (coffeePrice + bagelPrice));

//Interpolation
console.log(`Total costs:$${coffeePrice + bagelPrice}`);

let coffeePrice1 = 5.99 * 100;
let bagelPrice1 = 2.95 * 100;
console.log("Total costs:$" + (coffeePrice1 + bagelPrice1) / 100);

console.log(`Total costs:$ ${(coffeePrice1 + bagelPrice1) / 100}`);

`Thank you!!!

Come again.`;

//Challenge Exercises

let basketballPrice = 20.95 * 100;
let basketballAmount = 2;
let shippingPrice = 4.49 * 100;
let tShirtPrice = 7.99 * 100;
let tShirtAmount = 2;

alert(
  `Items ${
    tShirtAmount + basketballAmount
  }:                                                   $${
    (basketballAmount * basketballPrice + tShirtPrice * tShirtAmount) / 100
  }
Shipping & handling:                              $${(shippingPrice * 2) / 100}
                                                                _______
Total before tax:                                       $${
    (basketballAmount * basketballPrice + tShirtPrice * tShirtAmount) / 100 +
    (shippingPrice * 2) / 100
  }
Estimated tax (10%):                                $${
    Math.round(
      (basketballAmount * basketballPrice +
        tShirtPrice * tShirtAmount +
        shippingPrice * 2) *
        0.1
    ) / 100
  } 
-------------------------------------------------------

ORDER TOTAL:                                           $${
    Math.round(
      basketballAmount * basketballPrice +
        tShirtPrice * tShirtAmount +
        shippingPrice * 2 +
        (basketballAmount * basketballPrice +
          tShirtPrice * tShirtAmount +
          shippingPrice * 2) *
          0.1
    ) / 100
  }
`
);
