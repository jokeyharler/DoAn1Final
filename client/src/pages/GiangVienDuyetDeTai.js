import React from "react";
import Home from "./Home";
import { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
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

const Detai = (props) => {
  return (
    <tr>
      <td>{props.currentDeTai.tenDeTai}</td>
      <td>{props.currentDeTai.trangThai}</td>
      <td>
        <Link to={"/edit/" + props.currentDeTai._id}>Chi tiết tiến độ</Link>
      </td>
    </tr>
  );
};

const DetaiUnSettle = (props) => {
  return (
    <tr>
      <td>{props.currentDeTai.tenDeTai}</td>
      <td>{props.currentDeTai.trangThai}</td>
      <td>
        <button
          onClick={() => props.updateDeTai(props.currentDeTai._id)}
          className="btn btn-sm btn-primary"
        >
          Duyệt
        </button>{" "}
        |{" "}
        <Link
          className="btn btn-sm btn-danger"
          to={"/giangvien/detai/" + props.currentDeTai._id}
        >
          từ chối
        </Link>
      </td>
    </tr>
  );
};

function GiangVienDuyetDeTai() {
  const [activeTab, setActiveTab] = useState("1");
  const [detaiList, setDeTaiList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/detai/all-detai")
      .then((res) => setDeTaiList(res.data));
    console.log(detaiList);
  }, []);

  const showDeTaiList = () => {
    return detaiList
      .filter((i) => i.trangThai === "Duyệt")
      .map((currentDeTai) => {
        return <Detai currentDeTai={currentDeTai} key={currentDeTai._id} />;
      });
  };

  const onSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setDeTaiList(
      detaiList.filter((val) =>
        val.tenDeTai.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  const showDeTaiListApprove = () => {
    return detaiList
      .filter((i) => i.trangThai === "Chưa Duyệt")
      .map((currentDeTai) => {
        return (
          <DetaiUnSettle
            currentDeTai={currentDeTai}
            key={currentDeTai._id}
            updateDeTai={updateDeTai}
          />
        );
      });
  };

  const updateDeTai = (id) => {
    axios
      .post("http://localhost:5000/api/detai/" + id)
      .then((res) => console.log(res.data));
    axios
      .get("http://localhost:5000/api/detai/all-detai")
      .then((res) => setDeTaiList(res.data));
  };

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <Home>
      <div className="col py-3">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">Đề tài</a>
            <form onSubmit={handleSearch} className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={onSearch}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div className="container">
        <Nav tabs>
          <NavItem className="text-center">
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Đề Tài
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Duyệt Đề Tài
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">tên đề tài</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>{showDeTaiList()}</tbody>
                </table>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">tên đề tài</th>
                      <th scope="col">Trạng thái</th>
                      <th scope="col">Thao tác</th>
                    </tr>
                  </thead>
                  <tbody>{showDeTaiListApprove()}</tbody>
                </table>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </Home>
  );
}

export default GiangVienDuyetDeTai;
