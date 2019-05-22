import React, {Component} from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default class NavPublic extends Component {
    constructor() {
        super();
        this.state = {loading:false};
      }

      test (){
        // localStorage.removeItem('token')
        window.location.reload()
        this.setState({...this.state, loading:true})
        
      }

render()
{

  return (
    <div>
      
      <Navbar  light expand="md">
          <NavbarBrand href="/" > <p>CORPORATE </p><p> EVENT PLANNER</p></NavbarBrand>

           <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/Login/"onClick={this.test} ><p>Sign In</p></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Signup">
                 <p>Sign Up</p>
              </NavLink>
            </NavItem>
          </Nav>
            </Navbar>

    </div>
  )
}

}