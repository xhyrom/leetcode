function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.splice(m);
    nums2.splice(n);

    nums1.push(...nums2);
    nums1.sort((a, b) => a - b);
};