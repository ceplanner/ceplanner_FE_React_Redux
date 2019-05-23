import React, {Component} from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import LOGO from '../Images/LOGO.png'
import './navbar.css'

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
    <div className='publicnavbar'>
      
      <Navbar  light expand="lg">
          <NavbarBrand href="/" >  <img src={LOGO} alt='logo'></img></NavbarBrand>

           <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/Login/"onClick={this.test}className='mr-5 signin' ><p>Sign In</p></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Signup" className='ml-5'>
                 <p>Sign Up</p>
              </NavLink>
            </NavItem>
          </Nav>
            </Navbar>

    </div>
  )
}

}