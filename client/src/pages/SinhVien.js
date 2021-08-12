import React from "react";
import Home from "../pages/Home";
function SinhVien() {
  return (
    <Home>
      <div className="container my-3 shadow-sm">
        <div class="page-header">
          <h1 className="title pb-2 text-center">Sinh Viên Thực Hiện</h1>
        </div>
      </div>
      <div className="container">
        <div class="card shadow-sm mb-2">
          <h5 class="card-header border border-primary text-primary">
            Phạm Anh Tú
          </h5>
          <div class="card-body">
            <h5 class="card-title">Quản Lý Cây Xanh</h5>
            <a href="#" class="btn btn-primary">
              Xem tiến độ
            </a>
          </div>
        </div>
        <div class="card shadow-sm">
          <h5 class="card-header border-primary text-primary">
            Võ Thị Ánh Lời
          </h5>
          <div class="card-body">
            <h5 class="card-title">Quản Lý Chuyến Bay</h5>
            <a href="#" class="btn btn-primary">
              Xem tiến độ
            </a>
          </div>
        </div>
      </div>
    </Home>
  );
}

export default SinhVien;
