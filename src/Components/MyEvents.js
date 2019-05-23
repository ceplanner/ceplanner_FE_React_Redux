import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getData } from "../Actions";
import "./component.css";
import Loader from "react-loader-spinner";
import { NavLink } from "reactstrap";
import addcalender from '../Images/Icons/calendar-plus.png';
import Calendar from 'react-calendar';
import Eventstage from './eventstage'




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

    return (<div className='myeventcontainer'>
       <Eventstage />
 {myevents.map(myEvent => (
  <div className="card-columns mt-3" key={myEvent.id}>
    <NavLink href={`/MyEvents/${myEvent.id}`}>
     
 
 <div class="card text-center">
   <div class="card-body">
     <h5 class="card-title">{myEvent.eventName}</h5>
     <p class="card-text">{myEvent.eventDescription}</p>
     <p class="card-text"><small class="text-muted">Event Date: {myEvent.eventDate}</small></p>
     <h5 class="card-title">Read More</h5>
   </div>
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
