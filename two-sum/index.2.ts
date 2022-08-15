export function twoSum(nums: number[], target: number): number[] {
    const tmpArray = {};

    for (let i = 0; i < nums.length; i++) {
        const requires = target - nums[i];

        if (requires in tmpArray) {
            return [tmpArray[requires], i];
        }

        tmpArray[nums[i]] = i;
    }

    return [];
};