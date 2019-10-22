import React, { useState, useEffect, useContext } from 'react'
import UserContext from '../../contexts/UserContext'
import { Card, Container, Col, Row, Button, Form, Input } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './EditAccount.scss'
// import axios from "axios";
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import Logo from '../../photos/Logos/MainLogo.svg'
const EditAccount = props => {
  const { user } = useContext(UserContext)
  const [editingUser, setEditingUser] = useState(user)
  // console.log(user);
  useEffect(() => {
    axiosWithAuth()
      .get(`/users/${props.match.params.id}`)
      .then(res => {
        // console.log(res.data);
        setEditingUser(res.data)
      })
      .catch(err => console.error(err))
  }, [props.match.params.id])
  // console.log(user.username);
  const deleteAccount = () => {
    console.log('Delete Requested')
    axiosWithAuth()
      .delete(`/users/${props.match.params.id}`)
      .then(res => {
        // console.log(res.data);
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        // console.log(props.history);
        props.history.push('/Home')
      })
      .catch(err => console.error(err))
  }
  const handleSubmit = e => {
    e.preventDefault()
    // console.log(
    //   e.target.username.value,
    //   e.target.full_name.value,
    //   e.target.email.value,
    //   e.target.password.value
    // );
    const editUser = {
      // username: e.target.username.value,
      full_name: e.target.full_name.value
      // email: e.target.email.value
      // password: e.target.password.value
    }
    axiosWithAuth()
      .put(`/users/${props.match.params.id}`, editUser)
      .then(res => {
        console.log(res.data)
        user.username = editUser.username
        localStorage.setItem('username', editUser.username)
        // console.log(props.history);
        // props.history.push("/Home");
      })
      .catch(err => {
        console.error(err)
      })
  }

  // console.log(editingUser);
  // console.log(props.match.params.id);
  if (
    props.match.params.id === 'undefined' ||
    props.match.params.id === 'null'
  ) {
    // props.history.push("/");
    return <div> {props.history.push('/')}</div>
  } else {
    return (
      <Container className='signUpContainer'>
        <Row>
          <Col xs='auto'>
            <Card className='signUpCard'>
              <Row>
                <Col>
                  <img className='signupLogo' src={Logo} alt='Potluck Logo' />
                  <h1 className='signUpHeader'>Edit Account Information</h1>
                </Col>
              </Row>
              <Form onSubmit={handleSubmit}>
                {/* <Row className="signUpInput">
                  <Col>
                    Username:
                    <Input
                      type="text"
                      name="username"
                      // placeholder="Username"
                      placeholder={editingUser.username}
                      className="inputBorder"
                    />
                  </Col>
                </Row> */}
                <Row className='signUpInput'>
                  <Col>
                    Full Name:
                    <Input
                      type='text'
                      name='full_name'
                      // placeholder="Full Name"
                      placeholder={editingUser.full_name}
                      className='inputBorder'
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
                  {/* <Col>
                    Email:
                    <Input
                      type="email"
                      name="email"
                      // placeholder="Email Address"
                      placeholder={editingUser.email}
                      className="signUpInput inputBorder"
                    /> */}
                  {/* <Input
                      type="password"
                      name="password"
                      placeholder="New Password"
                      className="signUpInput inputBorder"
                    />

                    <Input
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      className="signUpInput inputBorder"
                    /> */}
                  <Button className='signUpButton' type='submit'>
                    Save Changes
                  </Button>
                  <Button
                    onClick={deleteAccount}
                    className='signUpButton deleteButton'
                  >
                    Delete Account
                  </Button>
                  <Button
                    onClick={() => props.history.push('/Home')}
                    className='signUpButton cancelButton'
                  >
                    Cancel
                  </Button>
                  {/* </Col> */}
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default EditAccount
