import React, { Component } from "react";
import EventDetails from "./EventDetails";
import EventMoreDetails from "./EventMoreDetails";
import Confirmation from "./Confirmation";
import MyEvents from '../MyEvents'
import {signup} from '../../Actions'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class EventForm extends Component {
  state = {
    step: 1,
    eventName: "",
    eventType: "",
    eventDate: "",
    eventDescription: "",
    eventBudget: "",
    location: "",
    agenda: "",
    user_id: parseInt(localStorage.getItem('userid'))
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
    const { eventName, eventType, eventDate, eventDescription, eventBudget,location,agenda,user_id } = this.state;
    const values = { eventName, eventType, eventDate, eventDescription, eventBudget,location,agenda, user_id};
    switch (step) {
      case 1:
        return (
          <EventDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <EventMoreDetails
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
        return <MyEvents />;
      default:
        return null;
    }
  }
}

const mapStateToProps = state => {
  return { 
    //to be updated*************************************************************** 
  registering: state.registering
     };
};

//to be updated******************************************************************* 
export default withRouter(connect(mapStateToProps, {signup})(EventForm))