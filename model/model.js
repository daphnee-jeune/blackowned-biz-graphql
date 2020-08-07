const mongoose = require('mongoose')

const bizSchema = new mongoose.Schema({
    name: String,
    category: String,
    phone: String,
    instagram: String,
    address: String,
    year: String
})

module.exports = new mongoose.model('Business', bizSchema)