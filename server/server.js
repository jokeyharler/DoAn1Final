const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
const cors = require("cors");
var upload = require("express-fileupload");
require("dotenv").config();

const khoaRoute = require("./routes/Khoa.route");
const lopRouter = require("./routes/lop.route");
const detaiRouter = require("./routes/detai.route");
const taikhoanRoute = require("./routes/taikhoan.route");
const loginRoute = require("./routes/login.route");
const tienDoRoute = require("./routes/chitiettiendo.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);
app.use(upload());

mongoose.connect(
  "mongodb+srv://anhtudev:qaz123456@cluster0.balsr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

const connection = mongoose.connection;
connection.once("open", () => console.log("mongodb connect succeed"));

app.use("/api/khoa", khoaRoute);
app.use("/api/lop", lopRouter);
app.use("/api/detai", detaiRouter);
app.use("/api/taikhoan", taikhoanRoute);
app.use("/auth", loginRoute);
app.use("/api/tiendo", tienDoRoute);

app.listen(5000, () => {
  console.log(`server running on port 5000`);
});
