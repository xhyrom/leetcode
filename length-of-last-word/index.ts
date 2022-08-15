export function lengthOfLastWord(s: string): number {
    return s.split(' ').filter(ch => ch.length >= 1).pop()?.length || 0;
};