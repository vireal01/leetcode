// https://leetcode.com/problems/middle-of-the-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let elementsCounter = 1
    let node = head
    while(node.next){
        elementsCounter++
        node = node.next
        }
    node = head
    let counter = 0
    for(let i = 0; i < Math.floor(elementsCounter / 2); i++ ){
        node = node.next
        }
    return node
};


// better solution:

//var middleNode = function(head) {
//    let slowPointer = head
//    let fastPointer = head
//    
//    while(fastPointer && fastPointer.next){
//       slowPointer = slowPointer.next
//        fastPointer = fastPointer.next.next
//    }
//    return slowPointer
//};
