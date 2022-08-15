function plusOne(digits: number[]): number[] {
    const number = BigInt(digits.join('')) + BigInt(1);
    return number.toString().split('').map(e => Number(e));
};