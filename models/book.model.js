const mongoose = require('mongoose')
const { Schema } = mongoose

const bookSchema = new Schema({
  name: {
    type: String,
    require: true
  }, 
  author: String,
 
  uri: String
})

module.exports = mongoose.model('Book', bookSchema)


