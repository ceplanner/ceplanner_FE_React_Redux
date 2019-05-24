import React, { Component } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {editEvent} from '../../Actions'


class EditConfirmation extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    //tobe completed****************************************************8
    this.props.editEvent(this.props.values.id, this.props.values)
    this.props.history.push("/myevents2")
  
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  

  render() {

    
    const {
     
      values: {
        eventName,
        eventType,
        eventDate,
        eventDescription,
        eventBudget,
        location,
        agenda,
        user_id, id
        
      }
    } = this.props;

    return (
      <div>
        {/* {console.log(this.props)} */}
        <h1 className="confpage">Confirm Event Details</h1>
        <p>
          Click Confirm if the following details have been correctly entered
        </p>
        <ListGroup>
          <ListGroupItem>Event Name: {eventName}</ListGroupItem>
          <ListGroupItem>Event Type: {eventType}</ListGroupItem>
          <ListGroupItem>Event Date: {eventDate}</ListGroupItem>
          <ListGroupItem>Event Description: {eventDescription}</ListGroupItem>
          <ListGroupItem>Event Budget: {eventBudget}</ListGroupItem>
          <ListGroupItem>Event Title: {location}</ListGroupItem>
          <ListGroupItem>Event Agenda: {agenda}</ListGroupItem>
          <ListGroupItem>Event user_id: {user_id}</ListGroupItem>
          <ListGroupItem>Event id: {id}</ListGroupItem>
        </ListGroup>

        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Submit </Button>
      </div>
    );
  }
}

// export default withRouter(Confirmation);
const mapStateToProps = (state, props) => {
  return {
    
    selectedevent: state.myEvents.find(selected=>selected.id===props.match.params.id)
   
  };
};

// export default connect(
//   mapStateToProps,
//   { signup }
// )(withRouter(Confirmation));

export default withRouter(
  connect(
    mapStateToProps,
    { editEvent }
  )(EditConfirmation)
);
