/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    
    let length = nums.length;
    if (length == 1) return true;
    let maxPower = 0, border = 0;
    for (let i = 0; i < length; i++) {
        maxPower = Math.max(maxPower, i + nums[i]);
        if (maxPower >= length - 1) return true;
        border = maxPower;
        if (border == i && nums[i] == 0) {
            return false;
        }
    }

    return true;
};
console.time();
let result = canJump([2, 1, 2, 0, 3, 4]);
console.timeEnd();
console.log(result);