var obj = {
    name: 'John Doe',
    greet: function (param, second) {
        console.log(`Hello ${this.name} ${param} ${!!second}`);
    }
}

obj.greet();
obj.greet.call({ name: 'me' }, 'Vlado')
obj.greet.apply({ name: 'Jane ' }, ['Doe', 'Do']);