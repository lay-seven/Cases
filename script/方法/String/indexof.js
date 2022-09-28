// indexOf() 方法，给定一个参数：要搜索的子字符串，搜索整个调用字符串，
// 并返回指定子字符串第一次出现的索引。给定第二个参数：
// 一个数字，该方法将返回指定子字符串在大于或等于指定数字的索引处的第一次出现。

const string = 'ABCDEFGFEDCBA';

let index1 = string.indexOf('A');
let index2 = string.indexOf()
let index3 = string.indexOf('H')
console.log(index1);// 0
// 不存在或没有输入时，返回-1
console.log(index2);// -1
console.log(index3);// -1

console.log('####################');

let lastIndex1 = string.lastIndexOf('A')
let lastIndex2 = string.lastIndexOf('H')
let lastIndex3 = string.lastIndexOf()

console.log(lastIndex1);// 12
console.log(lastIndex2);// -1
console.log(lastIndex3);// -1
