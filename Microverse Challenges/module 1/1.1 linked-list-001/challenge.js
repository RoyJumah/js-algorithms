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

  //adding a item
  add(data) {
    this.head = new Node(data, this.head);
  }

  //get at index
  get(index) {
    let curr = this.head;
    let count = 0;

    while (curr) {
      if (count == index) {
        console.log(curr.data);
      }
      count++;
      curr = curr.next;
    }
    return null;
  }
}

const list = new LinkedList();
list.add(100);
list.add(200);
list.add(700);
list.add(800);
console.log(list);
console.log(list.get(0));
module.exports = LinkedList;
