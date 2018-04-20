// object properties and methods
var obj = {
	greet: 'Hello'
}

console.log(obj.greet);
console.log(obj['greet']);
var prop = 'greet';
console.log(obj[prop]);

// functions and arrays
var arr = [];

arr.push(() => {
	console.log('Hello world 1');
});
arr.push(function ivan() {
	console.log('Hello world 2');
});
arr.push(function () {
	console.log('Hello world 3');
});

arr.forEach(function (item) {
	item();
	console.log(item);
});