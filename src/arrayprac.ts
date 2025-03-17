function camelize(str): string {
  return str
    .split('-')
    .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));


let arr: number[] = [5, 3, 8, 1];
let filtered: number[] = filterRange(arr, 1, 4);

function filterRange(arr, a, b): number[] {
  return arr.filter(num => num >= a && num <= b);
}

console.log(filtered);
console.log(arr);


