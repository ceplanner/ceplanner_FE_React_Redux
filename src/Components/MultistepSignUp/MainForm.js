import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Login from "../Login"
import {signup} from '../../Actions'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class MainForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    yearOfBirth: "",
    jobTitle: "",
    company: ""
  };

  signup = e =>{
  this.props.signup(this.state)
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => event => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, password, yearOfBirth,jobTitle,company } = this.state;
    const values = { firstName, lastName, email, password, yearOfBirth, jobTitle, company};
    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
           
          />
        );
      case 3:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            signup={this.signup}
          />
        );
      case 4:
        return <Login />;
      default:
        return null;
    }
  }
}

const mapStateToProps = state => {
  return { 
  registering: state.registering
     };
};

export default withRouter(connect(mapStateToProps, signup)(MainForm))