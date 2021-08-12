import React from "react";
import Home from "./Home";
import "../css/chitiet.css";

function GiangVienDuyetDeCuong() {
  return (
    <Home>
      <div class="content">
        <div class="name-table">
          <span>Nhận xét tiến độ</span>
        </div>
        <div class="box-col">
          <div class="col-item">Mã sinh viên: 1811505310207</div>
          <div class="col-item">tên tiến độ: DA07</div>
          <div class="col-item">Tên sinh viên: Nguyễn Sỹ Dũng</div>
          <div class="col-item">Tên đề tài: Phần mềm quản lý sinh viên UTE</div>
        </div>
        <div class="document-col">
          <div class="text">File đề cương:</div>
          <div class="file">
            <div class="file-text">Phần mềm quản lí sinh viên UTE.docx </div>
            <button class="button">...</button>
          </div>
        </div>
        <div class="comment-col">
          <div class="text">Nhận xét:</div>
          <div class="text-area">
            <textarea
              id="w3review"
              name="w3review"
              rows="15"
              cols="100"
            ></textarea>
          </div>
        </div>
        <div class="custom">
          <div class="text">Tình trạng:</div>
          <div class="custom-select">
            <select>
              <option value="0">Chưa duyệt</option>
              <option value="1">Đã duyệt</option>
            </select>
          </div>
        </div>
        <div class="button-send">
          <button class="button">Gửi</button>
        </div>
      </div>
    </Home>
  );
}

export default GiangVienDuyetDeCuong;
