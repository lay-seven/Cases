/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let n = digits.length;
    if (n == 0) return [];
    let numMap = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    if (n == 1) return numMap[digits].split("");
};

let result = letterCombinations('3');
console.log(result);