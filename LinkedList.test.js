const structs = require('./src/index.js');

var testLL = new structs.LinkedList;
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
	expect(testLL.slowSearch(2)).toBe(2);
});

test('indexOf(2) returns array, [1]', function() { 
	expect(testLL.indexOf(2)).toEqual([1]);
});
