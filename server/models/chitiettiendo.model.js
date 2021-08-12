const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChiTietTienDo = new Schema({
  maDeTai: {
    type: Schema.Types.ObjectId,
    ref: "DeTai",
  },
  tenTienDo: {
    type: String,
    require: true,
  },
  filePath: {
    type: String,
    default: null,
  },
  nhanXet: {
    type: String,
    default: null,
  },
  ngayNop: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("ChiTietTienDo", ChiTietTienDo);
