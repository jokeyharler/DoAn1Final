const express = require("express");
const router = express.Router();

const chiTietTienDo = require("../models/chitiettiendo.model");
const detai = require("../models/detai.model");
const sinhvienMiddleWare = require("../middlewares/sinhvienLogin.middleware");

//Tạo tiến độ mới
router.post("/create", async (req, res) => {
  const { maSinhVien, maDeTai, tenTienDo, ngayBatDau, ngayKetThuc } = req.body;
  const newTienDo = new chiTietTienDo({
    maSinhVien,
    maDeTai,
    tenTienDo,
    ngayBatDau,
    ngayKetThuc,
  });
  await newTienDo.save();
  res.json({ message: "Da Tao Tien Do Moi" });
});

//Lấy tiến độ của sinh viên
router.get("/sinhvien", sinhvienMiddleWare, async (req, res) => {
  const detaiId = await detai.find({ maSinhVien: req.studentId });
  const tiendo = await chiTietTienDo.find({ maSinhVien: detaiId.maSinhVien });
  if (!tiendo) {
    return res.status(400).json({ message: "unfound" });
  }
  res.json({ tiendo });
});

//chức năng nộp bài
router.put("/nopbai/:id", async (req, res) => {
  const file = req.files.file;
  const fileName = file.name;
  file.mv("E:/ky220/DoAn1/server/public/" + fileName, function (erros) {
    if (erros) {
      console.log(erros);
    }
  });
  const filePath = "E:/ky220/DoAn1/server/public/" + fileName;
  await chiTietTienDo.findOneAndUpdate(
    { _id: req.params.id },
    { filePath, fileName, trangThai: "submited" }
  );
  res.json({ message: "submited" });
});

//chức năng chấm điểm
router.put("/chamdiem/:id", async (req, res) => {
  const { nhanXet, diemSo } = req.body;
  if (!diemSo) {
    return res.json({ message: "score invalid" });
  }
  await chiTietTienDo.findOneAndUpdate(
    { _id: req.params.id },
    { nhanXet, diemSo }
  );
  res.json({ message: "fullfill score" });
});

module.exports = router;
