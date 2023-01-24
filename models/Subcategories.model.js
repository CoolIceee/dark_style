const mongoose = require("mongoose");

const subcategoriesSchema = mongoose.Schema({
  name: { type: String },
  genderСategories: { type: mongoose.Schema.Types.ObjectId, required: true },
  subcategoryProduct: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductCategories",
    },
  ],
  // category: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "Category" },
  // floorCategory: { type: mongoose.Schema.Types.ObjectId}
});
const Subcategories = mongoose.model("Subcategories", subcategoriesSchema);
module.exports = Subcategories;
