const Todo = require('../models/Todo')
const List = require('../models/List')

module.exports = {
    getTodos: async (req,res)=>{
        try{
            const listId = req.params.listId
            const listName = await List.find({_id: listId})
            const todoItems = await Todo.find({list: listId})
            const itemsLeft = await Todo.countDocuments({list: listId, completed: false})
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, listId: listId, listName: listName, user: req.user})
            console.log(!req.user)
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        try{
            const listId = req.params.listId
            await Todo.create({list: listId, todo: req.body.todoItem, completed: false})
            console.log('Todo has been added!')
            res.redirect(`/${listId}/todos`)
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    