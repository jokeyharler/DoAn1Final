const express = require("express");

const jwt = require("jsonwebtoken");

const sinhvienLoginVerify = async (req, res, next) => {
  const cookie = req.cookies["jwt"];
  const verify = jwt.verify(cookie, process.env.SECRET_TOKEN);
  if (!verify) {
    return res.status(401).json("unauthenticated");
  }
  //   console.log(verify.userId);
  req.studentId = verify.userId;
  next();
};

module.exports = sinhvienLoginVerify;
