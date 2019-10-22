import React, { useContext, useState, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import { Card, Container, Col, Row, Button, Form, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../CreateAccount/CreateAccount.scss";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import Logo from "../../photos/Logos/MainLogo.svg";
// import GreenCheck from "../../photos/Icons/charmark-green.svg";
export default function EditEvent(props) {
  const { user } = useContext(UserContext);
  const [event, setEvent] = useState({});
  // console.log(user);
  useEffect(() => {
    axiosWithAuth()
      .get(`Events/${props.match.params.id}`)
      .then(res => {
        // console.log(res.data);
        setEvent(res.data);
      })
      .catch(err => console.error(err));
  }, [props.match.params.id]);
  const cancel = e => {
    e.preventDefault();
    props.history.push(`/Home`);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(
    //   e.target.username.value,
    //   e.target.full_name.value,
    //   e.target.email.value,
    //   e.target.password.value
    // );
    const editEvent = {
      event_name: e.target.event_name.value,
      date: e.target.date.value,
      time: e.target.time.value,
      description: e.target.description.value,
      address: e.target.address.value,
      city: e.target.city.value,
      state: e.target.state.value
    };
    axiosWithAuth()
      .put(`Events/${props.match.params.id}`, editEvent)
      .then(res => {
        console.log(res.data);
        props.history.push(`/Events/${res.data.event_id}`);
      })
      .catch(err => console.error(err));
  };
  const deleteEvent = e => {
    e.preventDefault();
    // console.log(
    //   e.target.username.value,
    //   e.target.full_name.value,
    //   e.target.email.value,
    //   e.target.password.value
    // );
    // const editEvent = {
    //   event_name: e.target.event_name.value,
    //   date: e.target.date.value,
    //   time: e.target.time.value,
    //   description: e.target.description.value,
    //   address: e.target.address.value,
    //   city: e.target.city.value,
    //   state: e.target.state.value
    // };
    axiosWithAuth()
      .delete(`Events/${props.match.params.id}`)
      .then(res => {
        // console.log(res.data);
        props.history.push(`/Home`);
      })
      .catch(err => console.error(err));
  };
  return (
    <Container className="signUpContainer">
      <Row>
        <Col xs="auto">
          <Card className="signUpCard">
            <Form onSubmit={e => handleSubmit(e)}>
              <Row>
                <Col>
                  <img className="signupLogo" src={Logo} alt="Potluck Logo" />
                  <h1 className="signUpHeader">Edit Potluck Event</h1>
                </Col>
              </Row>
              <Row className="signUpInput">
                <Col>
                  <Input
                    type="text"
                    name="event_name"
                    placeholder={event.event_name}
                    className="inputBorder"
                  />
                </Col>
              </Row>
              <Row className="signUpInput">
                <Col>
                  <Input
                    type="date"
                    name="date"
                    placeholder={event.date}
                    className="inputBorder"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    type="time"
                    name="time"
                    placeholder={event.time}
                    className="signUpInput inputBorder"
                  />

                  <Input
                    type="text"
                    name="description"
                    placeholder={event.description}
                    className="signUpInput inputBorder"
                  />
                  <Input
                    type="text"
                    name="address"
                    placeholder={event.address}
                    className="signUpInput inputBorder"
                  />
                  <Input
                    type="text"
                    name="city"
                    placeholder={event.city}
                    className="signUpInput inputBorder"
                  />
                  <Input
                    type="text"
                    name="state"
                    placeholder={event.state}
                    className="signUpInput inputBorder"
                  />
                  <Button className="signUpButton" type="submit">
                    Update Event
                  </Button>
                  <Button
                    className="signUpButton"
                    onClick={e => deleteEvent(e)}
                  >
                    Delete
                  </Button>
                  <Button className="signUpButton" onClick={e => cancel(e)}>
                    Cancel
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
