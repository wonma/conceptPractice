// Goal:
// Understanding 'Pass By Value' and 'Pass By Reference'

// We are talking about one of the important characteristics of 'Object'

// Case 1. The value is primitive type

var a = 5; // <--- primitive type. Passed by Value
var b = a; // SIMPLY COPY the value '5' and keep it somewhere else in the memory
b++;
console.log(a); // 6
console.log(b); // 6

// Case 2. The value is Object type
let obj1 = { name: 'Wonmi', password: '123' };
let obj2 = obj1; // Here, obj1 is an address for the object {name....}.

obj2.password = '000'; // means, change the object in the memory that obj1 is pointing to.
// We can save space in the memory.
// We are not copying th object.
// We just reference one location.
// .... But this can be an issue.
// By mistake somebody else can change a property on that referenced object.

console.log(obj1);
console.log(obj2);

// Case 3. Array is object too.
var c = [1, 2, 3, 4, 5];
var d = c;

d.push(12323); // Modifies var c !!
console.log(c);
console.log(d);

// Case 4. What if we want to clone object type?

// Case 4-1. Cloning Array
var e = [1, 2, 3, 4, 5];
var f = [].concat(e);
f.push(999);
console.log(e);
console.log(f);

// Case 4-2. Cloning Object
var g = { a: 'a', b: 'b', c: 'c' };
var gClone = Object.assign({}, g);
g.c = 'hehehe';
console.log(g);
console.log(gClone);

// Case 4-2-2. Cloning Object using Spread Operator
var h = { a: 'a', b: 'b', c: 'c' };
var hClone = { ...h };
h.c = 'hehehe';
console.log(h);
console.log(hClone);

// Case 4-3-1. If we have Object inside Object?
let myObject = {
  a: 'a',
  b: 'b',
  c: { deep: 'try copying me' }
};
let myObjectClone = { ...myObject };
myObject.c = 'hohoho'; // if you assign new value to 'c'....
console.log(myObject); // only original data point affected.
console.log(myObjectClone); // this acts separately

// Case 4-3-1. If we have Object inside Object, while
// we make a change to the inner object?
let yourObject = {
  a: 'a',
  b: 'b',
  c: { deep: 'try copying me' }
};
let yourObjectClone = { ...yourObject };
yourObject.c.deep = 'hohoho'; // ==> Change occured inside the inner Object (new address point)
yourObject.d = 'bababa'; // ==> Change occured outside the inner Object
console.log('yourObject1', yourObject); // Data in the first address has been changed
console.log('yourObjectClone', yourObjectClone); // Only data in the first level of the first address cloned.
// Since the inner Object has its own address and the inner Object is pulled from the initial address.
// ====> This is called 'shallow cloning'. It only clones the first level. The deeper levels are still referencing.

// Conclusion.
// How can we do 'deep cloning'?
// A little funky, but we use JSON.

let ourObject = {
  a: 'a',
  b: 'b',
  c: { deep: 'try copying me' }
};
let ourObjectSuperClone = JSON.parse(JSON.stringify(ourObject));
console.log(ourObjectSuperClone);
// CAUTION : DEEP CLONE can have performance drawbacks. It will take long time to clone.

//----------- Surprise Discovery -----------

// A (prefix increment --- Preferred)
// var a = 5;
// var b = ++a; // operator ++ modifies the state of a
// console.log(b);

// B (postfix increment)
// var a = 5;
// var b = a++; // copy of a is assigned to b and then increment happens to a
// console.log(b);

// 위의 A와 B는 완전히 다름

// Best practice:
// Strongly favor the prefix version of the increment and decrement operators, as they are generally more performant, and you’re less likely to run into strange issues with them.
