const { Router } = require("express");
const router = Router();
const authMiddleware = require("../middleware/auth.middleware");
const { productController } = require("../controllers/product.controller");

router.post("", productController.addProduct);
router.get("/get", productController.getProduct);
router.get("/get/:id", productController.getOneGenderProduct);
router.get(
  "/get/subcategory/product/:id",
  productController.getOneSubcategoryProduct
);
router.get(
  "/get/subcategory/category/product/:id",
  productController.getOneSubcategoryCategoryProduct
);
// router.post(
//   "/add/user/:id",
//   authMiddleware,
//   productController.addProductBasket
// );
router.delete(
  "/delete/user/:id",
  authMiddleware,
  productController.deleteProductBasket
);
module.exports = router;
