import { getData } from "../Actions";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loader from 'react-loader-spinner';



class Event extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const id = this.props.match.params.id;
    const event = this.props.myEvents.find(event => event.id === id);
    if (this.props.fetchingEvents)
    return (
      <div className="eventfetching" >
        <Loader type="Circles" color="#b76bff" height="120" width="120" />
      </div>
    );
    return <div>
    {/* {console.log(event)} */}
    <div>{event ? event.event_name : ""}</div>
    <div>{event ? event.event_type : ""}</div>
    <div>{event ? event.event_budget : ""}</div>
    <div>{event ? event.event_date : ""}</div>
    <div>{event ? event.description : ""}</div>
    <div className="agenda"></div>
    </div>;
  }
}

const mapStateToProps = state => {
  return {
    myEvents: state.myEvents,
    fetchingEvents: state.fetchingEvents,
    error: state.error,
    loggedIn: state.loggedIn,
    errorStatusCode: state.errorStatusCode
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(Event)
);
