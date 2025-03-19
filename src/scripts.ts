function camelize(str) {
  return str
    .split('-')
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

/////////////////////////////////////////////////////////////////////////////////

let arr1 = [5, 3, 8, 1];
let filtered = filterRange(arr1, 1, 4);

function filterRange(arr, a, b) {
  return arr.filter(num => num >= a && num <= b);
}

console.log(filtered);
console.log(arr1);

/////////////////////////////////////////////////////////////////////////////////

let arr2 = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4
console.log(arr2); // [3, 1]

/////////////////////////////////////////////////////////////////////////////////

let arr3 = [5, 2, 1, -10, 8];
arr3.sort((a, b) => b - a);
console.log(arr3);

/////////////////////////////////////////////////////////////////////////////////

let arr4 = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  return arr.slice().sort();
}

let sorted = copySorted(arr4);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr4); // HTML, JavaScript, CSS (no changes)

/////////////////////////////////////////////////////////////////////////////////

class Calculator {
  methods = {
    "+": (a, b) => { return a + b },
    "-": (a, b) => { return a - b }
  }

  addMethod = (op, func) => {
    this.methods[op] = func;
  }

  calculate = (str) => {
    let split = str.split(" ");
    let a = +split[0];
    let op = split[1];
    let b = split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;

    return this.methods[op](a, b);
  }
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result);

/////////////////////////////////////////////////////////////////////////////////

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [ john, pete, mary ];
// let names = users.map(user => user.name)
// console.log(names); // John, Pete, Mary

/////////////////////////////////////////////////////////////////////////////////

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
//
// let users = [ john, pete, mary ];
//
// let usersMapped = users.map(user => ({
//       fullName: `${user.name} ${user.surname}`,
//       id: user.id
// }))
//
// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith

/////////////////////////////////////////////////////////////////////////////////

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
//
// let arr = [ pete, john, mary ];
//
// function sortByAge(users) {
//   users.sort((a, b) => a.age - b.age);
// }
//
// sortByAge(arr);
//
// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

/////////////////////////////////////////////////////////////////////////////////

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

// function getAverageAge(users) {
//   return users.reduce((total, user) => total + user.age, 0) / users.length;
// }

function getAverageAge(users) {
  let total = 0;
  users.forEach(user => total += user.age);
  return total / users.length;
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

/////////////////////////////////////////////////////////////////////////////////

function unique(arr) {
  let result = [];

  for (let name of arr) {
    if (!result.includes(name)) {
      result.push(name);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // Hare, Krishna, :-O

/////////////////////////////////////////////////////////////////////////////////

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/