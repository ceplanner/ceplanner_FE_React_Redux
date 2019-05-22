import React, {Component}from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { connect } from "react-redux";
import { getUser } from "../Actions";


 class NavPrivate extends Component {
  constructor() {
    super();
    this.state = {loading:false};
  }

  componentDidMount() {
    this.props.getUser();
  }

   test (){
    localStorage.removeItem('token')
    // window.location.reload()
    // this.setState({...this.state, loading:true})
    
  }

  render(){
    const user =  this.props.users.filter(function(user) {
      return `${user.id}` === localStorage.getItem('userid')
    });
 
  return (
    <div>
      { user.map(user =>
      <Navbar  light expand="md">
          <NavbarBrand href="/" > <p>CORPORATE </p><p> EVENT PLANNER</p></NavbarBrand>
           <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/login" onClick={this.test}><p>Sign Out</p></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/myEvents">
                 <p>My Events</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/myProfile">
                 <p>{user.firstName}</p>
              </NavLink>
            </NavItem>
          </Nav> 
        </Navbar>
      )}
    </div>
  )}
}

const mapStateToProps = state => {
  return {
    users: state.users,
    
  };
};
export default connect(
  mapStateToProps,
  { getUser }
)(NavPrivate)