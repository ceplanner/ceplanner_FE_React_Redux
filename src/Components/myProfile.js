import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getUser } from "../Actions";
import "./component.css";
import Loader from "react-loader-spinner";
import imagewinner2 from ".././Images/Image-winner2.png";

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

    const user = this.props.users.filter(function(user) {
      return `${user.id}` === localStorage.getItem("userid");
    });

    return (
      <div>
        {user.map(user => (
          <div className="formcontainer2" key={user.id}>
            <div className="imgcontainer2">
              <img src={imagewinner2} className="img-fluid" alt="fp" />
            </div>
            <div className="signupform2">
              <div className="profile">
                <div className="profilep1">
                  {" "}
                  <i class="fas fa-user" />
                  <div>{user.firstName}</div>
                </div>
                {/* <div>{user.lastName}</div> */}
                <div><p>Email: {user.email}</p></div>
                <div><p>Job Title: {user.jobTitle}</p></div>
                <div> <p>Year Of Birth: {user.yearOfBirth}</p></div>
                <div><p>User Id: {user.id}</p></div>
              </div>
            </div>
          </div>
        ))}
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
