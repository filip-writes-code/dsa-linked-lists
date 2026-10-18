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
    if (!this.head) return 0;
    //if not empty
    let currentNode = this.head;
    let totalNodes = 1;
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
  at(index) {
    //if the list is empty return undefined
    if (!this.head) return undefined;

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      //stop the traversal and return undefined, if hits the end of the list
      if (!currentNode.nextNode) return undefined;
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
  // removes the head node from the list and returns it's value
  pop() {
    // if used on an empty list, returns undefined
    if (!this.head) return undefined;

    //point the current head to the next node
    let currentHead = this.head;
    let newHead = currentHead.nextNode;
    this.head = newHead;
    return currentHead;
  }
  //returns true if passed value is in the list
  contains(value) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  // Returns the index of the node containing the given value.
  // If the value can’t be found in the list, it should return -1.
  // If more than one node has a value matching the given value, it should return the index of the first node with the matching value.
  findIndex(value) {
    let currentNode = this.head;
    let currentIndex = 0;
    while (currentNode) {
      if (currentNode.value === value) return currentIndex;
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return -1;
  }

  toString() {
    let returnString = "";
    let currentNode = this.head;
    while (currentNode) {
      let printValue = `( ${currentNode.value} )`;
      returnString += printValue;
      currentNode = currentNode.nextNode;
      if (currentNode) {
        returnString += " -> ";
      } else {
        returnString += " -> null";
      }
    }
    return returnString;
  }
}

class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

module.exports = LinkedList;
