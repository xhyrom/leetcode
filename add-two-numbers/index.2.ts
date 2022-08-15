class ListNode {
    val: number // HIGHEST VALUE IN LIST
    next: ListNode | null // NEXT LIST WITH HIGHEST VALUE
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const special = arguments[2] ? 1 : 0;

    if (!(l1 || l2)) {
        if (special) return new ListNode(1);
        else return null;
    }

    const value1 = l1?.val || 0;
    const value2 = l2?.val || 0;

    const next1 = l1?.next || null;
    const next2 = l2?.next || null;

    const sum = value1 + value2 + special;

    const node = new ListNode(sum % 10);
    // @ts-expect-error Because special argument :O
    node.next = addTwoNumbers(next1, next2, sum >= 10);

    return node;
};