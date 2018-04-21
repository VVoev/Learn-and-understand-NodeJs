function greet(cb) {
    console.log('Hello');

    var data = {
        name: 'John doe'
    };
    cb(data);
}

greet(function (data) {
    console.log('The callback was invoked ' + data.name);
});

greet(function (data) {
    console.log('different callback was invoked');
    console.log(data);
});