const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema(
  {
    name: { type: String, require: true, unique: true },
    phone: { type: Number, require: true, unique: true },
    email: { type: String, require: true, unique: true },
    password: { type: String },
  },
  {
    collection: "Customers",
  }
);

module.exports = mongoose.model("Customers", customerSchema);
