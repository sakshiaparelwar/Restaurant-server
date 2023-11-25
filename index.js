const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const customerRoutes = require("./routes/CustomerRoutes");
const dotenv = require("dotenv");

dotenv.config();

mongoose.set("strictQuery", true);
mongoose.connect(
  process.env.MONGO,

  () => {
    console.log("connected to database ");
  }
);

const db = mongoose.connection;

db.on("error", () => {
  console.log("Error while connecting to database");
});
db.on("open", () => {
  console.log("Database connected");
});

app.use(express.json());
app.use(cors());
app.use("/customers", customerRoutes);

app.listen(5000, () => {
  console.log("Server started on 5000");
});
