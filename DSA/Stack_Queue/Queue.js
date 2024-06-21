class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(data) {
    this.items.push(data);
  }
  dequeue() {
    if (this.items.length === 0) {
      console.log("empty queue ");
    } else {
      return this.items.shift();
    }
  }
  print() {
    console.log(this.items);
  }
}
let queue = new Queue();
queue.enqueue(4);
queue.enqueue(3);
queue.enqueue(2);
console.log(queue.dequeue());
queue.print();
