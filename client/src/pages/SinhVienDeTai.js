import React from "react";
import Home from "../pages/Home";
import { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, Table } from "reactstrap";

const axios = require("axios");
function SinhVienDeTai() {
  const [tenDeTai, setTenDeTai] = useState("");
  const [users, setUser] = useState({});
  const [detai, SetDeTai] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/taikhoan", { withCredentials: true })
      .then((res) => setUser(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/detai/sinhviendetai/sinhvien", {
        withCredentials: true,
      })
      .then((res) => SetDeTai(res.data));
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/detai/new-detai/create", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        tenDeTai,
      }),
    });
    setTenDeTai("");
  };
  return (
    <Home>
      <div className="container my-3 shadow-sm">
        <div class="page-header">
          <h1 className="title pb-2 text-center">Đăng ký đề tài</h1>
        </div>
      </div>
      <div className="container">
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label className="my-3">Tên Đồ Án</Label>
            <Input
              type="text"
              name="đồ án"
              placeholder="name"
              value={tenDeTai}
              onChange={(e) => setTenDeTai(e.target.value)}
            />
          </FormGroup>
          <div class="form-group">
            <label className="my-3" for="exampleFormControlSelect1">
              Tên Sinh Viên
            </label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>{users.tenTaiKhoan}</option>
            </select>
          </div>
          <Button className="my-3">Thêm Mới</Button>
        </Form>
        <Table striped className="table-hover">
          <thead>
            <tr>
              <th>Tên Đề Tài</th>
              <th>Trạng Thái</th>
              <th>Nhận Xét</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{detai.tenDeTai}</td>
              <td>{detai.trangThai}</td>
              <td>{detai.nhanXet}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Home>
  );
}

export default SinhVienDeTai;
