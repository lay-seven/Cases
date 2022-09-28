const fs = require('fs');
const util = require('util');
const mineReadFile = util.promisify(fs.readFile);

async function main() {
    try {
        let res1 = await mineReadFile('./resource/观书有感.md')
        let res2 = await mineReadFile('./resource/画.md')
        console.log(res1 + res2);
    } catch (e) {
        console.log(e);
    }
}
main();