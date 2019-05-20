import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Confirmation from "./Confirmation";
import Login from "../Login"

class MainForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    yearofBirth: "",
    jobTitle: "",
    company: ""
  };

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
    const { firstName, lastName, email, password, confirmPassword, yearofBirth,jobTitle,company } = this.state;
    const values = { firstName, lastName, email, password, confirmPassword, yearofBirth,jobTitle,company};
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
          />
        );
      case 4:
        return <Login />;
      default:
        return null;
    }
  }
}

export default MainForm;
