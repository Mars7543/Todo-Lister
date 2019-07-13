const mongoose = require('mongoose')

const todoListSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo'
    }]
})

const TodoList = mongoose.model('TodoList', todoListSchema)
module.exports = TodoList