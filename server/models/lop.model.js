const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LopSchema = new Schema({
  tenLop: {
    type: String,
    require: true,
  },
  maKhoa: {
    type: Schema.Types.ObjectId,
    ref: "khoa",
  },
  soSinhVien: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Lop", LopSchema);
