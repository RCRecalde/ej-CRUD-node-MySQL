const express = require('express')
const router = express.Router()
const {list, save, remove, update, edit} = require('../controllers/customerController')

router.get('/', list)
router.post('/add', save)
router.get('/delete/:id', remove)
router.get('/update/:id', edit)
router.post('/update/:id', update)


module.exports = router