import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import imagewinner3 from "../../Images/Image-flowers.png";

class PersonalDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <div className='formcontainer2'>
        <div className='imgcontainer2'>
          <img src={imagewinner3} className='img-fluid' alt='fp' />
        </div>
        <Form color='blue' className='signupform2'>
          <h1 className='ui centered'>Tell Us More About You</h1>
          <FormGroup>
            <Label>Year of Birth</Label>
            <Input
              type='number'
              // placeholder="Year of Birth"
              onChange={this.props.handleChange("yearOfBirth")}
              defaultValue={values.yearOfBirth}
            />
          </FormGroup>
          <FormGroup>
            <Label>Job Title</Label>
            <Input
              // placeholder="Job Title"
              onChange={this.props.handleChange("jobTitle")}
              defaultValue={values.jobTitle}
            />
          </FormGroup>
          <FormGroup>
            <Label>Company</Label>
            <Input
              // placeholder="Country"
              onChange={this.props.handleChange("company")}
              defaultValue={values.company}
            />
          </FormGroup>
          <div className='buttongroup'>
            <Button onClick={this.saveAndContinue}>Save And Continue </Button>{" "}
          </div>
        </Form>
      </div>
    );
  }
}

export default PersonalDetails;
