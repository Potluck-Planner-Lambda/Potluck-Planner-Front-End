import React, { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Card, Container, Col, Row, Button, Form, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./CreateAccount.scss";
import axios from "axios";
import Logo from "../../photos/Logos/MainLogo.svg";
import GreenCheck from "../../photos/Icons/charmark-green.svg";
const CreateAccount = props => {
  const user=useContext(UserContext);
  // console.log(user.username);
  const handleSubmit = e => {
    e.preventDefault();
    // console.log(
    //   e.target.username.value,
    //   e.target.full_name.value,
    //   e.target.email.value,
    //   e.target.password.value
    // );
    const registerUser = {
      username: e.target.username.value,
      full_name: e.target.full_name.value,
      email: e.target.email.value,
      password: e.target.password.value
    };
    axios
      .post(
        "https://potluck-planner-bw.herokuapp.com/users/register",
        registerUser
      )
      .then(res => {
        console.log(res.data);
        user.username=registerUser.username;
        localStorage.setItem("username",registerUser.username);
        // console.log(props.history);
        props.history.push("/Home");
      })
      .catch(err => console.error(err));
  };
  return (
      <Container className="signUpContainer">
        <Row>
          <Col>
            <h1>Plan Your Potluck</h1>
            <p>
              <img src={GreenCheck} alt="Green Checkmark" /> Create Events and
              Invite your Friends
            </p>
            <p>
              <img src={GreenCheck} alt="Green Checkmark" /> Provide a list of
              potluck items and allow your guests to select the items they will
              be bringing
            </p>
            <p>
              <img src={GreenCheck} alt="Green Checkmark" /> Know exactly how
              many guests you'll be having by requesting an RSVP from your
              attendees
            </p>
          </Col>
          <Col xs="auto">
            <Card className="signUpCard">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col>
                    <img className="signupLogo" src={Logo} alt="Potluck Logo" />
                    <h1 className="signUpHeader">
                      Sign up for Putluck Planner
                    </h1>
                  </Col>
                </Row>
                <Row className="signUpInput">
                  <Col>
                    <Input
                      type="text"
                      name="username"
                      placeholder="Username"
                      className="inputBorder"
                    />
                  </Col>
                </Row>
                <Row className="signUpInput">
                  <Col>
                    <Input
                      type="text"
                      name="full_name"
                      placeholder="Full Name"
                      className="inputBorder"
                    />
                  </Col>
                </Row>
                {/* <Row className='signUpInput'>
                <Col>
                  <Input
                    type='text'
                    name='firstname'
                    placeholder='First Name'
                    className='inputBorder'
                  />
                </Col>

                <Col>
                  <Input
                    type='text'
                    name='lastname'
                    placeholder='Last Name'
                    className='inputBorder'
                  />
                </Col>
              </Row> */}

                <Row>
                  <Col>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="signUpInput inputBorder"
                    />

                    <Input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="signUpInput inputBorder"
                    />

                    <Input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="signUpInput inputBorder"
                    />
                    <Button className="signUpButton" type="submit">
                      Sign Up
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
  );
};

export default CreateAccount;
