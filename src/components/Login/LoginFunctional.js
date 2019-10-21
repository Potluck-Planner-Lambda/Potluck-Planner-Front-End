import React, { useContext, useState } from "react";
// import { axiosWithAuth } from "../../utils/axiosWithAuth";
import axios from "axios";
import { Card, Container, Col, Button, Form, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.scss";
import Logo from "../../photos/Logos/MainLogo.svg";
import UserContext from "../../contexts/UserContext";

export default function LoginFunctional(props) {
  const { user, setUser } = useContext(UserContext);
  const [state, setState] = useState({
    credentials: {
      username: "",
      password: ""
    }
  });

  const handleChange = e => {
    setState({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  const login = e => {
    e.preventDefault();

    axios
      .post(
        "https://potluck-planner-bw.herokuapp.com/users/login",
        state.credentials
      )
      .then(res => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", state.credentials.username);
        localStorage.setItem("user_id", res.data.user_id);
        setUser({
          username: state.credentials.username,
          user_id: res.data.user_id
        });
        props.history.push("/Home");
      })
      .catch(err => console.log(err));
  };
  return (
    <Container className="loginContainer">
      <Col>
        <Card className="loginCard">
          <img src={Logo} alt="Potluck Logo" className="loginLogo" />
          <h1 className="loginHeader">Login To Your Account</h1>
          <Form onSubmit={login}>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              className="loginInput"
              value={state.credentials.username}
              onChange={handleChange}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className="loginInput"
              value={state.credentials.password}
              onChange={handleChange}
            />
            <Button className="loginButton" type="submit">
              Login
            </Button>
          </Form>
        </Card>
      </Col>
    </Container>
  );
}
