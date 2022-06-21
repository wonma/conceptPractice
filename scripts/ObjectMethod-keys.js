// Concept1. Enumerable or Non-enumerable ----------------- //
// Object는 property가 enumerable하다, 즉 array에서 하나씩 loop하는 것처럼 가능하다.
// .keys method는 property를 뽑아다가 정렬해서 Array로 return해준다.

var person = {
  name: 'gopal'
};

person.age = '21';

person['country'] = 'India';

Object.defineProperty(person, 'salary', {
  value: '80,000$',
  enumerable: false
});

// console.log(person);
// console.log(Object.keys(person));

// Concept2. Enumerable or Non-enumerable ----------------- //

let obj = {
  username0: 'Wonmi',
  username1: 'Josh',
  username2: 'Maru'
};

// console.log(Object.keys(obj));

// 아래에서 key는 각각의 property 이름이 됨.
// 아래에서 forEach는 Array에 적용가능한 method로 element와 index를 argument로 받을 수 있음.
Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]); //여기서 obj[key]부분은 단순히 위의 variable에서 일일이 reference해오는 것임
}); // String value를 뱉음.
