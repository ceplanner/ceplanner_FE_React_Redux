import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class EditDetails extends Component {
  saveAndContinue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
    return (
      <Form color="green">
 

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
        <FormGroup>
          <Label>Description</Label>
          <Input
            type="text"
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

export default EditDetails;
