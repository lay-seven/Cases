// at() 方法接受一个整数值，并返回一个新的 String
let string = 'ABCDEFG';
console.log(string.at(2)); // C
console.log(string.at(-2)); // F

//
// charAt() 方法从一个字符串中返回指定的字符。
// str.charAt(index)
// 一个介于 0 和字符串长度减 1 之间的整数。(0~length-1)
// 如果没有提供索引，charAt() 将使用 0。
//  如果指定的 index 值超出了该范围，则返回一个空字符串。
console.log(string.charAt(2)); // C
console.log(string.charAt(-2)); // 无输出
console.log(string.charAt()); // A