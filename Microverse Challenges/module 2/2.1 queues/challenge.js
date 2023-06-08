// Start with your code from LinkedList challenge.
class Queue {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class NumQue {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    this.head = new Queue(data, this.head);
  }

  remove(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let curr = this.head;
    let prev;
    let count = 0;

    if (index === 0) {
      this.head = curr.next;
    } else {
      while (count < index) {
        count++;
        prev = curr;
        curr = curr.next;
      }

      prev.next = curr.next;
    }

    this.size--;
  }

  printQueue() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

const queue = new NumQue();
queue.add(100);
queue.add(1000);
queue.add(500);
queue.remove(1);
queue.printQueue();
