const mongoose = require('mongoose')

const todoListSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo'
    }]
})

const TodoList = mongoose.model('TodoList', todoListSchema)
module.exports = TodoList