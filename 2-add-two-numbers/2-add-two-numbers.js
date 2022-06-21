/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const list = []
    
    let residual = 0;
    
    while (l1 || l2) {
        const result = (l1 ? l1.val : 0) + (l2 ? l2.val : 0);
        
        const valueToPush = result + residual
        
        list.push(valueToPush % 10);
        
        residual = Math.floor(valueToPush / 10)
        
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    
    if (residual) list.push(residual)
        
    return list.reverse().reduce((acc, val) => ({
        val,
        next: acc
    }), null)
};