import React from "react";
import { Button, Form, FormGroup, Label, Input, Table } from "reactstrap";
import Home from "../pages/Home";
function DoAn() {
  return (
    <Home>
      <div className="container my-3 shadow-sm">
        <div class="page-header">
          <h1 className="title pb-2 text-center">Đồ Án</h1>
        </div>
      </div>
      <div className="container">
        <Form>
          <FormGroup>
            <Label className="my-3">Tên Đồ Án</Label>
            <Input type="text" name="đồ án" placeholder="name" />
          </FormGroup>
          <div class="form-group">
            <label className="my-3" for="exampleFormControlSelect1">
              Mã Sinh Viên
            </label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <Button className="my-3">Thêm Mới</Button>
        </Form>
        <Table striped>
          <thead>
            <tr>
              <th>Mã Sinh Viên</th>
              <th>Tên Sinh Viên</th>
              <th>Tên Đề Tài</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Home>
  );
}

export default DoAn;
