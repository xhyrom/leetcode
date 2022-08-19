export function areNumbersAscending(s: string): boolean {
    let numbers = s.match(/\d*/g).map(e => parseInt(e)).filter(n => !isNaN(n));

    for (let i = 0; i < numbers.length; i++) {
        const now = numbers[i];
        const next = numbers[i + 1];

        if (now === next) return false;
    }

    return numbers.join('') === numbers.sort((a, b) => a - b).join('');
};