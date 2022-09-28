/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let closestSum = nums[0] + nums[1] + nums[2], n = nums.length, sum = 0;
    if (n == 3) {
        return closestSum;
    }
    // 排序
    nums = nums.sort((a, b) => a - b);
    // if (nums[0] > target) return nums[0] + nums[1] + nums[2];
    // if (nums[n] < target) return nums[n] + nums[n - 1] + nums[n - 2];
    for (let i = 0; i < n - 2; i++) {
        // if(nums[i] >= )
        let left = i + 1, right = n - 1;
        while (left < right) {
            sum = nums[i] + nums[left] + nums[right];
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                return closestSum;
            }
        }
    }
    return closestSum;
};

let result = threeSumClosest([-100, -98, -2, -1],-101);
console.log(result);