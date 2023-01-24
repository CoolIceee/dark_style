const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  login: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  basket: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  like: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});
const Users = mongoose.model('User', userSchema)

module.exports = Users
