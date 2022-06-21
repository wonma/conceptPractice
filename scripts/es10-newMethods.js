// Array.flat()
const jurassicPark = [['a', 'b'], 'c', [['d']]];
console.log(jurassicPark.flat());
console.log(jurassicPark.flat(50));
console.log(jurassicPark); // flat doesn't mutate the initial value

const messyArray = ['a', , , , 'b'];
console.log(messyArray.flat());

// Array.flatMap()
const jurassicParkChaos = jurassicPark.flatMap(creature => creature + 'yooo');
console.log(jurassicParkChaos);

// String.trimStart()
// String.trimEnd()

// Array.fromEntries()

const profiles = [
  ['wonmi', '23'],
  ['Josh', '25']
];

console.log(Object.fromEntries(profiles));

// try {} catch {}
