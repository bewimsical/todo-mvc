const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema({
  list: {
    type: String,
    required: false,
  },
  completed: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('List', ListSchema)