const express = require("express");
const router = express.Router();

const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const taiKhoan = require("../models/taikhoan.model");

router.post("/login", async (req, res) => {
  const { email, matKhau } = req.body;
  if (!email || !matKhau) {
    return res.status(400).json({ message: "fail to login" });
  }
  try {
    const user = await taiKhoan.findOne({ email });
    if (!user) {
      return res.json({ message: "user invalid" });
    }
    const validPass = argon2.verify(user.matKhau, matKhau);
    if (!validPass) {
      return res.json({ message: "password invalid" });
    }
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.SECRET_TOKEN
    );
    res.cookie("jwt", accessToken, {
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.send({
      message: "Login Success",
    });
  } catch (error) {
    res.send(error);
  }
});

router.post("/logout", (req, res) => {
  res.cookie("jwt", "", {
    maxAge: 0,
  });
  res.send("remove success");
});

module.exports = router;
