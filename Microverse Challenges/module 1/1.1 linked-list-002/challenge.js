class Node {
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

  add(data) {
    this.head = new Node(data, this.head);
  }

  get(index) {
    let curr = this.head;
    let count = 0;

    while (curr) {
      if (count === index) {
        console.log(curr.data);
      }
      count++;
      curr = curr.next;
    }

    return null;
  }

  insertAt(data, index) {
    if (index === 0 && index > this.size) {
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let curr, prev;
    curr = this.head;
    let count = 0;

    while (count < index) {
      prev = curr;
      count++;
      curr = curr.next;
      return;
    }

    node.next = curr;
    prev.next = node;
    this.size++;
  }

  printList() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
}

const list = new LinkedList();
list.add(100);
list.add(200);
list.insertAt(500, 8);

list.printList();
