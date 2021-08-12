const express = require("express");
const router = express.Router();

const argon2 = require("argon2");
const taiKhoan = require("../models/taikhoan.model");
const sinhvien = require("../models/taikhoan.model");

const sinhvienMiddleWare = require("../middlewares/sinhvienLogin.middleware");

router.post("/create", async (req, res) => {
  const {
    tenTaiKhoan,
    loaiTaiKhoan,
    gioiTinh,
    namSinh,
    queQuan,
    diaChi,
    email,
    matKhau,
    maKhoa,
    maLop,
    chucVu,
  } = req.body;
  try {
    const hashedPassword = await argon2.hash(matKhau);
    const newTaiKhoan = new taiKhoan({
      tenTaiKhoan,
      loaiTaiKhoan,
      gioiTinh,
      namSinh,
      queQuan,
      diaChi,
      email,
      matKhau: hashedPassword,
      maKhoa,
      maLop,
      chucVu,
    });
    await newTaiKhoan.save();
    res.json({ success: true, newTaiKhoan });
  } catch (error) {
    console.log(error);
  }
});

router.post("/gvhd", sinhvienMiddleWare, async (req, res) => {
  const { maGiangVien } = req.body;
  await sinhvien.findOneAndUpdate(
    { _id: req.studentId },
    { maGiangVien: maGiangVien }
  );
  res.json({ message: "updated" });
});

router.get("/", sinhvienMiddleWare, async (req, res) => {
  let sinhvien = await taiKhoan.findById({ _id: req.studentId });
  res.json(sinhvien);
});

module.exports = router;
