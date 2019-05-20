import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

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
      <Form color="blue">
        <h1 className="ui centered">Tell Us More About You</h1>
        <FormGroup>
          <Label>Year of Birth</Label>
          <Input
            placeholder="Year of Birth"
            onChange={this.props.handleChange("yearofBirth")}
            defaultValue={values.yearofBirth}
          />
        </FormGroup>
        <FormGroup>
          <Label>Job Title</Label>
          <Input
            placeholder="Job Title"
            onChange={this.props.handleChange("jobTitle")}
            defaultValue={values.jobTitle}
          />
        </FormGroup>
        <FormGroup>
          <Label>Company</Label>
          <Input
            placeholder="Country"
            onChange={this.props.handleChange("company")}
            defaultValue={values.company}
          />
        </FormGroup>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default PersonalDetails;
