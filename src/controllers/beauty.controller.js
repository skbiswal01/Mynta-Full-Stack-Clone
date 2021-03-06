const express = require("express");

const router = express.Router();

const Beautyproductdata = require("../models/beautydata.model");

router.post("/", async (req, res) => {
  try {
    const beautyproducts = await Beautyproductdata.insertMany(req.body);
    return res.status(200).send(beautyproducts);
  } catch (err) {
    console.log(err.message);
    return res.status(400).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const beautyproducts = await Beautyproductdata.find().lean().exec();
    return res.render("ejs/beautypage", { beautyproducts });

    // console.log(beautyproducts);
    return res.status(200).send(beautyproducts);
  } catch (err) {
    console.log(err.message);
    return res.status(400).send(err.message);
  }
});

module.exports = router;
