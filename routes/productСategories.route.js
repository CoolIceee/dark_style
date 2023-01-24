const { Router } = require("express");
const router = Router();
const {
  productСategoriesController,
} = require("../controllers/productСategories.controller");

router.post("", productСategoriesController.addProductCategory);
router.get("/cat/:id", productСategoriesController.getProductCategory);

module.exports = router;
