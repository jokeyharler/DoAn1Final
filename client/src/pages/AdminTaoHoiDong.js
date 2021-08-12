import React from "react";
import Home from "../pages/Home";
function AdminTaoHoiDong() {
  return (
    <Home>
      <div className="container my-3 shadow-sm">
        <div class="page-header">
          <h1 className="title pb-2 text-center">Tạo hội đồng</h1>
        </div>
      </div>
      <div className="container">
        <div class="row">
          <div class="col">
            <label class="input-group-text" for="inputGroupSelect01">
              Chọn Giảng viên
            </label>
          </div>
          <div class="col">
            <select class="form-select" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">Nguyễn Văn Phát</option>
              <option value="2">Nguyễn Thị Thúy Hoài</option>
              <option value="3">Hoàng Thị Mỹ Lệ</option>
              <option value="4">Lê Vũ</option>
              <option value="5">Trần Hoàng Vũ</option>
              <option value="6">Nguyễn Thị Hà Quyên</option>
              <option value="7">Võ Trung Hùng</option>
            </select>
            <select class="form-select mt-3" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">Nguyễn Văn Phát</option>
              <option value="2">Nguyễn Thị Thúy Hoài</option>
              <option value="3">Hoàng Thị Mỹ Lệ</option>
              <option value="4">Lê Vũ</option>
              <option value="5">Trần Hoàng Vũ</option>
              <option value="6">Nguyễn Thị Hà Quyên</option>
              <option value="7">Võ Trung Hùng</option>
            </select>
            <select class="form-select mt-3" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">Nguyễn Văn Phát</option>
              <option value="2">Nguyễn Thị Thúy Hoài</option>
              <option value="3">Hoàng Thị Mỹ Lệ</option>
              <option value="4">Lê Vũ</option>
              <option value="5">Trần Hoàng Vũ</option>
              <option value="6">Nguyễn Thị Hà Quyên</option>
              <option value="7">Võ Trung Hùng</option>
            </select>
            <select class="form-select mt-3" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">Nguyễn Văn Phát</option>
              <option value="2">Nguyễn Thị Thúy Hoài</option>
              <option value="3">Hoàng Thị Mỹ Lệ</option>
              <option value="4">Lê Vũ</option>
              <option value="5">Trần Hoàng Vũ</option>
              <option value="6">Nguyễn Thị Hà Quyên</option>
              <option value="7">Võ Trung Hùng</option>
            </select>
            <select class="form-select mt-3" id="inputGroupSelect01">
              <option selected>Choose...</option>
              <option value="1">Nguyễn Văn Phát</option>
              <option value="2">Nguyễn Thị Thúy Hoài</option>
              <option value="3">Hoàng Thị Mỹ Lệ</option>
              <option value="4">Lê Vũ</option>
              <option value="5">Trần Hoàng Vũ</option>
              <option value="6">Nguyễn Thị Hà Quyên</option>
              <option value="7">Võ Trung Hùng</option>
            </select>
          </div>
        </div>
        <input
          name="crate"
          id="bt-hoidong"
          className="btn btn-primary float-end my-3"
          type="button"
          value="Tạo mới"
        ></input>
      </div>
    </Home>
  );
}

export default AdminTaoHoiDong;
