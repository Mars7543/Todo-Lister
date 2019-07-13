const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/todo-lister-api', { useNewUrlParser: true, useCreateIndex: true })
.then(() => console.log('Connected to db'))
.catch(e => console.log(e))