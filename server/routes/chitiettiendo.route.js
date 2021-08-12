const express = require("express");
const router = express.Router();

const chiTietTienDo = require("../models/chitiettiendo.model");
const detai = require("../models/detai.model");
const sinhvienMiddleWare = require("../middlewares/sinhvienLogin.middleware");
const taikhoanModel = require("../models/taikhoan.model");

//Tạo tiến độ mới
router.post("/create", sinhvienMiddleWare, async (req, res) => {
  const sinhvien = await taikhoanModel.findOne({ _id: req.studentId });
  const { tenTienDo, filePath } = req.body;
  const newTienDo = new chiTietTienDo({
    maDeTai: sinhvien.maDeTai,
    tenTienDo,
    filePath,
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

router.get("/", async (req, res) => {
  const newtiendo = await chiTietTienDo.find();
  res.json(newtiendo);
});

//chức năng nộp bài
router.post("/nopbai", sinhvienMiddleWare, async (req, res) => {
  const { tenTienDo } = req.body;
  const sinhvien = await taikhoanModel.findOne({ _id: req.studentId });
  const file = req.files.file;
  const fileName = file.name;
  file.mv("E:/ky220/DoAn1/server/public/" + fileName, function (erros) {
    if (erros) {
      console.log(erros);
    }
  });
  const filePath = "E:/ky220/DoAn1/server/public/" + fileName;
  let newTienDo = new chiTietTienDo({
    maDeTai: sinhvien.maDeTai,
    tenTienDo,
    filePath,
    fileName,
  });
  await newTienDo.save();

  const { formData } = req.body;
  // for (let key of formData.entries()) {
  //   console.log(key[0] + ", " + key[1]);
  // }
  console.log(req.body);
  res.json({ message: "submited" });
});

//chức năng chấm điểm
router.put("/chamdiem/:id", async (req, res) => {
  const { nhanXet } = req.body;
  if (!diemSo) {
    return res.json({ message: "score invalid" });
  }
  await chiTietTienDo.findOneAndUpdate({ _id: req.params.id }, { nhanXet });
  res.json({ message: "fullfill score" });
});

module.exports = router;
