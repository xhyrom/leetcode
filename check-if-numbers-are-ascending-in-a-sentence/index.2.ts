export function areNumbersAscending(s: string): boolean {
    const numbers = s.match(/\d*/g).filter(e => e.length !== 0).map(e => parseInt(e));

    for (let i = 0; i < numbers.length; i++) {
        const now = numbers[i];
        const next = numbers[i + 1];
        if (now === next) return false;
    }

    return numbers.join('') === numbers.sort((a, b) => a - b).join('');
};