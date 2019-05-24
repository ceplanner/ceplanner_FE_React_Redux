import { getData, deleteEvent, editEvent } from "../Actions";
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Loader from "react-loader-spinner";
// import { NavLink } from "reactstrap";
import "./component.css";
// import imagewinner3 from ".././Images/Image-stats.png";

class Event extends Component {
  componentDidMount() {
    this.props.getData();
  }

  deleteEvent = id => {
    this.props.deleteEvent(id);
  };

  render() {
    const id = this.props.match.params.id;
    const event = this.props.myEvents.find(event => `${event.id}` === id);
    if (this.props.fetchingEvents)
      return (
        <div className="eventfetching">
          <Loader type="Circles" color="#b76bff" height="120" width="120" />
        </div>
      );
    return (
      <div className="card eventcard">
       
   <div className='card-body '>
        <Link className='editLink'
          to={{
            pathname: "/editform",
            state: {
              selectedevent: event
            }
          }}
        >
          <i class="fas fa-pencil-alt" ><p>Edit Event</p></i>
        </Link>

        <div className="event_name">{event ? event.eventName : ""}</div>
        <div>Event Type: {event ? event.eventType : ""}</div>
        <div>Event Budget: {event ? event.eventBudget : ""}</div>
        <div>{event ? event.eventDescription : ""}</div>
        <div> Date: {event ? event.eventDate : ""}</div>
        
        {/* <div> {event ? event.id : ""}</div> */}
        <div className='locationdiv'> 
        <i class="fas fa-map-marker-alt"></i>
        {event ? event.location : ""}
        </div>
        <div className="agenda"> {event ? event.agenda : ""}</div>
        <div className ='deleteLink' onClick={() => this.deleteEvent(event.id)}><i class="fas fa-trash-alt"><p>Delete Event</p></i></div> 
        </div>
{/* 
        <div className="card" >
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */}

      </div>
    );
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
    { getData, deleteEvent, editEvent }
  )(Event)
);
