var Todos = require('../models/todoModel');

var config = require('../config');

module.exports = function (app) {
    app.get('/api/setupTodos', (req, res) => {

        //seed 
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy milk',
                isDone: false,
                hasAtttachment: false
            },
            {
                username: 'test',
                todo: 'feed dog',
                isDone: false,
                hasAtttachment: false
            },
            {
                username: 'test',
                todo: 'buy eggs',
                isDone: false,
                hasAtttachment: false
            }
        ];

        config.isSeedExecuted = true;
        Todos.create(starterTodos, (err, results) => {
            res.send(results);
        })
    })
}