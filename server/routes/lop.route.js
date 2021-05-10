const express = require("express");
const router = express.Router();

const lop = require("../models/lop.model");

router.post("/create", async (req, res) => {
  const { tenLop, maKhoa, soSinhVien } = req.body;
  try {
    const newLop = new lop({ tenLop, maKhoa, soSinhVien });
    await newLop.save();
    res.json({ success: true, newLop });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
