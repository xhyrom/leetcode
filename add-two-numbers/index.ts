class ListNode {
    val: number // HIGHEST VALUE IN LIST
    next: ListNode | null // NEXT LIST WITH HIGHEST VALUE
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const convertNodeListToArray = (list: ListNode) => {
    const result: number[] = [];

    if (list.next != null) {
        result.push(...convertNodeListToArray(list.next));
    }

    result.push(list.val);
    
    return result;
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1 || !l2) return null;

    const a1 = convertNodeListToArray(l1);
    const a2 = convertNodeListToArray(l2);

    const total = (BigInt(a1.join('')) + BigInt(a2.join(''))).toString().split('');

    let result: any = null;

    for (let i = 0; i < total.length; i++) {
        result = {
            val: parseInt(total[i]),
            next: result
        }
    }

    return result;
}