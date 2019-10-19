import React, { Component } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { Card, Container, Col, Button, Form, Input } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './Login.scss'
import Logo from '../../photos/Logos/MainLogo.svg'

export class Login extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  login = e => {
    e.preventDefault()

    axiosWithAuth()
      .post('/users/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token)
        this.props.history.push('/home')
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container className='loginContainer'>
        <Col>
          <Card className='loginCard'>
            <img src={Logo} alt='Potluck Logo' className='loginLogo' />
            <h1 className='loginHeader'>Login To Your Account</h1>
            <Form onSubmit={this.login}>
              <Input
                type='text'
                name='username'
                placeholder='Username'
                className='loginInput'
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
              <Input
                type='password'
                name='password'
                placeholder='Password'
                className='loginInput'
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
              <Button className='loginButton' type='submit'>
                Login
              </Button>
            </Form>
          </Card>
        </Col>
      </Container>
    )
  }
}

export default Login
