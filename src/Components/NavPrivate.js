import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { connect } from "react-redux";
import { getUser } from "../Actions";
import "./navbar.css";
import LOGO from "../Images/LOGO.png";

class NavPrivate extends Component {
  constructor() {
    super();
    this.state = { loading: false };
  }

  componentDidMount() {
    this.props.getUser();
  }

  test() {
    localStorage.removeItem("token");
    // window.location.reload()
    // this.setState({...this.state, loading:true})
  }

  render() {
    const user = this.props.users.filter(function(user) {
      return `${user.id}` === localStorage.getItem("userid");
    });

    return (
      <div className='privatenavbar'>
        {user.map(user => (
          <Navbar light expand='md' key={user.id}>
            <NavbarBrand href='/MyEvents2'>
              {" "}
              <img src={LOGO} alt='logo'></img>
            </NavbarBrand>
            <Nav className='ml-auto' navbar>
              <NavItem></NavItem>
              <NavItem>
                <NavLink href='/myProfile' className='ml-5'>
                  <i className='fas fa-user'></i>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/myProfile'>
                  <p>{user.firstName}</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/login' onClick={this.test} className='ml-5'>
                  <p>Sign Out</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};
export default connect(
  mapStateToProps,
  { getUser }
)(NavPrivate);
