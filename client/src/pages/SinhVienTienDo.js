import React from "react";
import { useState, useEffect } from "react";
import Home from "../pages/Home";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

const axios = require("axios");
const TienDoCard = (props) => {
  return (
    <div className="card my-2">
      <h5 className="card-header">{props.currentTienDo.tenTienDo}</h5>
      <div className="card-body">
        <h5 className="card-title">Link bài tập</h5>
        <a className="card-text d-block">{props.currentTienDo.filePath}</a>
        <a href="#" class="btn btn-primary">
          xem chi tiết
        </a>
      </div>
    </div>
  );
};

const TienDoCardComment = (props) => {
  return (
    <div className="card my-2">
      <h5 className="card-header">{props.currentTienDo.tenTienDo}</h5>
      <div className="card-body">
        <h5 className="card-title">Nhận xét của giảng viên hướng dẫn</h5>
        <p className="card-text d-block">{props.currentTienDo.nhanXet}</p>
        <a href="#" class="btn btn-primary">
          xem chi tiết
        </a>
      </div>
    </div>
  );
};

function SinhVienTienDo() {
  const [activeTab, setActiveTab] = useState("1");
  const [tienDo, setTienDo] = useState([]);
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tiendo/")
      .then((res) => setTienDo(res.data));
    console.log(tienDo);
  }, []);

  const showTienDoList = () => {
    return tienDo
      .filter((i) => i.nhanXet === null)
      .map((currentTienDo) => {
        return (
          <TienDoCard currentTienDo={currentTienDo} key={currentTienDo._id} />
        );
      });
  };

  const showTienDoListComment = () => {
    return tienDo
      .filter((i) => i.nhanXet)
      .map((currentTienDo) => {
        return (
          <TienDoCardComment
            currentTienDo={currentTienDo}
            key={currentTienDo._id}
          />
        );
      });
  };
  return (
    <Home>
      <div className="container my-3 shadow-sm">
        <div class="page-header">
          <h1 className="title pb-2 text-center">Tiến độ</h1>
        </div>
      </div>
      <div className="container">
        <a
          href="http://localhost:3000/sinhvien/tiendo/create"
          className="btn btn-danger"
          value="nộp tiến độ"
        >
          nộp tiến độ
        </a>
      </div>
      <div className="container my-2">
        <Nav tabs>
          <NavItem className="text-center">
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              đã nhận xét
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              chưa nhận xét
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">{showTienDoListComment()}</Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">{showTienDoList()}</Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </Home>
  );
}

export default SinhVienTienDo;
