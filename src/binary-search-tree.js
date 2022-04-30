const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.tree = null;
    }

    root() {
        return this.tree
    }

    add(data) {
        var newNode = new Node(data);
        if (this.tree === null) {
            this.tree = newNode;
            return this;
        }
        let current = this.tree;
        while (current) {
            if (data === current.data) return undefined;
            if (data < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    has(data) {
        return !!this.find(data)
    }

    find(data) {
        if (!this.tree) return null;

        let current = this.tree
        let found = false
        while (current && !found) {
            if (data < current.data) {
                current = current.left
            } else if (data > current.data) {
                current = current.right
            } else {
                found = current
            }

        }

        if (!found) return null;
        return found

    }

    remove(value) {
        this.tree = removeNode(this.tree, value)

        function removeNode(node, value) {
            if (!node) {
                return null
            }
            if (value < node.data) {
                node.left = removeNode(node.left, value)
                return node
            } else if (node.data < value) {
                node.right = removeNode(node.right, value)
                return node
            } else {
                if (!node.left && !node.right) {
                    return null
                }
                if (!node.left) {
                    node = node.right
                    return node
                }
                if (!node.right) {
                    node = node.left
                    return node
                }
                let minFromRight = node.right;
                while (minFromRight.left) {
                    minFromRight = minFromRight.left
                }
                node.data = minFromRight.data
                node.right = removeNode(node.right, minFromRight.data);
                return node;
            }
        }
    }

    min() {
        let min;
        if(!this.tree) return
        if (this.tree.left === null)
            return this.tree;
        else {
            min = this.tree
            while (min.left) {
                min = min.left
            }
            return min.data
        }

    }

    max() {
        let max;
        if(!this.tree) return
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