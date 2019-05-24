import React, { Component } from "react";
import './index.css'

import {
  BrowserRouter as Router,
  Route,
  
} from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import "./index.css";
import MyEvents from "./Components/MyEvents";
import PrivateRoute from "./Components/PrivateRoute";
import Event from "./Components/Event";
import myProfile from "./Components/myProfile";
import AddEvent from "./Components/AddEvent";
import NavPrivate from "./Components/NavPrivate";
import NavPublic from "./Components/NavPublic";
import FormEditMain from './Components/FormEditMain'
import EditForm from "./Components/MultistepEdit/EditForm";
import MyEvents2 from "./Components/myevents2";


// sign out with local storage this should be improved if time allows ***************************************************

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }
  componentDidMount() {
    if (!localStorage.getItem('token')) {
      this.setState({ loggedIn: false });
    } else {
      this.setState({ loggedIn: true });
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.state.loggedIn? <NavPrivate /> : <NavPublic />}
          <Route exact path="/" component={Login} />
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
          {/* <Route path="/MyEvents" component={MyEvents} /> */}
          <PrivateRoute exact path="/MyEvents" component={MyEvents} />
          <PrivateRoute path="/MyEvents/:id" component={Event} />
          <PrivateRoute exact path="/myProfile" component={myProfile} />
          <PrivateRoute exact path="/AddEvent" component={AddEvent} />
          <PrivateRoute exact path="/editform" component={EditForm} />
          <PrivateRoute exact path="/myevents2" component={MyEvents2} />
        </div>
      </Router>
    );
  }
}

export default App

/* <Router>
<div className="App">
  <Navbar  light expand="md">
    <NavbarBrand href="/" > <p>CORPORATE </p><p> EVENT PLANNER</p></NavbarBrand>
{
    localStorage.getItem('token')?
   
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="/login" onClick={test}><p>Sign Out</p></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/myEvents">
           <p>My Events</p>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/myProfile">
           <p>User Name</p>
        </NavLink>
      </NavItem>
    </Nav>  : <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink href="/Login/" ><p>Sign In</p></NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Signup">
           <p>Sign Up</p>
        </NavLink>
      </NavItem>
    </Nav>
}
  // </Navbar>
  // <Route path="/Login" component={Login} />
  // <Route path="/Signup" component={Signup} />
  // {/* <Route path="/MyEvents" component={MyEvents} /> */
//   <PrivateRoute exact path="/MyEvents" component={MyEvents} />
//   <PrivateRoute path="/MyEvents/:id" component={Event} />
//   <PrivateRoute exact path="/myProfile" component={myProfile} />
//   <PrivateRoute exact path="/AddEvent" component={AddEvent} />

// </div>
// </Router> */}
