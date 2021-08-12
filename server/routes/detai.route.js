const express = require("express");
const router = express.Router();

const detai = require("../models/detai.model");
const sinhvien = require("../models/taikhoan.model");

const adminMiddleware = require("../middlewares/login.middleware");
const sinhvienMiddleWare = require("../middlewares/sinhvienLogin.middleware");

//Lấy đề tài theo giảng viên
router.get("/giangvien", adminMiddleware, async (req, res) => {
  const detaiAdmin = await detai.find({ maGiangVien: req.adminId });
  res.json({ detaiAdmin });
});

router.get("/all-detai", async (req, res) => {
  const alldetai = await detai.find();
  res.json(alldetai);
});

router.get("/:id", async (req, res) => {
  const newsinhvien = await sinhvien.findOne({ maDeTai: req.params.id });
  const newdetai = await detai.findOne({ _id: req.params.id });
  res.json({
    tenSinhVien: newsinhvien.tenTaiKhoan,
    tenDeTai: newdetai.tenDeTai,
  });
});

router.post("/phanhoi/:id", async (req, res) => {
  const { phanhoi } = req.body;
  const newdetai = await detai.findByIdAndUpdate(
    { _id: req.params.id },
    { nhanXet: phanhoi }
  );
  res.json(phanhoi);
});

router.post("/:id", async (req, res) => {
  const approve = await detai.findByIdAndUpdate(
    { _id: req.params.id },
    { trangThai: "Duyệt" }
  );
  res.send("appoved");
});
//thêm mới đề tài
router.post("/new-detai/create", sinhvienMiddleWare, async (req, res) => {
  const { tenDeTai } = req.body;
  let newDeTai = new detai({
    tenDeTai,
    maSinhVien: req.studentId,
    trangThai: "Chưa Duyệt",
  });
  await newDeTai.save();
  res.json(newDeTai);
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
router.get("/sinhviendetai/sinhvien", sinhvienMiddleWare, async (req, res) => {
  const DeTai = await detai.findOne({ maSinhVien: req.studentId });
  res.json(DeTai);
});

module.exports = router;
