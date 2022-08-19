const MAX_VALUE = 2147483647;
const MIN_VALUE = -2147483648;

function myAtoi(s: string): number {
	const number = parseInt(s);
    
	if (!number) return 0;
    
	if (number > MAX_VALUE) return MAX_VALUE;
	if (number < MIN_VALUE) return MIN_VALUE;
	
    return number; 
};