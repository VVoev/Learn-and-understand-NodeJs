var greetings = require('./greetings.json');
console.log();
var greet = function () {
    console.log(greetings.en);
}

module.exports = greet;