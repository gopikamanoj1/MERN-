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
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    // Helper function to reverse a linked list
    reverse(head) {
      let prev = null;
      let current = head;
      while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      return prev;
    }
  
    // Function to check if the linked list is a palindrome
    isPalindrome() {
      if (!this.head || !this.head.next) {
        return true;
      }
  
      // Step 1: Find the middle of the linked list
      let slow = this.head;
      let fast = this.head;
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
  
      // Step 2: Reverse the second half of the linked list
      let secondHalf = this.reverse(slow);
  
      // Step 3: Compare the first half and the reversed second half
      let firstHalf = this.head;
      while (secondHalf) {
        if (firstHalf.value !== secondHalf.value) {
          return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
      }
  
      return true;
    }
  }
  
  // Example usage
  let list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(2);
  list.append(1);
  
  console.log(list.isPalindrome()); // Output: true
  
  list = new LinkedList();
  list.append(1);
  list.append(2);
  list.append(3);
  
  console.log(list.isPalindrome()); // Output: false
  