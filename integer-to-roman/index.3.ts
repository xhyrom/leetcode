const symbols = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
}

export function intToRoman(num: number): string {
    const numbers = Object.keys(symbols).map((e) => parseInt(e));

    let index =  numbers.length - 1;
    let result = '';

    while (num >= 1) {
        if (num < numbers[index]) {
            index--;
            continue;
        }

        num -= numbers[index];
        result += `${symbols[numbers[index]]}`;
    }

    return result;
}