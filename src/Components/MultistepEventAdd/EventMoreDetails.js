import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./addEvent.css";
class EventMoreDetails extends Component {
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
      <Form id='form' color='blue'>
        <div className='formContainer'>
          <h1 id='header'>A little More About the Event</h1>
          <FormGroup>
            <Label>Description</Label>
            <Input
              id='input'
              type='text'
              placeholder='Event Description'
              onChange={this.props.handleChange("eventDescription")}
              defaultValue={values.eventDescription}
            />
          </FormGroup>
          <FormGroup>
            <Label>Event Budget</Label>
            <Input
              id='input'
              placeholder='Event Budget'
              onChange={this.props.handleChange("eventBudget")}
              defaultValue={values.eventBudget}
            />
          </FormGroup>
          <FormGroup>
            <Label>Location</Label>
            <Input
              id='input'
              placeholder='Location'
              onChange={this.props.handleChange("location")}
              defaultValue={values.location}
            />
          </FormGroup>
          <FormGroup>
            <Label>Agenda</Label>
            <Input
              id='input'
              placeholder='Agenda'
              onChange={this.props.handleChange("agenda")}
              defaultValue={values.agenda}
            />
          </FormGroup>
          <div className='flexBtn'>
            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Save And Continue </Button>
          </div>
        </div>
      </Form>
    );
  }
}

export default EventMoreDetails;
