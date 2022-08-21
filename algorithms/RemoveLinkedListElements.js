// Source : https://leetcode.com/problems/remove-linked-list-elements/
// Author : Fawaz Jomah
// Date   : 2015-06-16

/**********************************************************************************
 *
 * Remove all elements from a linked list of integers that have value val.
 *
 * Example
 * Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6,  val = 6
 * Return: 1 --> 2 --> 3 --> 4 --> 5
 *
 * Credits:Special thanks to @mithmatt for adding this problem and creating all test cases.
 *
 **********************************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Recursion
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (!head) return head;

    head.next = removeElements(head.next, val);
    return head.val === val ? head.next : head;
};

/**
 * Iteration
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let headNode, prevNode, currNode 
    headNode = prevNode = new ListNode() 
    prevNode.next = currNode = head
    
    while (currNode) {
        if (currNode.val !== val) {
            prevNode = prevNode.next
        } else {
            prevNode.next = currNode.next
        }
        currNode = currNode.next
    }
    return headNode.next
};
