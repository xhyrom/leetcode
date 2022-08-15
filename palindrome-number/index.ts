function isPalindrome(x: number): boolean {
    const left = x;
    const right = parseInt(x.toString().split('').reverse().join(''));

    return left === right
};