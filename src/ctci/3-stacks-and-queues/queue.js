"use strict";
export default class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * ? create the item and save the old top as next. (bottom-up)
   * ? the newer item is the top always.
   * @param data : new stack node/item
   */
  remove() {
    let data = null;
    if (!this.isEmpty()) {
      data = this.head.data;
      this.head = this.head.next;

      if (this.head === null) this.tail = null;
    }
    return data;
  }

  /**
   * ? create the item and save the old top as next. (bottom-up)
   * ? the newer item is the top always.
   * @param data : new stack node/item
   */
  add(data) {
    if (!this.isEmpty()) {
      let tail = this.tail;
      this.tail = { data, next: null };
      tail.next = this.tail;
    } else {
      this.tail = { data, next: null };
      this.head = { data, next: this.tail };
    }
  }

  /**
   * @return return the newer item
   */
  peek() {
    if (this.isEmpty()) return null;
    return this.head.data;
  }

  /**
   * @return boolean
   */
  isEmpty() {
    return this.head ? false : true;
  }
}
