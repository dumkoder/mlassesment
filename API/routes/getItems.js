const express = require('express')

const getItemsController = require('../controllers/getItems')

const router = express.Router()

router.get('/items/:id', getItemsController.getItemsById)

router.get('/items', getItemsController.getItems)

module.exports = router