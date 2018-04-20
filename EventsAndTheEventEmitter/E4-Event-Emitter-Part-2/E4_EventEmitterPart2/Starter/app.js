var Emitter = require('events');
var eventConfig = require('./config').events

var emtr = new Emitter();

emtr.on(eventConfig.GREET, () => {
    console.log('Somebody say hi');
});

emtr.on(eventConfig.GREET, function () {
    console.log('Greeting occured');
});

console.log('HELLO!');

emtr.emit('greet');
//emtr.off();