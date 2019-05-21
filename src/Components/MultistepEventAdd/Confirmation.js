import React, { Component } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {signup} from '../../Actions'

class Confirmation extends Component {
 
  saveAndContinue = e => {
    e.preventDefault();
    //tobe completed****************************************************8
    // this.props.signup(this.props.values)
    this.props.history.push("/myevents");
    console.log(this.props.values)
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {

    const {
      values: { eventName, eventType, eventDate, eventDescription, eventBudget,location,agenda  }
    } = this.props;

    return (
      <div>
         {/* {console.log(this.props)} */}
        <h1 className="confpage">Confirm Event Details</h1>
        <p>
          Click Confirm if the following details have been correctly entered
        </p>
        <ListGroup>
          <ListGroupItem>First Name: {eventName}</ListGroupItem>
          <ListGroupItem>Last Name: {eventType}</ListGroupItem>
          <ListGroupItem>Email: {eventDate}</ListGroupItem>
          <ListGroupItem>Password: {eventDescription}</ListGroupItem>
          <ListGroupItem> Year of Birth: {eventBudget}</ListGroupItem>
          <ListGroupItem>Job Title: {location}</ListGroupItem>
          <ListGroupItem>Company:  {agenda}</ListGroupItem>
        </ListGroup>

        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Submit </Button>
      </div>
    );
  }
}

// export default withRouter(Confirmation);
const mapStateToProps = state => {
  return { 
   
  Users: state.myEvents,
  registering: state.registering
  
   };
};

// export default connect(
//   mapStateToProps,
//   { signup }
// )(withRouter(Confirmation));

export default withRouter(connect(mapStateToProps, {signup})(Confirmation))