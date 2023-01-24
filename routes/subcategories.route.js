const { Router } = require('express')
const router = Router()
const {
  subcategoriesController,
} = require('../controllers/subcategories.controller')

router.post('', subcategoriesController.addSubcategories)
router.get('/sub/:id', subcategoriesController.getCategory)
router.get('/sub', subcategoriesController.getOneCategory)

module.exports = router
