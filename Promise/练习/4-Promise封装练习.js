// 封装一个mineReadFile 读取文件内容
// 参数：path
// 返回：promise对象
function mineReadFile(path) {
    return new Promise((resolve, reject) => {
        require('fs').readFile(path, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}

mineReadFile('./content.txt').then((value) => {
    console.log(value.toString());
}, (reason) => {
    console.log(reason);
})