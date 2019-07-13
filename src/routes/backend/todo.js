const Todo      = require('../../models/todo')
const router    = require('express').Router()

// Create
router.post('/todos', async (req, res) => {
    try {
        const todo = await Todo.create(req.body)
        res.status(201).send(todo)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Read All
router.get('/todos', async (req, res) => {
    try {
        const todo = await Todo.find({})
        res.send(todo)
    } catch (e) {
        res.status(500).send(e)
    }
})

// Read by ID
router.get('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        res.send(todo)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Update
router.put('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(todo)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Delete by ID
router.delete('/todos/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        res.send(todo)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router