const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SinhvienSchema = new Schema({
  tenSinhVien: {
    type: String,
    require: true,
  },
  gioiTinh: {
    type: String,
    enum: ["Nam", "Nữ"],
    require: true,
  },
  maGiangVien: {
    type: Schema.Types.ObjectId,
    default: null,
  },
  maDeTai: {
    type: Schema.Types.ObjectId,
    default: null,
  },
  namSinh: {
    type: Number,
    require: true,
  },
  queQuan: {
    type: String,
    require: true,
  },
  diaChi: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  matKhau: {
    type: String,
    require: true,
  },
  maLop: {
    type: Schema.Types.ObjectId,
    ref: "Lop",
  },
});

module.exports = mongoose.model("SinhVien", SinhvienSchema);
