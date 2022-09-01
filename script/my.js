var twoSum = function (nums, target) {
    let hash = [];
    hash[nums[0]] = 0;
    for (let i = 1; i < nums.length; i++) {
        if (hash[target - nums[i]] !== undefined) {
            return [hash[target - nums[i]], i];
        }
        hash[nums[i]] = i;
    }
    return [];
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let target = 15;
console.log(twoSum(arr, target));