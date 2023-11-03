const mongoose = require("mongoose");
const customerSchema = new mongoose.Schema(
  {
    name: { type: String },
    phone: { type: Number },
    email: { type: String },
    password: { type: String },
  },
  {
    collection: "Customers",
  }
);

module.exports = mongoose.model("Customers", customerSchema);
