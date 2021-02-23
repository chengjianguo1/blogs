class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  _node(index) {
    let current = this.head;
    for (i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
  add(index, element) {
    let prevNode;
    if (arguments.length === 1) {
      element = index;
      index = this.size;
    }
    if (index === 0) {
      let head = this.head;
      this.head = new Node(element, head);
    } else {
      prevNode = this._node(index);
      prevNode.next = new Node(element, prevNode.next);
    }
    this.size++;
  }
  set(index, element) {
    let current = this._node(index);
    current.element = element;
    return current;
  }
  remove(index) {
    let removeEle;
    if (index === 0) {
      this.head = null;
      this.size = 0;
      removeEle = this.head;
    } else {
      let prev = this._node(index - 1);
      if (!prev) return;
      removeEle = prev.next;
      prev.next = prev.next.next;
    }
    this.size--;
    return removeEle;
  }
}