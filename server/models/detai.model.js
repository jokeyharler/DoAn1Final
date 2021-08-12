const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeTaiSchema = new Schema({
  tenDeTai: {
    type: String,
    require: true,
  },
  trangThai: {
    type: String,
    enum: ["Duyệt", "Chưa Duyệt"],
    require: true,
  },
  nhanXet: {
    type: String,
    default: "",
  },
  maSinhVien: {
    type: Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model("DeTai", DeTaiSchema);
