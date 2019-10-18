import React, { Component } from "react";
import { Button, ListGroup, p } from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { addEvent } from "../../Actions";
import "./addEvent.css";

class Confirmation extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    //tobe completed****************************************************8

    this.props.addEvent(this.props.values);

    this.props.history.push("/myevents2");
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    console.log(this.props.values, "test 2222");
    const {
      values: {
        eventName,
        eventType,
        eventDate,
        eventDescription,
        eventBudget,
        location,
        agenda,
        user_id
      }
    } = this.props;

    return (
      <div>
        {/* {console.log(this.props)} */}
        <div className='confirmContainer'>
          <div className='confirmHeader'>
            <h1 className='confpage'>Confirm Event Details</h1>
            <p>
              Click Confirm if the following details have been correctly entered
            </p>
          </div>

          <ListGroup>
            <h4 className='cItem1'>Event Name: {eventName}</h4>
            <h4 className='cItem2'>Event Type: {eventType}</h4>
            <h4 className='cItem1'>Event Date: {eventDate}</h4>
            <h4 className='cItem2'>Event Description: {eventDescription}</h4>
            <h4 className='cItem1'>Event Budget: {eventBudget}</h4>
            <h4 className='cItem2'>Event Title: {location}</h4>
            <h4 className='cItem1'>Event Agenda: {agenda}</h4>
            <h4 className='cItem2'>Event Agenda: {user_id}</h4>
          </ListGroup>
          <div className='flexBtn2'>
            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Submit </Button>
          </div>
        </div>
      </div>
    );
  }
}

// export default withRouter(Confirmation);
const mapStateToProps = state => {
  return {
    addingEvent: state.addingEvent,
    error: state.error
  };
};

// export default connect(
//   mapStateToProps,
//   { signup }
// )(withRouter(Confirmation));

export default withRouter(
  connect(
    mapStateToProps,
    { addEvent }
  )(Confirmation)
);
