const mongoose = require('mongoose')

const productСategorySchema = mongoose.Schema({
  name: { type: String },
  subcategory: { type: mongoose.Schema.Types.ObjectId, ref: "Subcategories" },
});

const ProductCategory = mongoose.model('ProductCategories', productСategorySchema)
module.exports = ProductCategory
