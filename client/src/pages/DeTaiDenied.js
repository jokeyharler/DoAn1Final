import React from "react";
import Home from "./Home";
import { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Table } from "reactstrap";

const axios = require("axios");
function DeTaiDenied(props) {
  const [tenSinhVien, setTenSinhVien] = useState("");
  const [tenDeTai, setTenDeTai] = useState("");
  const [phanhoi, setPhanHoi] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/detai/" + props.match.params.id)
      .then((res) => {
        setTenSinhVien(res.data.tenSinhVien);
        setTenDeTai(res.data.tenDeTai);
      });
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    await fetch(
      "http://localhost:5000/api/detai/phanhoi/" + props.match.params.id,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          phanhoi,
        }),
      }
    );
  };

  return (
    <Home>
      <div className="container my-3 shadow-sm">
        <div class="page-header">
          <h1 className="title pb-2 text-center">Phản hồi đề tài</h1>
        </div>
      </div>
      <div className="container">
        <Form onSubmit={onFormSubmit}>
          <FormGroup>
            <h3 className="my-3 font-weight-bold">tên đề tài : {tenDeTai}</h3>
            <h3 className="my-3">sinh viên thực hiện : {tenSinhVien}</h3>
          </FormGroup>
          <FormGroup>
            <Label className="my-3">Phản hồi</Label>
            <Input
              type="text"
              name="phanhoi"
              value={phanhoi}
              onChange={(e) => setPhanHoi(e.target.value)}
              placeholder="phản hồi"
            />
          </FormGroup>
          <Button className="my-3" type="submit">
            gửi
          </Button>
        </Form>
      </div>
    </Home>
  );
}

export default DeTaiDenied;
