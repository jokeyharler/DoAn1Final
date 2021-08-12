import React from "react";
import Home from "../pages/Home";
function AdminThemHoiDong() {
  return (
    <Home>
      <div className="container my-3 shadow-sm">
        <div class="page-header">
          <h1 className="title pb-2 text-center">Thêm hội đồng</h1>
        </div>
      </div>
      <div className="container">
        <table class="table">
          <tr>
            <td scope="col">
              <b>Tên đề tài</b>
            </td>
            <td scope="col">
              Quản lí sách trong thư viện trường đại học sư phạm kĩ thuật Đà
              Nẵng
            </td>
          </tr>
          <tr>
            <td>
              <b>Tên Sinh Viên</b>
            </td>
            <td>Nguyễn Văn Hiệp</td>
          </tr>
          <tr>
            <td>
              <b>Mã Sinh Viên</b>
            </td>
            <td>1811505310412</td>
          </tr>
          <tr>
            <td>
              <b>Giảng viên hướng dẫn</b>
            </td>
            <td>Hoàng Thị Mỹ Lệ</td>
          </tr>
          <tr>
            <td>
              <b>Chọn hội đồng</b>
            </td>
            <td>
              <select class="form-select mt-3" id="inputGroupSelect01">
                <option selected>Choose...</option>
                <option value="1">HD01-220</option>
                <option value="2">HD02-220</option>
                <option value="3">HD03-220</option>
                <option value="4">HD04-220</option>
              </select>
            </td>
          </tr>
        </table>
        <div class="container-fluid">
          <input
            name="save"
            id="bt-save"
            class="btn btn-primary float-end"
            type="button"
            value="Lưu"
          />
        </div>
      </div>
    </Home>
  );
}

export default AdminThemHoiDong;
