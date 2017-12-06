const structs = require('./src/index.js');

var testLL = new structs.DoublyLinkedList;
var testNode = new structs.Node;

testLL.addToHead(1);
testLL.addToHead(2);
testLL.addToHead(3);
testLL.addToTail(0);

test('Head has value of 3', function() { 
	expect(testLL.head.value).toBe(3);
});

test('Tail has value of 0', function() { 
	expect(testLL.tail.value).toBe(0);
});

test('slowSearch(2) found value, 2', function() { 
	expect(testLL.linearTimeSearch(2)).toBe(2);
});

test('indexOf(2) returns array, [1]', function() { 
	expect(testLL.indexOf(2)).toEqual([1]);
});


var testBST = new structs.BST;

testBST.insert(0);
testBST.insert(1);
testBST.insert(9);
testBST.insert(2);
testBST.insert(8);
testBST.insert(3);
testBST.insert(7);
testBST.insert(4);
testBST.insert(6);
testBST.insert(5);

test('Root node (BST) is 0', function() {
	expect(testBST.value).toBe(0);
});

test('Root node has left value of ', function() {
	expect(testBST.left).toBe(0);
});

test('Root node has right value of ', function() {
	expect(testBST.right).toBe(0);
});
