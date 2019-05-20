import React, { Component } from 'react';
import {Col, Row, Form, FormGroup, Label, Input, Button } from "reactstrap";

class UserDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(
            <Form color='green' >
                <h1 className="centered">Join Us</h1>
                <Row form>
                <Col md={6}>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input
                    placeholder='First Name'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                </FormGroup>
                </Col>
                <Col md={6}>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input
                    type='text'
                    placeholder='Last Name'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                </FormGroup>
                </Col>
                </Row>
                <FormGroup>
                    <Label>Email Address</Label>
                    <Input
                    type='email'
                    placeholder='Email Address'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                    type='password'
                    placeholder='Password'
                    onChange={this.props.handleChange('password')}
                    defaultValue={values.password}
                    />
                </FormGroup>
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
        )
    }
}

export default UserDetails;