const structs = require('./src/index.js');

var testLL = new structs.LinkedList;
var testNode = new structs.Node;

//test('', function() { 
//	expect(testNode.value).toBe(null);
//});

testLL.addToHead(1);
testLL.addToHead(2);
testLL.addToHead(3);


testLL.addToTail(0);
console.log(testLL.tail);
console.log(testLL.head.next.next.next);
