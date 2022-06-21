// ES2020

// 1. bigint ==> New Type!

console.log(typeof 4); // number
console.log(typeof true); // boolean
console.log(typeof 129182391); // number
console.log(typeof 1n); // bigint

console.log(Number.MAX_SAFE_INTEGER);

// 9007199254740991 +10 이렇게는 연산이 안되는데
// 9007199254740991n + 10n 이렇게 해주면 됨. 큰 숫자 연산을 위한 새로운 Type으로 보면 됨

// 2. Optional Chaining Operation '?.'
// Case: 프로퍼티가 있는지 없는지 모르겠는데 있으면 값을 출력하도록. (조건문 사용필요없게)

const JoshMons = {
  poketmon: {
    power: 100,
    weight: 4,
    height: 10
  },
  raichu: {
    power: 80,
    weight: 5,
    height: 14,
    skill: ''
  }
};

console.log(JoshMons.poketmon?.weight);

// 3. Nullish Coalescinng Operation '??'
// Case: object Chain의 맨 마지막에 있는 value값을
//      0이면 0이라고, false면 false라고 그대로 값으로 가져오게. (Coarcing되지말고)
//      보통은 값이 '' (비어있음. == 0 == false로 처리.그게아니라 0으로, 혹은 empty string으로 정확하게 상황 드러내게.)

console.log(JoshMons.raichu?.skill ?? undefined);
