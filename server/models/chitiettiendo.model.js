const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChiTietTienDo = new Schema({
  maDeTai: {
    type: Schema.Types.ObjectId,
    ref: "GiangVien",
  },
  tenTienDo: {
    type: String,
    require: true,
  },
  filePath: {
    type: String,
    default: null,
  },
  fileName: {
    type: String,
    default: null,
  },
  nhanXet: {
    type: String,
    default: null,
  },
  diemSo: {
    type: Number,
    default: null,
  },
  yeuCau: {
    type: String,
    default: null,
  },
  ngayBatDau: {
    type: Date,
    default: Date.now(),
  },
  ngayKetThuc: {
    type: Date,
    require: true,
  },
  trangThai: {
    type: String,
    default: "processing",
  },
});

module.exports = mongoose.model("ChiTietTienDo", ChiTietTienDo);
