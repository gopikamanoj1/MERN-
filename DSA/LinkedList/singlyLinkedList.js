class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Add a node at the end
  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Add the node at the front
  prepend(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // Add a node at a particular position
  addData(value, position) {
    let newNode = new Node(value);
    if (!this.head) {
      console.log("empty list");
      return;
    }
    let current = this.head;
    while (current !== null && current.value !== position) {
      current = current.next;
    }

    // If the position is found
    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    } else {
      console.log(`Node with value ${position} not found`);
    }
  }

  // Reverse the linked list
  reverse() {
    if (this.head == null) {
      console.log("empty");
      return;
    } else {
      let next;
      let prev = null;
      let current = this.head;
      this.tail = current;

      while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      this.head = prev; // Set head to the last non-null node
    }
  }

  // Find the middle of the list
  middle() {
    let slow = this.head;
    let fast = this.head;
    // let prev=null

    while (fast !== null && fast.next !== null) {
      // prev=slow

      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  // Print the linked list
  display() {
    if (this.head == null) {
      console.log("empty list");
    } else {
      let current = this.head;
      while (current !== null) {
        console.log(current.value);
        current = current.next;
      }
    }
  }

  // Find the sum of the middle three elements
  sumMiddleThree() {
    if (this.head == null) {
      console.log("empty list");
      return 0;
    }

    // Calculate the length of the linked list
    let length = 0;
    let current = this.head;
    while (current !== null) {
      length++;
      current = current.next;
    }

    if (length < 3) {
      console.log("Not enough elements to sum the middle three");
      return 0;
    }

    // Find the starting point of the middle three elements
    let start = Math.floor((length - 3) / 2);
    let sum = 0;
    current = this.head;

    for (let i = 0; i < start; i++) {
      current = current.next;
    }

    // Sum the middle three elements
    for (let i = 0; i < 3; i++) {
      if (current !== null) {
        sum += current.value;
        current = current.next;
      }
    }

    return sum;
  }

  // Remove the first node
  removeFirst() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null; // List became empty
    }
  }

  // Remove the last node
  removeLast() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    if (!this.head.next) {
      // Only one element in the list
      this.head = null;
      this.tail = null;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
  }

  // Remove a middle node (by value)
  removeMiddle(value) {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    if (this.head.value === value) { 
      // If the node to remove is the head
      this.head = this.head.next;
      if (!this.head) {
        this.tail = null; // List became empty
      }
      return;
    }
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (!current.next) {
      console.log(`Node with value ${value} not found`);
      return;
    }
    current.next = current.next.next;
    if (!current.next) {
      this.tail = current; // Removed the last node
    }
  }

  // Check if the linked list is a palindrome
  isPalindrome() {
    if (!this.head || !this.head.next) {
      return true;
    }

    let slow = this.head;
    let fast = this.head;
    const stack = [];

    // Move slow pointer to the middle and push first half elements onto stack
    while (fast && fast.next) {
      // console.log();
      stack.push(slow.value);
      slow = slow.next;
      fast = fast.next.next;
    }

    // If the list has an odd number of elements, skip the middle element
    if (fast) {
      slow = slow.next;
    }

    // Compare the second half with the elements in the stack
    while (slow) {
      const top = stack.pop();
      if (top !== slow.value) {
        return false;
      }
      slow = slow.next;
    }

    return true;
  }

  // Check for cycle in the linked list
  hasCycle() {
    if (!this.head || !this.head.next) {
      return false;
    }

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        return true; // Cycle detected
      }
    }

    return false; // No cycle
  }
}

let list = new LinkedList();
// Adding at the back
list.append(10);
list.append(11);
list.append(12);
list.append(13);
list.append(14);
list.append(15);
list.append(16);
list.append(17);
list.append(18);
console.log("Before reversing:");
list.display();
list.tail.next = list.head.next.next; // Create a cycle

console.log("Has cycle:", list.hasCycle());

// // Reversing
// list.reverse();

// // Displaying after reversing
// console.log("After reversing:");
// list.display();

// console.log("Middle element:", list.middle().value);

// console.log("Sum of middle three elements:", list.sumMiddleThree());

// // Remove first node
// list.removeFirst();
// console.log("After removing first node:");
// list.display();

// // Remove last node
// list.removeLast();
// console.log("After removing last node:");
// list.display();

// // Remove a middle node by value
// list.removeMiddle(15);
// console.log("After removing middle node with value 15:");
// list.display();
