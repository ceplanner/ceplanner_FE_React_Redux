import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { login } from "../Actions";
import Loader from "react-loader-spinner";
import "./Login.css";
import winner2 from "../Images/winner2.png";
class Login extends Component {
  state = {
    credentials: {
      email: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    // console.log(this.props)
    e.preventDefault();

    //this is so lazy should be accomplished with state objects ***************************************************

    this.props
      .login(this.state.credentials)
      .then(() => this.props.history.push("/MyEvents2"))
      .then(() => window.location.reload());
  };

  render() {
    return (
      <div className='loginpagecontainer'>
        <div className='imgcontainer'>
          <img src={winner2} className='img-fluid' alt='fp'></img>
        </div>

        <div className='formcontainer'>
          <Form onSubmit={this.login} className='signinform'>
            <FormGroup>
              <Label for='loginEmail'>Email</Label>
              <Input
                // type="email"
                name='email'
                id='loginEmail'
                // placeholder="email"
                value={this.state.credentials.email}
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for='loginPassword'>Password</Label>
              <Input
                type='password'
                name='password'
                id='loginPassword'
                // placeholder="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
            </FormGroup>
            <a href='/signup' className='register'>
              Dont have an account?
            </a>

            <Button>
              {this.props.loggingIn ? (
                <Loader type='Puff' color='#1f2a38' height='20' width='40' />
              ) : (
                "Sign In"
              )}
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ error, loggingIn }) => ({
  error,
  loggingIn
});
export default connect(
  mapStateToProps,
  { login }
)(Login);
