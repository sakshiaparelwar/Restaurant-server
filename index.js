const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const customerRoutes = require("./routes/CustomerRoutes");
const dotenv = require("dotenv");

dotenv.config();

mongoose.set("strictQuery", true);
// console.log(process.env.REACT_APP_MONGO);
mongoose.connect(
  process.env.REACT_APP_MONGO,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    try {
      console.log("connected successfully");
    } catch (err) {
      console.log(err.response.data);
    }
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
