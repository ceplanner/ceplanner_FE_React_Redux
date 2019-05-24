import React, { Component } from "react";
import {  Form, FormGroup, Label, Input, Button } from "reactstrap";

class EventDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form color="green">
        <h1 className="centered">When New Ideas Start</h1>
        
            <FormGroup>
              <Label>Event Name</Label>
              <Input
                placeholder="Event Name"
                onChange={this.props.handleChange("eventName")}
                defaultValue={values.eventName}
              />
            </FormGroup>
         
            <FormGroup>
              <Label>Event Type</Label>
              <Input
                type="text"
                placeholder="Event Type"
                onChange={this.props.handleChange("eventType")}
                defaultValue={values.eventType}
              />
            </FormGroup>
         
     
        <FormGroup>
          <Label>Event Start Date</Label>
          <Input
            type="date"
            placeholder="Event Start Date"
            onChange={this.props.handleChange("eventDate")}
            defaultValue={values.eventDate}
          />
        </FormGroup>
        {/* 
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                    type='password'
                    placeholder='Password'
                    onChange={this.props.handleChange('password')}
                    defaultValue={values.password}
                    />
                </FormGroup> */}
        {/* <FormGroup>
                    <Label>Confirm Password</Label>
                    <Input
                    type='password'
                    placeholder='Confirm Password'
                    onChange={this.props.handleChange('confirmPassword')}
                    defaultValue={values.confirmPassword}
                    />
                </FormGroup> */}
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default EventDetails;
