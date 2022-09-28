

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = array.forEach((item, index, array) => {
    array[index] = item + item;
});


console.log(result);// undefined
console.log(array);// [2,  4,  6,  8, 10,12, 14, 16, 18]

