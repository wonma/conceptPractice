const basket = ['apples', 'bananas', 'grapes'];

const detailedBasket = {
  apples: 10,
  bananas: 20,
  grapes: 30
};

// for loop
// for (var i = 0; i < basket.length; i++) {
//   console.log(basket[i]);
// }

// forEach loop
// basket.forEach(fruit => console.log(fruit));

// for..of.. loop ===> Array Only
// for (item of basket) {
//   console.log(item);
// }

// for..in.. loop ===> Array and Object (mostly Object)
for (item in detailedBasket) {
  console.log(item, detailedBasket[item]);
}
