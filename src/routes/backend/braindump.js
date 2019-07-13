const Braindump = require('../../models/braindump')
const router    = require('express').Router()

// Create
router.post('/braindumps', async (req, res) => {
    try {
        const braindump = await Braindump.create(req.body)
        res.status(201).send(braindump)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Read All
router.get('/braindumps', async (req, res) => {
    try {
        const braindump = await Braindump.find({})
        res.send(braindump)
    } catch (e) {
        res.status(500).send(e)
    }
})

// Read by ID
router.get('/braindumps/:id', async (req, res) => {
    try {
        const braindump = await Braindump.findById(req.params.id)
        res.send(braindump)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Update
router.put('/braindumps/:id', async (req, res) => {
    try {
        const braindump = await Braindump.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(braindump)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Delete by ID
router.delete('/braindumps/:id', async (req, res) => {
    try {
        const braindump = await Braindump.findByIdAndDelete(req.params.id)
        res.send(braindump)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router