const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const KhoaSchema = new Schema({
  tenKhoa: {
    type: String,
    require: true,
    unique: true,
  },
});

module.exports = mongoose.model("Khoa", KhoaSchema);
