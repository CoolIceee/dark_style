const { Router } = require("express");
const router = Router();
const { basketController } = require("../controllers/basket.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/add/user/:id", authMiddleware, basketController.addProductBasket);
router.get("/get/user", authMiddleware, basketController.getProductBasket);
router.delete(
  "/delete/user/:id",
  authMiddleware,
  basketController.deleteProductBasket
);
module.exports = router;
