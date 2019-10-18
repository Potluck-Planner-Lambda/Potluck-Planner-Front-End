import React from 'react';
import { Card, Container, Col, Row, Button, Form, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../photos/Logos/MainLogo.svg';
import GreenCheck from '../photos/Icons/charmark-green.svg'
import './CreateAccount.scss';


const CreateAccount = () => {

  return (
    <Container className="signUpContainer">
      <Row>
        <Col>
          <h1>Plan Your Potluck</h1>
          <p><img src={GreenCheck} alt="Green Checkmark" /> Create Events and Invite your Friends</p>
          <p><img src={GreenCheck} alt="Green Checkmark" /> Provide a list of potluck items and allow your guests to select the items they will be bringing</p>
          <p><img src={GreenCheck} alt="Green Checkmark" /> Know exactly how many guests you'll be having by requesting an RSVP from your attendees</p>
        </Col>
        <Col xs="auto">
          <Card className="signUpCard">
            <Form>
              <Row>
                <Col>
                  <img className="signupLogo" src={Logo} alt="Potluck Logo"/>
                  <h1 className="signUpHeader">Sign up for Putluck Planner</h1>
                </Col>
              </Row>
              <Row className="signUpInput">
                <Col>
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="inputBorder"
                  />
                </Col>

                <Col>
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="inputBorder"
                  />
                </Col>

              </Row>

              <Row>
                <Col>
                  <Input
                    type="number"
                    name="phonenumber"
                    placeholder="Phone Number (555) 555-5555"
                    className="signUpInput inputBorder"
                  />

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
                  <Button className="signUpButton" type="submit">Sign Up</Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
  
}

export default CreateAccount;