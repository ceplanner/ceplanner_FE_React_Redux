import React, { Component } from "react";
import EditDetails from '../MultistepEdit/EditDetails'
import EditConfirmation from './EditConfirmation'
import MyEvents from '../MyEvents'
import {editEvent} from '../../Actions'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class EditForm extends Component {
  constructor(props)
  {
    super(props)
    this.state ={step: 1,
      eventName:this.props.location.state.selectedevent.eventName,
      eventType: this.props.location.state.selectedevent.eventType,
      eventDate: this.props.location.state.selectedevent.eventDate,
      eventDescription: this.props.location.state.selectedevent.eventDescription,
      eventBudget: this.props.location.state.selectedevent.eventBudget,
      location: this.props.location.state.selectedevent.location,
      agenda: this.props.location.state.selectedevent.agenda,
      id: this.props.location.state.selectedevent.id,
      user_id: parseInt(localStorage.getItem('userid'))}
      
  }
  // state = {
  //   step: 1,
  //   eventName:'',
  //   eventType: "",
  //   eventDate: "",
  //   eventDescription: "",
  //   eventBudget: "",
  //   location: "",
  //   agenda: "",
  //   user_id: parseInt(localStorage.getItem('userid'))
  // };

  

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
    const { eventName, eventType, eventDate, eventDescription, eventBudget,location,agenda,user_id,id } = this.state;
    const values = { eventName, eventType, eventDate, eventDescription, eventBudget,location,agenda, user_id, id};
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
          <EditConfirmation
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
            
          />
        );
      case 3:
        return <MyEvents />;
      default:
        return null;
    }
  }
}

const mapStateToProps = (state, props) => {
  return { 
    //to be updated*************************************************************** 
    selectedevent: state.myEvents.find(selected=>selected.id===props.match.params.id)
     };
};

//to be updated******************************************************************* 
export default withRouter(connect(mapStateToProps, {editEvent})(EditForm))