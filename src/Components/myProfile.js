import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUser } from "../Actions";
import "./component.css";
import Loader from "react-loader-spinner";



class MyProfile extends Component {
  componentDidMount() {
    this.props.getUser();
  }
   render() {
    //console.log(this.props.token, 'hi token')
    
    if (this.props.fetchingUsers)
      return (
        <div className="eventfetching">
          <Loader type="Circles" color="#b76bff" height="120" width="120" />
        </div>
      );

      const user =  this.props.users.filter(function(user) {
        return `${user.id}` === localStorage.getItem('userid')
      });
      
    return (
        <div>
        {user.map(user => (
         
          <div className="cardd" key={user.id}>
            {console.log(this.props.token)}
            <div>{user.firstName}</div>
            <div>{user.lastName}</div>
            <div>{user.email}</div>
            <div>{user.jobTitle}</div>
            <div>{user.yearOfBirth}</div>
            <div>{user.id}</div>

          </div>
        )
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    fetchingUser: state.fetchingUsers,
    error: state.error,
    loggedIn: state.loggedIn,
    errorStatusCode: state.errorStatusCode,
    token: state.token
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    { getUser }
  )(MyProfile)
);
