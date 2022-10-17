const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;   
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, data) {
      if (! node) {
        return new Node(data);
      } 
      if (node.data === data) {
        return node;
      }
      if (node.data > data) {
        node.left = addNode(node.left, data);
      } else node.right = addNode(node.right, data);

      return node;
    }
  }

  has(data) {
    return searchNode(this.rootNode, data);

    function searchNode(node, data) {
      if (! node) return false;
      if (node.data == data) return true;

      if (node.data > data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    }
  }

  find(data) {
    if (this.has(data)) {
      return findNode(this.rootNode, data);
      
      function findNode(node, data) {
        if (node.data == data) return node;
  
        if (node.data > data) {
          return findNode(node.left, data);
        } else {
          return findNode(node.right, data);
        }
      }
    } else return null;
  }

  remove(data) {
    // if (this.has(data)) {
    //   let currentNode = this.find(data);
      
    //   this.rootNode = removeNode(this.rootNode, data);

    //   function removeNode(node, data) {
    //     if (node.value > data) {
    //       node.left = removeNode(node.left, data);
    //       return node;
    //     } else if (node.value < data) {
    //       node.right = removeNode(node.right, data);
    //     } else {
    //       if ((! node.left) && (! node.right)) {
    //         return null;
    //       }
    //       if (! node.left) {
    //         node = node.right;
    //         return node;
    //       }
    //       if (! node.right) {

    //       }
    //     }
    //   };
    // } else return null;
  } 
  

  min() {
    if (this.rootNode) {
      let current = this.rootNode;
      while (current.left) {
        current = current.left;
      }
      return current.data;
    } else return null;
  }

  max() {
    if (this.rootNode) {
      let current = this.rootNode;
      while (current.right) {
        current = current.right;
      }
      return current.data;
    } else return null;
  }
}

module.exports = {
  BinarySearchTree
};