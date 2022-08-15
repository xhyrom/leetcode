export function searchInsert(nums: number[], target: number): number {
    if (!nums.includes(target)) {
        nums.push(target);
    }

    nums.sort((a, b) => a - b);

    return nums.indexOf(target);
};