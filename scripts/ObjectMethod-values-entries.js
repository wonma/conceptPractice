let obj = {
  username0: 'Wonmi',
  username1: 'Josh',
  username2: 'Maru'
};

console.log(Object.values(obj));
// returns an array of strings   ['Wonmi', 'Josh', 'Maru']

console.log(Object.entries(obj));
// returns an array of arrays.
// --- index 0 에 해당되는 array item: ['username0', 'Wonmi']
// --- index 1 에 해당되는 array item: ['username1', 'Josh']
// --- index 2 에 해당되는 array item: ['username2', 'Maru']

Object.values(obj).forEach(value => {
  console.log(value);
}); // returns an array of values.

Object.entries(obj).forEach(array => {
  console.log(array);
}); // returns an array of arrays where there's a set of property and value

//--------- Mission -------------//
//--------- [Wonmi0, Josh1, Maru2] 를 얻어라

//--------- Method 1
var newArray = Object.entries(obj).map((array, index) => {
  return array[1] + index.toString();
});
console.log(newArray); // returns an array of modified value.

//--------- Method 2
var newArray2 = Object.entries(obj).map(array => {
  return array[1] + array[0].replace('username', '');
});
console.log(newArray2);
