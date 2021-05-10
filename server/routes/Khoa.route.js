const { json } = require("express");
const express = require("express");
const router = express.Router();

const Khoa = require("../models/khoa.model");

router.post("/create", async (req, res) => {
  const { tenkhoa } = req.body;
  if (!tenkhoa) {
    return res
      .status(400)
      .json({ success: false, message: "khong co ten khoa" });
  }
  try {
    const newKhoa = new Khoa({
      tenKhoa: tenkhoa,
    });
    await newKhoa.save();
    res.json({ success: true, newKhoa });
  } catch (error) {
    console.log(error);
  }
});

router.get("/", async (req, res) => {
  const khoa = await Khoa.find();
  res.json({ khoa });
});

module.exports = router;
