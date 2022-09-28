// filter() 方法创建给定数组一部分的浅拷贝 (en-US)，
// 其包含通过所提供函数实现的测试的所有元素。

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let array2 = array.filter(item => item % 2 == 0);
console.log(array2);// [ 2, 4, 6, 8 ]