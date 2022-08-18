const express = require('express')
const router = express.Router({mergeParams: true})
const todosController = require('../controllers/todos')

router.get('/', todosController.getTodos)

router.post('/createTodo', todosController.createTodo)

router.put('/markComplete', todosController.markComplete)

router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router