/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let length = height.length;
    let left = 0, right = length - 1;
    let res = 0;
    while (left < right) {
        res = Math.max(res,(right - left) *( Math.min(height[left], height[right])));
        if (height[left] > height[right]) {
            right--;
        } else if(height[left] < height[right]) {
            left++;
        } else {
            height[left + 1] > height[right - 1] ? left++ : right--
        }
    }
    return res;
};

let result = maxArea([1, 2, 3, 9, 5,9]);
console.log(result);