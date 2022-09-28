/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n == 1) return 1
    if (n == 2) return 2
    let a1 = 1, a2 = 2;
    for (let i = 2; i <= n; i++) {
        [a1,a2] = [a2,a1 + a2]
    }
    return a1;
};

let result = climbStairs(5);

console.log(result);