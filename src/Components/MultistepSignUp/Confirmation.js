import React, { Component } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {signup} from '../../Actions';
import imagewinner2 from "../../Images/Image-winner2.png";

class Confirmation extends Component {
 
  saveAndContinue = e => {
    e.preventDefault();
    //add the action to register here 
    // const {
    //   values: { firstName, lastName, email, password, yearOfBirth, jobTitle, company }
    // } = this.props;
    // this.props.signup(values)
    this.props.signup(this.props.values)
    this.props.history.push("/Login");
    console.log(this.props.values)
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {

    const {
      values: { firstName, lastName, email, password,yearOfBirth, jobTitle, company }
    } = this.props;

    return (
      <div className='formcontainer2'>
         {/* {console.log(this.props)} */}
         <div className="imgcontainer2">
          <img src={imagewinner2} className="img-fluid" alt="fp" />
        </div>
         
      <div className='signupform2'>
        <h1 className="confpage">Confirm your Details</h1>
        
        <ListGroup>
          <ListGroupItem>First Name:{firstName}</ListGroupItem>
          <ListGroupItem>Last Name: {lastName}</ListGroupItem>
          <ListGroupItem>Email: {email}</ListGroupItem>
          <ListGroupItem>Password: {password}</ListGroupItem>
          <ListGroupItem> Year of Birth: {yearOfBirth}</ListGroupItem>
          <ListGroupItem>Job Title: {jobTitle}</ListGroupItem>
          <ListGroupItem>Company:  {company}</ListGroupItem>
        </ListGroup>
         <div className='buttongroup'>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Confirm & login </Button></div>
        </div>
      </div>
    );
  }
}

// export default withRouter(Confirmation);
const mapStateToProps = state => {
  return { 
   
  Users: state.users,
  registering: state.registering
  
   };
};

// export default connect(
//   mapStateToProps,
//   { signup }
// )(withRouter(Confirmation));

export default withRouter(connect(mapStateToProps, {signup})(Confirmation))