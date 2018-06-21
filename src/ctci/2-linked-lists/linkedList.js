"use strict";
export default class LinkedList {
  constructor(data) {
    this.head = null;
    this.tail = null;
    this.count = 0;

    if (data && data.length > 0)
      data.forEach(el => {
        this.push(el);
      });
  }

  get length() {
    return this.count;
  }

  push(data) {
    // Create a new Node
    const node = {
      data: data,
      next: null
    };

    if (this.count === 0) {
      // If this is the first Node, assign it to head
      this.head = node;
    } else {
      // If not the first node, link it to the last node
      this.tail.next = node;
    }
    this.tail = node;
    this.count++;
    return this;
  }

  addFirst(data) {
    // Create a new Node
    const node = {
      data: data,
      next: null
    };

    // Save the first Node
    const temp = this.head;

    // Point head to the new Node
    this.head = node;

    // Add the rest of node behind the new first Node
    this.head.next = temp;

    this.count++;

    if (this.count === 1) {
      // If first node,
      // point tail to it as well
      this.tail = this.head;
    }
  }

  removeFirst() {
    if (this.count > 0) {
      // The head should point to the second element
      let removed = this.head;
      this.head = this.head.next;

      this.count--;

      if (this.count === 0) {
        // If list empty, set tail to null
        this.tail = null;
        this.head = null;
      }
      return removed;
    }
    return null;
  }

  removeAt(index) {
    if (this.count === 0) return null;
    if (this.count === index) return this.pop();
    if (index === 1) return this.removeFirst();
    if (index > this.count) return null;

    let previous = this.getByPosition(index - 1);
    let removed = null;
    if (previous) {
      removed = previous.next;
      previous.next = previous.next.next;
      this.count--;
    }
    return removed;
  }

  getByPosition(position) {
    if (this.count === 0) return null;
    if (this.count === 1) return this.head;
    if (position > this.count) return null;
    if (position === this.count) return this.tail;

    let current = this.head;
    position--;
    while (current.next) {
      if (position === 0) {
        return current;
      }
      current = current.next;
      position--;
    }
    return null;
  }

  pop() {
    let toReturn = null;
    if (this.count === 0) return toReturn;
    else if (this.count === 1) {
      toReturn = this.head;
      this.head = null;
      this.tail = null;
    } else if (this.count > 1) {
      let current = this.head;
      let previous = current;
      while (current.next) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
      this.tail = previous;
      toReturn = current;
    }
    this.count--;
    return toReturn;
  }

  toArray() {
    if (this.length === 0) return [];
    let array = new Array();
    let current = this.head;
    while (current && current.data) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  }

  reverse() {
    if (this.count < 2) return this;

    let current = this.head;
    let previous = null;
    let next = null;
    while (current) {
      next = current.next;
      current.next = previous;
      if (!previous) this.tail = current;
      previous = current;
      current = next;
    }
    this.head = previous;
  }
}
