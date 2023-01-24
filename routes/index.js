const { Router } = require("express");
const router = Router();
router.use("/product", require("./product.route"));
router.use("/category", require("./category.route"));
router.use("/subcategories", require("./subcategories.route"));
router.use("/authorization", require("./users.route"));
router.use("/basket", require("./basket.route"));
router.use("/product/categories", require("./productСategories.route"));

module.exports = router;
