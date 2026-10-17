class LinkedList {
  constructor() {
    this.head = null;
  }

  //add node to the end of the list
  append(value) {
    let newNode = new Node(value);
    // if the list is empty, append the node
    if (!this.head) {
      this.head = newNode;
      return;
    }
    // if there are nodes in the list, go through nodes and append the node, once nextNode returns null
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  //add node at the beginning of the list
  prepend(value) {
    let newNode = new Node(value);
    //if the list is empty, add node to head
    if (!this.head) {
      this.head = newNode;
      return;
    }
    //if the list is not empty
    //point the newNode.nextNode to the current head node, and make itself as the head
    newNode.nextNode = this.head;
    this.head = newNode;
  }

  //returns the total number of nodes in the list
  size() {
    let totalNodes = 0;
    let currentNode = this.head;
    while (currentNode.nextNode) {
      totalNodes++;
      currentNode = currentNode.nextNode;
    }
    return totalNodes;
  }
  // returns the last node in the list. if the list is empty - returns undefined
  tail() {
    if (!this.head) return undefined;

    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }

  // returns the node at the given index. if there is no node at the index - returns undefined
  at(index) {}
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}
