// util.promisify方法
// 将某个方法转变成promise风格的函数

const util = require('util')
// 引入fs模块
const fs = require('fs')
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./content.txt').then((value) => {
    console.log(value.toString());
}, (reason) => {
    console.log(reason);
});