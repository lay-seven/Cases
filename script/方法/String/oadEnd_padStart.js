// padEnd() 方法会用一个字符串填充当前字符串（如果需要的话则重复填充），
// 返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充。

const string = 'ABCDEFG';

let pad1 = string.padEnd(10, '#');
let pad2 = string.padEnd(5, '#');
let pad3 = string.padEnd(10);
let pad4 = string.padEnd(10,'123456789');

console.log(pad1);// ABCDEFG###
// 如果输入的长度小于原长度，不做变化
console.log(pad2);// ABCDEFG
// 不输入填充内容，则填充空格
console.log(pad3);// 'ABCDEFG   '
// 超出长度，则只填充靠前的
console.log(pad4);// 'ABCDEFG123'

// padStart为从头填充
let pad5 = string.padStart(10, '#');

console.log(pad5);// ###ABCDEFG