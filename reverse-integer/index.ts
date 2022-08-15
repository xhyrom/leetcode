function reverse(x: number): number {    
    const stringed = x.toString();
    if (stringed.startsWith('-')) {
        const potencionalResult = parseInt(`-${stringed.slice(1).split('').reverse().join('')}`);

        if (potencionalResult > 2147483647 || potencionalResult < -2147483648) return 0;
        return potencionalResult;
    }

    const potencionalResult = parseInt(stringed.split('').reverse().join(''));

    if (potencionalResult > 2147483647 || potencionalResult < -2147483648) return 0;
    return potencionalResult;
};