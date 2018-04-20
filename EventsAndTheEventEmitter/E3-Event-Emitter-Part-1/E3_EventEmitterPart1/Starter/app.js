var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somebody say hi');
});

emtr.on('greet', function () {
    console.log('Greeting occured');
});

console.log('HELLO!');

emtr.emit('greet');

//emtr.off();
emtr.emit('greet');