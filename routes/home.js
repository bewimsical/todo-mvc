const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex)

router.post('/createList', homeController.createList)

router.delete('/deleteList', homeController.deleteList)

module.exports = router