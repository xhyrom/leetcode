const median = (array: number[]) => {
    if (array.length % 2 === 1) {
        return array[Math.floor(array.length / 2)]
    } else {
        return (array[array.length / 2] + array[(array.length / 2) - 1]) / 2;
    }
}

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    return median(merged);
};

console.log(findMedianSortedArrays([1, 2], [3, 4]))