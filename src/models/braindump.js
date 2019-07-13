const mongoose = require('mongoose')

const braindumpSchema = new mongoose.Schema({
    items: [String]
})

const Braindump = mongoose.model('Braindump', braindumpSchema)
module.exports = Braindump