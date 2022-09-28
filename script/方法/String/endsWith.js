// endsWith() 方法用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，
// 根据判断结果返回 true 或 false。

let string = 'ABCEDFG'
console.log(string.endsWith('FG'));//true
console.log(string.endsWith('G'));//true
console.log(string.endsWith('g'));//false
