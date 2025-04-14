const express = require("express");
const upload = require("../config/multer-config");
const productModel = require("../model/product.model");
const router = express.Router();

router.post("/create", upload.single("image"), async function (req, res) {
  try {
    const { name, price, discount, bgcolor, panelcolor, textcolor } = req.body;
    let product = await productModel.create({
      image: req.file.buffer,
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
    });
    req.flash("success", "Product create successfully!");
    res.redirect("/owners/admin");
  } catch (err) {
    console.log(err.message);
  }
});

module.exports = router;
