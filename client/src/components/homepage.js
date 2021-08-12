import React from "react";
import Home from "../pages/Home";
function Homepage() {
  return (
    <Home>
      <div className="homepage">
        <div className="container my-3 shadow-sm">
          <div class="page-header">
            <h1 className="title pb-2 text-center">Trang Tổng Hợp</h1>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div class="card col-md-3 mx-3 text-center shadow-sm">
            <h5 class="card-header">Sinh Viên Nhận Đồ Án</h5>
            <div class="card-body">
              <h1 class="card-title">
                <i class="fas fa-user-friends text-primary"></i>
              </h1>
              <p class="card-text">
                <h4>4</h4>
              </p>
              <a href="#" class="btn btn-primary">
                Xem Chi Tiết
              </a>
            </div>
          </div>
          <div class="card col-md-3 mx-3 text-center shadow-sm">
            <h5 class="card-header">Đồ Án</h5>
            <div class="card-body">
              <h1 class="card-title">
                <i class="fas fa-project-diagram text-primary"></i>
              </h1>
              <p class="card-text">
                <h4>4</h4>
              </p>
              <a href="#" class="btn btn-primary">
                Xem Chi Tiết
              </a>
            </div>
          </div>
          <div class="card col-md-3 mx-3 text-center shadow-sm">
            <h5 class="card-header">Tiến Độ</h5>
            <div class="card-body">
              <h1 class="card-title">
                <i class="fas fa-briefcase text-primary"></i>
              </h1>
              <p class="card-text">
                <h4>4</h4>
              </p>
              <a href="#" class="btn btn-primary">
                Xem Chi Tiết
              </a>
            </div>
          </div>
        </div>
      </div>
    </Home>
  );
}

export default Homepage;
