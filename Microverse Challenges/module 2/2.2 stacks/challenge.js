class Stack {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
    this.head = new Stack(data, this.head);
  }

  pop() {
    if (this.head === null) {
      return;
    }

    const removedData = this.head.data;
    this.head = this.head.next;
    this.size--;
    return removedData;
  }
  printStack() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

const stack = new LinkedList();
stack.push(100);
stack.push(200);
stack.push(900);
stack.pop();
stack.pop();
stack.printStack();
