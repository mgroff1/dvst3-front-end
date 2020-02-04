import React from 'react';
import {Link} from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Header = () => {

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><Link to="/" class="navbar-brand">Home</Link></NavbarBrand>
        
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link to="/Calculator" class="navbar-brand">Calculator</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/LogIn" class="navbar-brand">Log In</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to="/SignUp" class="navbar-brand">Sign Up</Link></NavLink>
            </NavItem>
          </Nav>
            <NavItem>
             <NavLink href="http://www.weather.com">Exit Site</NavLink>
            </NavItem>
      </Navbar>
    </div>
  );
}

export default Header;