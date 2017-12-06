// OBJECTS
function DoublyLinkedList() {
	this.head = null;
	this.tail = null;
};

function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}

// ADD METHODS
DoublyLinkedList.prototype.addToHead = function(value) {
	var newNode = new Node(value, this.head, null);
	if (this.head) this.head.prev = newNode;
	else this.tail = newNode;
	this.head = newNode;
}

DoublyLinkedList.prototype.addToTail = function(value) {
	var newNode = new Node(value, null, this.tail);
	if (this.tail) this.tail.next = newNode;
	else this.head = newNode;
	this.tail = newNode;
}

// REMOVE METHODS
DoublyLinkedList.prototype.removeHead = function() { 
	if (!this.head) return null;
	let temp = this.head.value;
	this.head = this.head.next;
	if (this.head) this.head.prev = null;
	else this.tail = null;

	return temp;
}

DoublyLinkedList.prototype.removeTail = function() {
	if (!this.tail) return null;
	let temp = this.tail.value;
	this.tail = this.tail.prev;
	if (this.tail) this.tail.next = null;
	else this.head = null;

	return temp;
}

// SEARCH METHODS
DoublyLinkedList.prototype.linearTimeSearch = function(value) {
	let currentNode = this.head;
	while(currentNode) {
		if (currentNode.value === value) return currentNode.value;
			
		currentNode = currentNode.next;
	}

	return null;
}

DoublyLinkedList.prototype.indexOf = function(value) {
	var indices = [];
	var index = 0;
	var currentNode = this.head;

	while(currentNode) {
		if (currentNode.value === value) indices.push(index);

		currentNode = currentNode.next;
		index++;
	}

	return indices;
}

// SORT METHODS


module.exports = {
	DoublyLinkedList: DoublyLinkedList,
	Node: Node
}
