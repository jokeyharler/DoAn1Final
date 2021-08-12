import React from "react";
import Home from "../pages/Home";
import { useState } from "react";
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
function TienDo() {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <Home>
      <div className="container my-3 shadow-sm">
        <div class="page-header">
          <h1 className="title pb-2 text-center">Tiến Độ</h1>
        </div>
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
              Đã Nộp Báo Cáo
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Chưa Nộp Báo Cáo
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div class="card text-center my-2 border border-primary shadow-0 mb-3 text-primary">
                  <div class="card-header">Quản Lý Sân Bay</div>
                  <div class="card-body">
                    <h5 class="card-title">Tuần 2 : usecase</h5>
                  </div>
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <div class="card text-center my-2 border border-warning shadow-0 mb-3 text-warning">
                  <div class="card-header">Quản Lý Sân Bay</div>
                  <div class="card-body">
                    <h5 class="card-title">Tuần 2 : usecase</h5>
                  </div>
                  <div class="card-footer text-muted">2 days ago</div>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    </Home>
  );
}

export default TienDo;
