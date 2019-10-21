import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./addEvent.css";
class EventDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form id='form'>
        <div className='formContainer'>
          <h2 id='center'>When New Ideas Start</h2>
          <FormGroup>
            <Label>Event Name</Label>
            <Input
              id='input'
              placeholder='Event Name'
              onChange={this.props.handleChange("eventName")}
              defaultValue={values.eventName}
            />
          </FormGroup>

          <FormGroup>
            <Label>Event Type</Label>
            <Input
              id='input'
              type='text'
              placeholder='Event Type'
              onChange={this.props.handleChange("eventType")}
              defaultValue={values.eventType}
            />
          </FormGroup>

          <FormGroup>
            <Label>Event Start Date</Label>
            <Input
              id='input'
              type='date'
              placeholder='Event Start Date'
              onChange={this.props.handleChange("eventDate")}
              defaultValue={values.eventDate}
            />
          </FormGroup>
          <Button id='btn' onClick={this.saveAndContinue}>
            Save And Continue{" "}
          </Button>
        </div>
      </Form>
    );
  }
}

export default EventDetails;
