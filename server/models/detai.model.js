const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DetaiSchema = new Schema({
  tenDeTai: {
    type: String,
    require: true,
  },
  maSinhVien: {
    type: Schema.Types.ObjectId,
    require: true,
  },
  maGiangVien: {
    type: Schema.Types.ObjectId,
    require: true,
  },
});

module.exports = mongoose.model("DeTai", DetaiSchema);
