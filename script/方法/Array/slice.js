// slice()
// slice(start)
// slice(start, end)

let array = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

let arr1 = array.slice();
let arr2 = array.slice(2);
let arr3 = array.slice(2, 3);

console.log(arr1);// ['A', 'B', 'C', 'D', 'E', 'F', 'G']
console.log(arr2);// [ 'C', 'D', 'E', 'F', 'G' ]
console.log(arr3);// ['C']
