const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root(){
   return this.tree
  }

  add( data ) {
    var newNode = new Node(data);
    if(this.tree === null){
      this.tree = newNode;
      return this;
    }
    let current = this.tree;
    while(current){
      if(data === current.data) return undefined;
      if(data < current.data){
        if(current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if(current.right === null){
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  has(data ) {

  }

  find(data) {
    if(!this.tree) return null;

    let current = this.tree
    let found = false
    while(current && !found){
      if(data < current.data){
        current = current.left
      } else if(data > current.data){
        current = current.right
      } else {
          found = current
      }

    }

    if(!found) return null;
    return found

  }

  remove( data ) {
  let removeElem=this.find(data)

  }

  min() {
    let min;
    if(this.tree.left === null)
      return this.tree;
    else{
      min=this.tree
      while (min.left){
        min=min.left
      }
    return min.data
    }

  }

  max() {
    let max;
    if (this.tree.right === null)
      return this.tree;
    else {
      max = this.tree
      while (max.right) {
        max = max.right
      }
      return max.data
    }
  }
}

module.exports = {
  BinarySearchTree
};