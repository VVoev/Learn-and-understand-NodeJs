'use strict';

var EventEmitter = require('events');
var util = require('util');

class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world!';
    }

    greet(data) {
        console.log(this.greeting + ': ' + data);
        this.emit('greet', data);
    }
}

module.exports = Greetr;