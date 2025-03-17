function camelize(str): string {
  return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));


let arr1: number[] = [5, 3, 8, 1];
let filtered: number[] = filterRange(arr, 1, 4);

function filterRange(arr, a, b): number[] {
  return arr.filter(num => num >= a && num <= b);
}

console.log(filtered);
console.log(arr);


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

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
console.log(arr); // [3, 1]