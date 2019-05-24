import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getData } from "../Actions";
import "./component.css";
import Loader from "react-loader-spinner";
import { NavLink, Navbar } from "reactstrap";
// import addcalender from "../Images/Icons/calendar-plus.png";
// import Calendar from "react-calendar";
// import Eventstage from "./eventstage";

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

    const myevents = this.props.myEvents.filter(function(myevents) {
      return `${myevents.user_id}` === localStorage.getItem("userid");
    });
    return (
      <div className="myeventcontainer">
        {/* <Eventstage /> */}
        {/* <Navbar>
       <NavItem>
              <NavLink href="#" className='ml-1'>
                 <p>All</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" className='ml-1'>
                 <p>Recent</p>
              </NavLink>
            </NavItem></Navbar> */}

        <Navbar className="navbar navbar-light bg-light justify-content-between mt-2 mb-2">
        <NavLink href={"/addevent"} className="navbar-brand text-primary">Add Event</NavLink>
          <NavLink className="navbar-brand text-primary">All</NavLink>
          <NavLink href="#" className="navbar-brand ml-5 text-primary">
            Recent
          </NavLink>
          <form className="form-inline">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search Event"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0 text-primary"
              type="submit"
            >
              Search 
            </button>
          </form>
        </Navbar>

        {myevents.map(myEvent => (
          <div
            className="card text-center shadow p-3 mb-5 bg-white rounded"
            key={myEvent.id}
          >
            <NavLink href={`/MyEvents/${myEvent.id}`}>
              <div className="card-body">
                <h5 className="card-title text-dark mb-4">
                  {myEvent.eventName}
                </h5>
                <p className="card-text text-dark">
                  {myEvent.eventDescription}
                </p>
                <p className="card-text">
                  <small className="text-muted">
                    Event Date: {myEvent.eventDate}
                  </small>
                </p>
                <h5 className="card-title linker">Read More...</h5>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>

              {/* <div>{myEvent.eventName}</div>
      <div>{myEvent.eventType}</div>
      <div>{myEvent.eventDate}</div>
      <div>{myEvent.eventDescription}</div>
      <div>{myEvent.location}</div>
      <div>{myEvent.agenda}</div>
      <div>{myEvent.user_id}</div> */}
            </NavLink>
            {/* //test */}

            {/* end test */}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
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
