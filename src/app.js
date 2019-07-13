const express   = require('express')
const path      = require('path')
const app       = express()
const port      = process.env.PORT || 3000

// database config
require('./db/mongoose')

// api (backend) route config
app.use(express.json())
app.use('/apis', require('./routes/backend/braindump'))
app.use('/apis', require('./routes/backend/todo'))
app.use('/apis', require('./routes/backend/todoList'))

// frontend routes config
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../templates/views'))
app.use('/static', express.static(path.join(__dirname, '../public')))
app.use(require('./routes/frontend'))

// run server
app.listen(port, () => console.log(`Server running on port ${port}...`))