class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
} 

class Bst {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root == null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root == null) {  
      this.root = newNode;
    } else {
      return this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left == null) {
        root.left = newNode;
      } else {
        return this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right == null) {
        root.right = newNode;
      } else {
        return this.insertNode(root.right, newNode);
      }
    }
  }
  search(root = this.root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value == value) {
        return true;
      } else if (value < root.value) {
        return this.search(root.right, value);
      } else {
        return this.search(root.left, value);
      }
    }
  }

  preOrder(root = this.root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }

  postOrder(root = this.root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }

  inOrder(root = this.root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
  min(root=this.root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }
  max(root=this.root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }
  delete(val) {
    this.root = this.deleteNode(this.root, val);
  }
  deleteNode(root, val) {
    if (!root) {
      return false;
    }
    if (val < root.value) {
      root.left = this.deleteNode(root.left, val);
    } else if (val > root.value) {
      root.right = this.deleteNode(root.right, val);
    } else {
      if (!root.left && !root.right) {
        return null;
      } else if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }
      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value);
    }
    return root;
  }
  countNode(root) {
    if (!root) {
      return 0;
    }
    return 1 + this.countNode(root.left) + this.countNode(root.right);
  }
  treeHeight(root) {
    if (!root) {
      return -1;
    }
    const left = this.treeHeight(root.left);
    const right = this.treeHeight(root.right);
    return Math.max(left, right) + 1;
  }
  isBST(root, min = -Infinity, max = Infinity) {
    if (!root) {
      return true;
    }
    if (root.value <= min || root.value >= max) {
      return false;
    }
    return (
      this.isBST(root.left, min, root.value) &&
      this.isBST(root.right, root.value, max)
    );
  }
  findClosest(root, target) {
    let closest = root.value;
    let currrentNode = root;
    while (currrentNode) {
      if (Math.abs(target - currrentNode.value) < Math.abs(target - closest)) {
        closest = currrentNode.value;
      }
      if (target < currrentNode.value) {
        currrentNode = currrentNode.left;
      } else if (target > currrentNode.value) {
        currrentNode = currrentNode.right;
      } else {
        break;
      }
    }
    return closest;
  }
}

let bst = new Bst();
bst.insert(10);
bst.insert(2);
bst.insert(20);

bst.preOrder();
// console.log("hghgg");
// bst.inOrder();
// console.log("hghgg");
// bst.postOrder();
console.log(bst.search(2));
console.log("max is",bst.max());
console.log("min is",bst.min());

