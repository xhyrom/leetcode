export function lengthOfLastWord(s: string): number {
    const worlds = s.split(' ');
    let result: number = 0;

    for (let i = worlds.length - 1; i >= 0; i--) {
        if (worlds[i].length < 1) continue;
        
        result = worlds[i].length;
        break;
    }

    return result;
};