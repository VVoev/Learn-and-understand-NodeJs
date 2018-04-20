// Your Javascript Code Goes Here
function greet() {
    console.log('hi');
}

greet();

function logGreeting(fn) {
    fn();
}

logGreeting(greet);


var greetMe = function () {
    console.log('Hi You')
}

greetMe();

logGreeting(greetMe);

logGreeting(function () {
    console.log('Hello again');
})