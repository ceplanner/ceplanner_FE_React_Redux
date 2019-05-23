import { getData, deleteEvent,editEvent } from "../Actions";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Loader from 'react-loader-spinner';
import {NavLink} from 'reactstrap'
    

class Event extends Component {
  componentDidMount() {
    this.props.getData();
  }

  deleteEvent = id =>{
    
    this.props.deleteEvent(id)
  }

  render() {
    
    const id = this.props.match.params.id;
    const event = this.props.myEvents.find(event => `${event.id}` === id);
    if (this.props.fetchingEvents)
    return (
    
      <div className="eventfetching" >
        <Loader type="Circles" color="#b76bff" height="120" width="120" />
      </div>
    );
    return <div>

     <NavLink href={"/formeditmain"} ><button>Edit</button></NavLink>

     <Link to={{
  pathname: '/editform',
  state: {
    selectedevent: event}
}}>hi</Link>
    
    <div>{event ? event.eventName : ""}</div>
    <div>{event ? event.eventType : ""}</div>
    <div>{event ? event.eventBudget : ""}</div>
    <div>{event ? event.eventDate : ""}</div>
    <div>{event ? event.eventDescription : ""}</div>
    <div>{event ? event.location : ""}</div>
    <div>{event ? event.id : ""}</div>

    <div className="agenda">{event ? event.agenda : ""}</div>
    <button onClick={()=>this.deleteEvent(event.id)}>Delete</button>
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
    { getData, deleteEvent,editEvent }
  )(Event)
);


