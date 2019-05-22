import React, { Component } from "react";
import EditDetails from '../MultistepEdit/EditDetails'
import Confirmation from '../MultistepEdit/Confirmation'
import MyEvents from '../MyEvents'
import {signup} from '../../Actions'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class EditForm extends Component {
  state = {
    step: 1,
    eventName: "hi",
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
          <EditDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
            case 2:
        return (
          <Confirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            signup={this.signup}
          />
        );
      case 3:
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
export default withRouter(connect(mapStateToProps, {signup})(EditForm))