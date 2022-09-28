/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length == 3) {
        let sum = nums[0] + nums[1] + nums[2];
        if (sum == 0) {
            return [nums];
        } else {
            return [];
        }
    }
    arr = nums.sort((a, b) => a - b);
    let result = [];
    for (let i = 0; i < arr.length - 2; i++) {
        // 如果排序后的数组移动过程中第一位大于零，一定没有解
        if (arr[i] > 0) return result;
        // 去重
        if (i >= 1) {
            if (arr[i] == arr[i - 1]) continue;
        }
        let left = i + 1, right = arr.length - 1;
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                // 此时得到并push解
                result.push([arr[i], arr[left], arr[right]]);
                // 指针去重
                while (arr[left] == arr[left + 1]) left++;
                while (arr[right] == arr[right - 1]) right--;
                left++;
                right--;
            }

        }
    }
    return result;
};

let res = threeSum([0, 0, 0]);
console.log(res);