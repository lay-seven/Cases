// 如果当前字符串包含被搜寻的字符串，就返回 true；否则返回 false。

let string = 'ABCDEFG';
console.log(string.includes('ABC'));//true
console.log(string.includes('ABC',0));//true
console.log(string.includes('ABC',1));//false