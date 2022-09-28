// concat() 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。
// 语法 str.concat(str2, [, ...strN])
// concat 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回。
// concat 方法并不影响原字符串。
// 如果参数不是字符串类型，它们在连接之前将会被转换成字符串。
// 性能低，还不如+ +=
let hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))
// Hello, Kevin. Have a nice day.

let greetList = ['Hello', ' ', 'Venkat', '!']
console.log("".concat(...greetList));  // "Hello Venkat!"

console.log("".concat({}))   // [object Object]
console.log("".concat([]))  // ""
console.log("".concat(null)) // "null"
console.log("".concat(true))  // "true"
console.log("".concat(4, 5)) // "45"
