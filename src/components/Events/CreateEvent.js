import React, { useContext } from 'react'
import UserContext from '../../contexts/UserContext'
import { Card, Container, Col, Row, Button, Form, Input } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import '../CreateAccount/CreateAccount.scss'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import Logo from '../../photos/Logos/MainLogo.svg'
// import GreenCheck from "../../photos/Icons/charmark-green.svg";
const CreateEvent = props => {
  const { user } = useContext(UserContext)
  console.log(user)
  const handleSubmit = e => {
    e.preventDefault()
    // console.log(
    //   e.target.username.value,
    //   e.target.full_name.value,
    //   e.target.email.value,
    //   e.target.password.value
    // );
    const registerEvent = {
      event_name: e.target.event_name.value,
      date: e.target.date.value,
      time: e.target.time.value,
      description: e.target.description.value,
      address: e.target.address.value,
      city: e.target.city.value,
      state: e.target.state.value
    }
    axiosWithAuth()
      .post(`users/${user.user_id}/events`, registerEvent)
      .then(res => {
        // console.log(res.data);
        props.history.push(`/Events/${res.data.event_id}`)
      })
      .catch(err => console.error(err))
  }
  return (
    <Container className='signUpContainer'>
      <Row>
        <Col xs='auto'>
          <Card className='signUpCard'>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <img className='signupLogo' src={Logo} alt='Potluck Logo' />
                  <h1 className='signUpHeader'>Create a Potluck Event</h1>
                </Col>
              </Row>
              <Row className='signUpInput'>
                <Col>
                  <Input
                    type='text'
                    name='event_name'
                    placeholder='Event Name'
                    className='inputBorder'
                  />
                </Col>
              </Row>
              <Row className='signUpInput'>
                <Col>
                  <Input type='date' name='date' className='inputBorder' />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input
                    type='time'
                    name='time'
                    className='signUpInput inputBorder'
                  />

                  <Input
                    type='text'
                    name='description'
                    placeholder='Details'
                    className='signUpInput inputBorder'
                  />
                  <Input
                    type='text'
                    name='address'
                    placeholder='Street Address'
                    className='signUpInput inputBorder'
                  />
                  <Input
                    type='text'
                    name='city'
                    placeholder='City'
                    className='signUpInput inputBorder'
                  />
                  <Input
                    type='text'
                    name='state'
                    placeholder='State'
                    className='signUpInput inputBorder'
                  />
                  <Button className='signUpButton' type='submit'>
                    Create Event
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default CreateEvent
