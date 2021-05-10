const express = require("express");
const router = express.Router();

const detai = require("../models/detai.model");

const adminMiddleware = require("../middlewares/login.middleware");
const sinhvienMiddleWare = require("../middlewares/sinhvienLogin.middleware");

//Lấy đề tài theo giảng viên
router.get("/giangvien", adminMiddleware, async (req, res) => {
  const detaiAdmin = await detai.find({ maGiangVien: req.adminId });
  res.json({ detaiAdmin });
});

//thêm mới đề tài
router.post("/create", adminMiddleware, async (req, res) => {
  const { tenDeTai, maSinhVien } = req.body;
  try {
    const newDeTai = new detai({
      tenDeTai,
      maSinhVien,
      maGiangVien: req.adminId,
    });
    await newDeTai.save();
    res.json({ success: true, newDeTai });
  } catch (error) {
    console.log(error);
  }
});

//xóa đề tài
router.delete("/:id", adminMiddleware, async (req, res) => {
  try {
    const deletedDetai = await detai.findByIdAndDelete({ _id: req.params.id });
    res.json({ success: true, deletedDetai });
  } catch (error) {
    console.log(error);
  }
});

//lấy đề tài thuộc sinh viên
router.get("/sinhvien", sinhvienMiddleWare, async (req, res) => {
  const DeTai = await detai.find({ maSinhVien: req.studentId });
  res.json({ DeTai });
});

module.exports = router;
