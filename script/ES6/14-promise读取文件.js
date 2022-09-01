//引入 fs 模块
const fs = require('fs');


// 使用fs读取文件
// fs.readFile('./resources/为学.md', (err, data) => {
//     //如果出错
//     if (err) throw err;
//     //如果没有出错
//     console.log(data.toString());

// });

// 使用promise封装
const p = new Promise(function (resolve, reject) {
    fs.readFile('./resources/为学.md', (err, data) => {
        if (err) reject(err);
        resolve(data);
    });
});

p.then(function (value) {
    console.log(value.toString());
}, function (reason) {
    console.log('出错了');
});