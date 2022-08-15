const symbols = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

export function romanToInt(s: string): number {
    const chars = s.split('');
    let result = 0;

    for (let i = 0; i < chars.length; i++) {
        const char = symbols[chars[i]];
        const next = symbols[chars[i+1]];

        if (next > char) {
            result += next - char;
            i++;
        } else {
            result += char;
        }
    }

    return result;
};