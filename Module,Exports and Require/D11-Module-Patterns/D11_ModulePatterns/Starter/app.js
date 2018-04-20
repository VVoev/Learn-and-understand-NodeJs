var greet = require('./greet1.js');
greet();

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'changed Hello World';

var gree3b = require('./greet3');
gree3b.greet();


var Greet4 = require('./greet4');
var gtr = new Greet4();
gtr.greet();

var great5 = require('./greet5').greet;
great5();
