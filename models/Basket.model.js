const mongoose = require("mongoose");

const basketSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  number: { type: Number },
});

const Basket = mongoose.model("Basket", basketSchema);
module.exports = Basket;
