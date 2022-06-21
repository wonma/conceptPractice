// What is Type Coercion?

1 == '1'; // true
1 === '1'; // false

// one of them will be converted to the equivalent value
// JS: "I think you mean number 1 not the string 1";

// It happens when you use "==" operator.
1 == '1'; // This is confusing. Not predictable.
// Always use "==="

//----------- Userful Cases----------//
// if statement
// 0 is taken as false
// 1 is taken as true

// -0 vs. +0
// -0 === +0 // true
//
