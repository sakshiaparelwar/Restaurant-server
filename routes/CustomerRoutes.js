const express = require("express");
const router = express.Router();
const customerSchema = require("../schema/customerSchema");

router.post("/create-customers", (req, res, next) => {
  customerSchema.create(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

router.get("/", (req, res, next) => {
  customerSchema.find(req.body, (err, data) => {
    if (err) {
      return next(err);
    } else {
      return res.json(data);
    }
  });
});

router.post("/login", (req, res, next) => {
  const { name, email, password } = req.body;
  customerSchema.findOne({ email }).then((customer) => {
    if (customer) {
      if (customer.password === password) {
        res.json("You have login successfully");
      } else {
        res.json("no record founds");
      }
    } else {
      res.json("Please signin first");
    }
  });
});

module.exports = router;
