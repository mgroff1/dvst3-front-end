import React from 'react';
import {Link} from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink
} from 'reactstrap';

const Header = () => {

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><Link to="/" className="navbar-brand">Home</Link></NavbarBrand>
        
          <Nav className="mr-auto" navbar>
            
              <NavLink><Link to="/Calculator" className="navbar-brand">Calculator</Link></NavLink>
            
              <NavLink><Link to="/LogIn" className="navbar-brand">Log In</Link></NavLink>
            
              <NavLink><Link to="/SignUp" className="navbar-brand">Sign Up</Link></NavLink>

              <NavLink className="navbar-brand" href="http://www.weather.com">Exit Site</NavLink>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Header;