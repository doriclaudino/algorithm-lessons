"use strict";
class Node {
  constructor(data = null, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export default class BinaryTree {
  constructor(array) {
    this.root = new Node();
    if (array && array.length) {
      this.root = this.createBstFromArray(array, 0, array.length - 1);
    }
  }

  //recursive for sorted Array
  createBstFromArray(array, start, end) {
    if (start > end) return null;
    let mid = Math.ceil((start + end) / 2);

    //new root on every call
    let root = new Node();
    root.data = array[mid];

    root.left = this.createBstFromArray(array, start, mid - 1);
    root.right = this.createBstFromArray(array, mid + 1, end);

    return root;
  }
}
