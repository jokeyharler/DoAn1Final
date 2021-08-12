import React from "react";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "../css/home.css";
import logo from "../assets/ute.png";
import Cookies from "js-cookie";

const axios = require("axios");
function Home(props) {
  const [users, setUser] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/taikhoan", { withCredentials: true })
      .then((res) => setUser(res.data));
  }, []);
  const logOut = async () => {
    await fetch("http://localhost:5000/auth/logout", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
    });
  };
  const valid = Cookies.get("jwt");
  if (!valid) {
    return <Redirect to="/login" />;
  }
  return (
    <div className="home">
      <header>
        <div className="left_area">
          <h3>
            Đồ Án <span>UTE</span>
          </h3>
        </div>
        <div className="right_area">
          <a className="logout_btn" onClick={logOut} href="/login">
            Logout
          </a>
        </div>
      </header>
      <div className="body_layout">
        <div className="sidebar">
          <center>
            <img className="profilename" src={logo} />
            <h4>{users.tenTaiKhoan}</h4>
          </center>
          <a href="#">
            <i class="fas fa-desktop"></i>
            <span>Dash board</span>
          </a>
          <a href="/sinhvien/detai">
            <i class="fas fa-cogs"></i>
            <span>Sinh viên đề tài</span>
          </a>
          <a href="/sinhvien/tiendo">
            <i class="fas fa-table"></i>
            <span>Sinh viên tiến độ</span>
          </a>
          <a href="/giangvien/detai">
            <i class="fas fa-th"></i>
            <span>Giảng viên đề tài</span>
          </a>
          <a href="/giangvien/tiendo">
            <i class="fas fa-info-circle"></i>
            <span>Giảng viên tiến độ</span>
          </a>
          <a href="#">
            <i class="fas fa-sliders-h"></i>
            <span>đề cương</span>
          </a>
        </div>
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}

export default Home;
