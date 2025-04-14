const catMe = require("cat-me");
const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const productModel = require("../model/product.model");
const userModel = require("../model/user.model");

router.get("/", function (req, res) {
  let error = req.flash("error");
  res.render("index", { error, isLoggedIn: false });
});

router.get("/shop", isLoggedIn, async function (req, res) {
  const products = await productModel.find();
  res.render("shop", { products });
});

router.get("/cart", isLoggedIn, async function (req, res) {
  console.log(catMe());
  const user = await userModel
    .findOne({ email: req.user.email })
    .populate("cart");
  const bills = user.cart.map((item) => {
    return Number(item.price) - Number(item.discount || 0);
  });
  res.render("cart", { user, bills });
});

router.get("/addtocart/:id", isLoggedIn, async function (req, res) {
  let user = await userModel.findOne({ email: req.user.email });
  user.cart.push(req.params.id);
  await user.save();
  res.redirect("/shop");
});

module.exports = router;
