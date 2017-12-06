'use strict';

function BST(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

BST.prototype.insert = function(value) {
	if (value <= this.value) {
		if (!this.left) this.left = new BST(value);
		else this.left.insert(value);
	} else if (value > this.value) {
		if (!this.right) this.right = new BST(value);
		else this.right.insert(value);
	}
}

/*
 function to determine if the binary search tree contains a particular element
 HINT: You have to use the compare() function to compare values.
 param:	tree	the binary search tree
		val		the value to search for in the tree
 pre:	tree is not null
		val is not null
 post:	none
 */

/*----------------------------------------------------------------------------*/
BST.prototype.contains = function(value) {
	if (value === this.value) return true;
	if (value < this.value) {
		if (this.left) return this.left.contains(value);
		else return false;
	} else if (value > this.value) {
		if (this.right) return this.right.contains(value);
		else return false;
	}
}

/*
 helper function to find the left most child of a node
 return the value of the left most child of cur
 param: cur		the current node
 pre:	cur is not null
 post: none
 */

/*----------------------------------------------------------------------------*/
BST.prototype._leftMost = function() {
	let cur = this;
	while(cur.left) {
		cur = cur.left;
	}
	return cur.value;
}

/*
 * Depth First Search
 * function that traverses a BST branch until null, then revert to the next node with a right child
 * param: func		a function that does some action on the value property of the BST
 * 	
 * param: order		enables the DFS to dictate the order in which the 'func' param is invoked upon the value
 */
BST.prototype.DFS = function(func, order) { 
	if (order === 'pre-order') func(this.value);
	if (this.left) this.left.DFS(func, order);
	if (order === 'in-order') func(this.value);
	if (this.right) this.right.DFS(func, order);
	if (order === 'post-order') func(this.value);
}

/*
 * Breadth First Search
 * function that traverses a BST layer by layer
 */
BST.prototype.BFS = function(func) {
	var queue = [this];
	while(queue.length >= 1) {
		var curNode = queue.shift();
		func(curNode.value);
		if (curNode.left) queue.push(curNode.left);
		if (curNode.right) queue.push(curNode.right);
	}
}

module.exports = {
	BST: BST
}
