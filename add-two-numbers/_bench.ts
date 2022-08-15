import { baseline, run } from 'mitata';
import { addTwoNumbers as f1 } from './index';
import { addTwoNumbers as f2 } from './index.2';

class ListNode {
    val: number // HIGHEST VALUE IN LIST
    next: ListNode | null // NEXT LIST WITH HIGHEST VALUE
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

const opts = new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1)))));
const opts2 = new ListNode(8, new ListNode(7, new ListNode(6, new ListNode(5, new ListNode(4)))));

baseline('f1', () => f1(opts, opts2));
baseline('f2', () => f2(opts, opts2));

await run();