const fs = require('fs');
const { resolve } = require('path');

const p = new Promise((resolve, reject) => {
    fs.readFile('./resources/为学.md', (err, data) => {
        resolve(data);
    });
});

p.then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/观书有感.md', (err, data) => {
            resolve([value, data]);
        });
    });
}).then(value => {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/插秧歌.md', (err, data) => {
            value.push(data);
            resolve(value);
        });
    });
}).then(value => {
    let result = value.join('\r\n');
    console.log(result);
})