const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('home', { title: 'Todo Lister', filename: 'home' })
})

module.exports = router