//https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head){
        return false
    }
    let slow = head
    let fast = head

    while(fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next
        
        if(fast === slow){
            return true
        }
    }
    return false
    
};
