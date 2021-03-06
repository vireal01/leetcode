//https://leetcode.com/problems/palindrome-linked-list/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    let node = head
    let listSize = 0
    let nodeStack = []
    let lastInStack
    let currentNodeNumber = 0
    
    if(head.next === null){
        return true
    }
    
     while (node !== null){
        listSize++; 
        node = node.next
     }
    node = head
    if(listSize % 2 === 0){
        while (node !== null){
            lastInStack = nodeStack.pop()
            if(lastInStack !== node.val){
                nodeStack.push(lastInStack, node.val)
            }
            node = node.next
        }
        
    } else {
        while (node !== null){
            lastInStack = nodeStack.pop()
            currentNodeNumber++ 
            if( (currentNodeNumber === Math.floor(listSize/2) + 1) ){
                nodeStack.push(lastInStack)
            } else if (lastInStack === node.val) {
                // do nothing
            }else {
                nodeStack.push(lastInStack, node.val)
            }
            node = node.next
        }   
    } 
    nodeStack.shift()
    return nodeStack.length === 0
};


// better solution

// var isPalindrome = function(head) {

//     let middle = middleNode(head)
//     let reversed = reverseList(middle)   
    
//     while(reversed){
//         if(reversed.val !== head.val){
//             return false
//         }
//         reversed = reversed.next
//         head = head.next
//     } return true
    
// };

// function middleNode(head) {
//     let slowPointer = head
//     let fastPointer = head
    
//     while(fastPointer && fastPointer.next){
//         slowPointer = slowPointer.next
//         fastPointer = fastPointer.next.next
//     }
//     return slowPointer
// };

// function reverseList(head) {
//     let prev = null;
//     let current = head;
//     let next = null;
    
//     while(current!== null){
//         next = current.next
//         current.next = prev
//         prev = current
//         current = next
//     }
//     return prev
    
// };

