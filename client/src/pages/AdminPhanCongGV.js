import React from "react";
import Home from "./Home";

function AdminPhanCongGV() {
  return (
    <Home>
      <div className="col py-3">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Phân công giảng viên hướng dẫn</a>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div class="container">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Mã SV</th>
              <th scope="col">Tên sinh viên</th>
              <th scope="col">Giáo viên hướng dẫn</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1811505310412</td>
              <td>Võ Thị Ánh Lời</td>
              <td>
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
              </td>
            </tr>
            <tr>
              <td>1811505310132</td>
              <td>Nguyễn Văn Hiệp</td>
              <td>
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
              </td>
            </tr>
            <tr>
              <td>1811505310432</td>
              <td>Nguyễn Sỹ Dũng</td>
              <td>
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
              </td>
            </tr>
            <tr>
              <td>1811505310419</td>
              <td>Phạm Anh Tú</td>
              <td>
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
              </td>
            </tr>
            <tr>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container-fluid mt-3">
        <input
          name="crate"
          id="bt-hoidong"
          class="btn btn-primary float-end"
          type="button"
          value="Lưu"
        />
      </div>
    </Home>
  );
}

export default AdminPhanCongGV;
