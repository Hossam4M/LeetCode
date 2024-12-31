/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function prepareNodes(list1: ListNode | null, list2: ListNode | null) {
    if (list1.val <= list2.val) return [list1, list2]
    return [list2, list1]
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 && !list2) return null
    if (!list1) return list2
    if (!list2) return list1

    const [left, right] = prepareNodes(list1, list2)

    left.next = mergeTwoLists(left.next, right)

    return left
};