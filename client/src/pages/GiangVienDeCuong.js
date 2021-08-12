import React from "react";
import Home from "./Home";
function GiangVienDeCuong() {
  return (
    <Home>
      <div className="col py-3">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Đề cương</a>
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
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Tên đề tài</th>
            <th>Mã sinh viên</th>
            <th>Nội dung</th>
            <th>Trang thái</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Phần mềm quản lí đồ án sinh viên</td>
            <td>1811505310207</td>
            <td>
              <a href="chitiet.html">Chi tiết</a>
            </td>
            <td>Đã duyệt</td>
          </tr>
          <tr>
            <td>Phần mềm quản lí đồ án sinh viên</td>
            <td>1811505310207</td>
            <td>
              <a href="chitiet.html">Chi tiết</a>
            </td>
            <td>Đã duyệt</td>
          </tr>
          <tr>
            <td>Phần mềm quản lí đồ án sinh viên</td>
            <td>1811505310207</td>
            <td>
              <a href="chitiet.html">Chi tiết</a>
            </td>
            <td>Đã duyệt</td>
          </tr>
          <tr>
            <td>Phần mềm quản lí đồ án sinh viên</td>
            <td>1811505310207</td>
            <td>
              <a href="chitiet.html">Chi tiết</a>
            </td>
            <td>Đã duyệt</td>
          </tr>
          <tr>
            <td>Phần mềm quản lí đồ án sinh viên</td>
            <td>1811505310207</td>
            <td>
              <a href="chitiet.html">Chi tiết</a>
            </td>
            <td>Đã duyệt</td>
          </tr>
          <tr>
            <td>Phần mềm quản lí đồ án sinh viên</td>
            <td>1811505310207</td>
            <td>
              <a href="chitiet.html">Chi tiết</a>
            </td>
            <td>Đã duyệt</td>
          </tr>
          <tr>
            <td>Phần mềm quản lí đồ án sinh viên</td>
            <td>1811505310207</td>
            <td>
              <a href="chitiet.html">Chi tiết</a>
            </td>
            <td>Đã duyệt</td>
          </tr>
        </tbody>
      </table>
    </Home>
  );
}

export default GiangVienDeCuong;
