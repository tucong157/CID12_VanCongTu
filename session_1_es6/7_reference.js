var x = 10;
var y = 'abc';
var a = x;
var b = y;
console.log(x, y, a, b);

x = 20;
console.log(a);

var reference = [1];
var refCopy = reference;

console.log(refCopy);
reference.push(2);
console.log(reference);
console.log(refCopy);

var obj = {
    firsr: 'reference'
}
obj = {
    second: 'ref2'
}
console.log(obj)