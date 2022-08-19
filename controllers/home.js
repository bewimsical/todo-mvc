const List = require('../models/List')
const Todo = require('../models/Todo')

module.exports = {
    getIndex: async (req,res)=>{
        try{
            const listNames = await List.find()
            res.render('index.ejs', {lists: listNames})
        }catch(err){
            console.log(err)
        }
        
    },
    createList: async (req, res)=>{
        try{
            await List.create({list: req.body.listName, completed: false})
            console.log('New list has been created!')
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    },
    deleteList: async (req, res)=>{
        console.log(req.body.listIdFromJSFile)
        try{
            await List.findOneAndDelete({_id:req.body.listIdFromJSFile})
            console.log('Deleted List')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}