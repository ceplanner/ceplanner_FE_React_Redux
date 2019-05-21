import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

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
      <Form color="blue">
        <h1 className="ui centered">A little More About the Event</h1>
        <FormGroup>
          <Label>Description</Label>
          <Input
            type='text'
            placeholder="Event Description"
            onChange={this.props.handleChange("eventDescription")}
            defaultValue={values.eventDescription}
          />
        </FormGroup>
        <FormGroup>
          <Label>Event Budget</Label>
          <Input
            placeholder="Event Budget"
            onChange={this.props.handleChange("eventBudget")}
            defaultValue={values.eventBudget}
          />
        </FormGroup>
        <FormGroup>
          <Label>Location</Label>
          <Input
            placeholder="Location"
            onChange={this.props.handleChange("location")}
            defaultValue={values.location}
          />
        </FormGroup>
        <FormGroup>
          <Label>Agenda</Label>
          <Input
            placeholder="Agenda"
            onChange={this.props.handleChange("agenda")}
            defaultValue={values.agenda}
          />
        </FormGroup>
        <Button onClick={this.back}>Back</Button>
        <Button onClick={this.saveAndContinue}>Save And Continue </Button>
      </Form>
    );
  }
}

export default EventMoreDetails;
