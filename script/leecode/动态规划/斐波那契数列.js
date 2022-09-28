/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n == 0) return 0;
    if (n == 1 || n == 2) return 1;
    let a1 = 1, a2 = 1;
    for (let i = 1; i < n; i++) {
        let temp = a1;
        a1 = a2;
        a2 = temp + a2;
    }
    return a1;
};

let result = fib(5);

console.log(result);

