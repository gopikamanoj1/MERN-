class HashTable {
  constructor(size) {
    this.table = new Array(size).fill(null).map(() => []);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    let bucket = this.table[index];
    let sameKeyItem = bucket.find((item) => item[0] === key);

    if (sameKeyItem) {
      sameKeyItem[1] = value; // Update existing key
    } else {
      bucket.push([key, value]); // Add new key-value pair
    }
  }

  get(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    let sameKeyItem = bucket.find((item) => item[0] === key);

    if (sameKeyItem) {
      return sameKeyItem[1]; // Return the value
    } else {
      return "empty"; // Key not found
    }
  }

  remove(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    let sameKeyIndex = bucket.findIndex((item) => item[0] === key);

    if (sameKeyIndex !== -1) {
      bucket.splice(sameKeyIndex, 1); // Remove the key-value pair
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i].length > 0) {
        console.log(i, this.table[i]);
      }
    }
  }
}

// Example usage:
const hashTable = new HashTable(10);
hashTable.set("name", "John");
hashTable.set("mane", "gopika");

hashTable.set("age", 25);
hashTable.set("name", "Jane"); // Update value for 'name'

console.log(hashTable.get("name")); // Jane
console.log(hashTable.get("age")); // 25
console.log(hashTable.get("address")); // empty

//   hashTable.remove('age');
console.log(hashTable.get("age")); // empty

hashTable.display(); // Displays all non-empty buckets
