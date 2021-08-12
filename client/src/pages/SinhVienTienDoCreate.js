import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Home from "../pages/Home";
import { Button, Form, FormGroup, Label, Input, Table } from "reactstrap";
const axios = require("axios");
function SinhVienTienDoCreate() {
  // const [file, setFile] = useState(null);
  const [tenTienDo, setTenTienDo] = useState("");
  const [filePath, setFilePath] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/tiendo/create", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        tenTienDo,
        filePath,
      }),
    });
    setTenTienDo("");
    setFilePath("");
  };

  // const onFormSubmit = async (e) => {
  //   let formdata = new FormData();
  //   await formdata.append("tenTienDo", tenTienDo);
  //   await formdata.append("file", file);
  //   e.preventDefault();
  //   await fetch("http://localhost:5000/api/tiendo/nopbai", {
  //     method: "POST",
  //     credentials: "include",
  //     body: formdata,
  //   });
  // };

  // const handleFile = (e) => {
  //   let newfile = e.target.files[0];
  //   setFile({ file: newfile });
  //   console.log(file);
  // };
  return (
    <Home>
      <div className="container">
        <div className="container">
          <a
            className="btn btn-danger mt-2"
            href="http://localhost:3000/sinhvien/tiendo"
          >
            quay lại
          </a>
        </div>
        <div className="container my-2">
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label className="my-3">tiêu đề</Label>
              <Input
                type="text"
                name="tenTienDo"
                placeholder="tiêu đề"
                value={tenTienDo}
                onChange={(e) => setTenTienDo(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label className="my-3">Link bài nộp</Label>
              <Input
                type="text"
                name="filePath"
                placeholder="Link"
                value={filePath}
                onChange={(e) => setFilePath(e.target.value)}
              />
            </FormGroup>
            <Button className="my-3" type="submit">
              Thêm Mới
            </Button>
          </Form>
        </div>
      </div>
    </Home>
  );
}

export default SinhVienTienDoCreate;
