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
  search(root=this.root, value){
    if(!root){
        return false
    }else{
        if (root.value== value){
            return true
        }
        else if (  value < root.value){
            return this.search(root.right, value)
        }else{
            return this.search(root.left, value)
        }
    }
  }

  preOrder(root=this.root) {
    if (root) {
      console.log(root.value);
      this.preOrder(root.left);
      this.preOrder(root.right);
    }
  }
  postOrder(root=this.root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.value);
    }
  }
  inOrder(root=this.root) {
    if (root) {
      this.inOrder(root.left);
      console.log(root.value);
      this.inOrder(root.right);
    }
  }
}




let bst= new Bst()
bst.insert(10);
bst.insert(2)
bst.insert(20)

bst.preOrder();
console.log( "hghgg");
bst.inOrder();
console.log( "hghgg");
bst.postOrder()
console.log(bst.search(2));
