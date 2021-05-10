const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TaiKhoanSchema = new Schema({
  tenTaiKhoan: {
    type: String,
    require: true,
  },
  loaiTaiKhoan: {
    type: String,
    enum: ["Admin", "Student"],
  },
  gioiTinh: {
    type: String,
    enum: ["Nam", "Nữ"],
    require: true,
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
  maKhoa: {
    type: Schema.Types.ObjectId,
    ref: "Khoa",
  },
  maLop: {
    type: Schema.Types.ObjectId,
    ref: "Lop",
  },
  chucVu: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("TaiKhoan", TaiKhoanSchema);
