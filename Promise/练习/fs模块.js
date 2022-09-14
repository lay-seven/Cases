const fs = require('fs');

// fs.readFile('../代码/1-Promise基本使用/resource/content.txt', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data.toString());
// })

// Promise封装
let p = new Promise((resolve, reject) => {
    fs.readFile('../代码/1-Promise基本使用/resource/content.txt', (err, data) => {
            if (err) reject(err);
            // 如果成功
            resolve(data)
        })
}).then((value) => {
    console.log(value.toString());
}, (reason) => {
    console.log(reason);
})