const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  list: {
    type: String,
    required: false,
  },
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
