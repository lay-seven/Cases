// some() 方法测试数组中是不是至少有 1 个元素通过了被提供的函数测试。
// 它返回的是一个 Boolean 类型的值。

// 参数
// callback
// 用来测试每个元素的函数，接受三个参数：

// element
// 数组中正在处理的元素。

// index 可选
// 数组中正在处理的元素的索引值。

// array可选
// some()被调用的数组。

// thisArg可选
// 执行 callback 时使用的 this 值。

// 返回值
// 数组中有至少一个元素通过回调函数的测试就会返回 ** true **；
// 所有元素都没有通过回调函数的测试返回值才会为 false。

let array = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

let boolean1 = array.some((element, index, arr) => {
    return element === 'A';
})
let boolean2 = array.some((element, index, arr) => {
    return element === 'H';
})
console.log(boolean1); // true
console.log(boolean2); // false