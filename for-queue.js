const { ListNode } = require('./extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  getUnderlyingList() {
    if (this.head) return this.head
    else return null;
  }

  enqueue(value) {
    if (! this.head) {
      this.head = new ListNode(value);
      this.tail = this.head;
    } else {
      this.tail.next = new ListNode(value);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    if (! this.head) return null
    else {
      let current = this.head;
      if (this.head.next) {
        this.head = this.head.next;
        return current;
      } else {
        this.head = null;
        this.tail = null;
        return current;
      }
    }
  }
}

function showQueue() {
  if (queue.head) {
    let current = queue.head;
    while (current.next) {
      console.log(current);
      current = current.next;
    }
    console.log(current);
  } else {console.log("empty queue")}
  
}

const queue = new Queue();
console.log(queue.getUnderlyingList());
console.log("очередь после добавления элементов:");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
showQueue();


console.log("pop");
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log("очередь после удаления");
showQueue();

console.log("добавили ещё два элемента");
queue.enqueue(2);
queue.enqueue(3);
showQueue();

console.log(queue.getUnderlyingList())