import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getData } from "../Actions";
import "./component.css";
import Loader from "react-loader-spinner";
import { NavLink } from "reactstrap";

class MyEvents extends Component {
  componentDidMount() {
    this.props.getData();
  }
  render() {
    // if(this.props.fetchingEvents)
    if (this.props.fetchingEvents)
      return (
        <div className="eventfetching">
          <Loader type="Circles" color="#b76bff" height="120" width="120" />
        </div>
      );

      const myevents =  this.props.myEvents.filter(function(myevents) {
        return `${myevents.user_id}` === localStorage.getItem('userid')
      });

    return (
      <div>
        
        <NavLink href={"/addevent"}>Add Event></NavLink>
         {console.log(this.props.myEvents, 'bonjoir')}
        {myevents.map(myEvent => (
          <div className="cardd" key={myEvent.id}>
            <NavLink href={`/MyEvents/${myEvent.id}`}>
              <div>{myEvent.eventName}</div>
              <div>{myEvent.eventType}</div>
              <div>{myEvent.eventDate}</div>
              <div>{myEvent.eventDescription}</div>
              <div>{myEvent.location}</div>
              <div>{myEvent.agenda}</div>
              <div>{myEvent.user_id}</div>

            </NavLink>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users:state.users,
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
  )(MyEvents)
);
