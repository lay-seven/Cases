/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
    let length = nums.length;
    if (length == 1) return 0;// 长度为1时不需要跳跃
    let borderNow = 0, borderNext = nums[0], step = 0, flag = 1;
    while (borderNext < length - 1) {
        for (let i = 1; i <= nums[borderNow]; i++) {
            if (borderNext < borderNow + i + nums[borderNow + i]) {
                borderNext = borderNow + i + nums[borderNow + i];// 右指针右移
                if (borderNext > length - 1) return step + 2;
                flag = i;// 记录跳一下前进几位
            }
        }
        borderNow += flag; // 左指针右移
        step++; // 跳跃步数加1
        flag = 1;//清除flag计数
    }
    return ++step;
};

let result = jump([1,1,1,1,7,1,1,1,1,1, 2, 3]);
console.log(result);
