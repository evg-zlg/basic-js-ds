const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  if (l.length <= 0) {return null};
    let current = l.head;
    let currentPrev = l.head;
    for (let i = 0; i < l.length; i++) {
        console.log("Актуальный объект:")
        console.log(current)
        console.log("значение:"+current.value)
        if (current.value === k) {
            console.log("Нашли объект:")
            console.log(current)
            console.log("Следующий объект:")
            console.log(current.next)
            
            if (current === l.head) {
                l.head = current.next;
                i--;
                currentPrev = current;
                current = current.next;
            } else {
                if (! current.next) {
                    console.log("current end:")
                    console.log(current)
                    currentPrev.next = null;
                    
                } else {
                    console.log("current next:")
                    console.log(current.next)
                    console.log("currentPrev :")
                    console.log(currentPrev)
                    console.log("currentPrev next:")
                    console.log(currentPrev.next)
                    
                    currentPrev.next = current.next;
                    i--;

                    
                    current = current.next;
                }
            }
            l.length --;
        } else {
            currentPrev = current;
            current = current.next;
        }
    }
}

module.exports = {
  removeKFromList
};
