const express = require("express");
const router = express.Router();
const customerSchema = require("../schema/customerSchema");
const bcrypt = require("bcrypt");

router.post("/create-customers", (req, res, next) => {
  const { name, phone, email, password } = req.body;
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      customerSchema.create(
        { name, phone, email, password: hash },
        (err, data) => {
          if (err) {
            return next(err);
          } else {
            return res.json(data);
          }
        }
      );
    })
    .catch((err) => {
      console.log(err.message);
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
      if (bcrypt.compare(password, customer.password)) {
        res.json("You have login successfully");
      } else {
        res.json("PASSWORD is incorect");
      }
    } else {
      res.json("Please signin first");
    }
  });
});

module.exports = router;
