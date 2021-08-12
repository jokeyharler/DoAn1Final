import React from "react";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../css/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const [redirect, setRedirect] = useState(false);
  const onFormSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        matKhau,
      }),
    });
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/" />;
  }
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>Đồ Án UTE</h1>
          <h4>Stay hungry, stay foolish</h4>
          <Form onSubmit={onFormSubmit} className="my-4">
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="username"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="my-4">
              <Form.Control
                type="password"
                name="matKhau"
                value={matKhau}
                onChange={(e) => setMatKhau(e.target.value)}
                placeholder="password"
                required
              />
            </Form.Group>
            <Button variant="success" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
