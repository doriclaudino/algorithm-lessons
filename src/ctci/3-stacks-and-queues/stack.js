"use strict";
export default class Stack {
  constructor() {
    this.top = null;
  }

  /**
   * ? create the item and save the old top as next. (bottom-up)
   * ? the newer item is the top always.
   * @param data : new stack node/item
   */
  pop() {
    let item = null;
    if (this.top) {
      item = this.top;
      if (item.next) this.top = item.next;
      if (item.data) return item.data;
    }
    return item;
  }

  /**
   * ? create the item and save the old top as next. (bottom-up)
   * ? the newer item is the top always.
   * @param data : new stack node/item
   */
  push(data) {
    let item = { data, next: this.top };
    this.top = item;
  }

  /**
   * @return return the newer item
   */
  peek() {
    if (this.isEmpty()) return null;
    return this.top.data;
  }

  /**
   * @return boolean
   */
  isEmpty() {
    return this.top ? false : true;
  }
}
