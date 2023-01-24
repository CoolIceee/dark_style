const Basket = require("../models/Basket.model");
const Product = require("../models/Product.model");

module.exports.basketController = {
  addProductBasket: async (req, res) => {
    try {
      await Basket.create({
        user: req.user.id,
        product: req.params.id,
      });
      await Product.findByIdAndUpdate(req.params.id, {
        $push: { people: req.user.id },
      });
      const data = await Product.find();
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getProductBasket: async (req, res) => {
    try {
      const data = await Basket.find({
        user: req.user.id,
      }).populate("product");

      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  deleteProductBasket: async (req, res) => {
    try {
      const basket = await Basket.find({
        product: req.params.id,
      });
      const productID = basket[0].product;
      await Product.findByIdAndUpdate(productID, {
        $pull: { people: req.user.id },
      });
      await Basket.findOneAndDelete({
        product: req.params.id,
      });
      const data = Basket.find({
        user: req.user.id,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
};
