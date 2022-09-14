const List = require('../models/List')
const Todo = require('../models/Todo')

module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },
    getLists: async (req,res)=>{
        try{
            const listNames = await List.find({userId:req.user.id})
            res.render('lists.ejs', {lists: listNames, user: req.user})
        }catch(err){
            console.log(err)
        }
        
    },
    createList: async (req, res)=>{
        try{
            await List.create({list: req.body.listName, completed: false, userId: req.user.id})
            console.log('New list has been created!')
            res.redirect('/lists')
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