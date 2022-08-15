export function searchInsert(nums: number[], target: number): number {
    if (!nums.includes(target)) {
        nums.push(target);
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target || nums[i] > target) return i;
    }

    return -1;
};