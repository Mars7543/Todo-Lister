const TodoList  = require('../../models/todoList')
const router    = require('express').Router()

// Create
router.post('/todoLists', async (req, res) => {
    try {
        const todoList = await TodoList.create(req.body)
        res.status(201).send(todoList)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Read All
router.get('/todoLists', async (req, res) => {
    try {
        const todoList = await TodoList.find({}).populate('todos')
        res.send(todoList)
    } catch (e) {
        res.status(500).send(e)
    }
})

// Read by ID
router.get('/todoLists/:id', async (req, res) => {
    try {
        const todoList = await TodoList.findById(req.params.id).populate('todos')
        res.send(todoList)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Update
router.put('/todoLists/:id', async (req, res) => {
    try {
        const todoList = await TodoList.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(todoList)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Delete by ID
router.delete('/todoLists/:id', async (req, res) => {
    try {
        const todoList = await TodoList.findByIdAndDelete(req.params.id)
        res.send(todoList)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router