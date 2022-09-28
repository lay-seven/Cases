let array = ['A', 'B', 'C', 'D', 'E', 'F', 'G','G'];

// lastIndexOf() 方法返回指定元素（也即有效的 JavaScript 值或变量）
// 在数组中的最后一个的索引，如果不存在则返回 - 1。
// 从数组的后面向前查找，从 fromIndex 处开始。
let before = array.indexOf('G');
let after = array.lastIndexOf('G');
console.log(before,after); // 6 7