import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup'
import './index.css'
import MyEvents from './Components/MyEvents'
import PrivateRoute from './Components/PrivateRoute'
import Event from './Components/Event'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar  light expand="md">
          <NavbarBrand href="/" > <p>CORPORATE </p><p> EVENT PLANNER</p></NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/Login/"><p>Sign In</p></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Signup">
                 <p>Sign Up</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <Route path="/Login" component={Login} />
        <Route path="/Signup" component={Signup} />
        {/* <Route path="/MyEvents" component={MyEvents} /> */}
        <PrivateRoute exact path="/MyEvents" component={MyEvents} />
        <PrivateRoute path="/MyEvents/:id" component={Event} />
      
      </div>
    </Router>
  );
}
export default App;
