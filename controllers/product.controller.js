const Product = require("../models/Product.model");
const Users = require("../models/Users.model");
module.exports.productController = {
  addProduct: async (req, res) => {
    try {
      const {
        name,
        itemName,
        people,
        gender,
        typeProduct,
        category,
        subcategories,
        photo,
        dimensions,
        description,
        price,
        discountPrice,
        quantity,
      } = req.body;
      await Product.create({
        name,
        itemName,
        people,
        gender,
        typeProduct,
        category,
        subcategories,
        photo,
        dimensions,
        description,
        price,
        discountPrice,
        quantity,
      });
      res.json("Продукт добавлен");
    } catch (error) {
      res.json(error);
    }
  },
  getProduct: async (_, res) => {
    try {
      const data = await Product.find().populate("typeProduct");
      const sortProduct = data.sort(() => {
        return Math.random() - 0.5;
      });
      res.json(sortProduct);
    } catch (error) {
      res.json(error);
    }
  },
  getOneGenderProduct: async (req, res) => {
    try {
      const data = await Product.find({
        gender: req.params.id,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getOneSubcategoryProduct: async (req, res) => {
    try {
      const data = await Product.find({
        category: req.params.id,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getOneSubcategoryCategoryProduct: async (req, res) => {
    try {
      const data = await Product.find({
        typeProduct: req.params.id,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
 
  deleteProductBasket: async (req, res) => {
    try {
      await Product.findByIdAndUpdate(req.user.id, {
        $pull: { people: req.params.id },
      });

      res.json("удалено");
    } catch (error) {
      res.json(error);
    }
  },
};
