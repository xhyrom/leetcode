export function twoSum(nums: number[], target: number): number[] {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const requires = target - nums[i];

        if (map.has(requires)) {
            return [map.get(requires), i];
        }

        map.set(nums[i], i)
    }

    return [];
};