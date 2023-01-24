const { Router } = require('express')
const router = Router()
const { categoryController } = require('../controllers/category.controller')

router.post('', categoryController.addCategory)
router.get('', categoryController.getCategory)
router.get('/:id', categoryController.getCategory)

module.exports = router
