import React from 'react';
import {Link} from "react-router-dom";
import {
  NavbarBrand,
  Nav,
  NavLink
} from 'reactstrap';
import styled from "styled-components";

const Navbar = styled.div`
  background-color: white;
  `;


const Header = () => {

  return (
    <div>
      <Navbar color="light" light expand="md">
      <NavLink><Link to="/Use" className="navbar-brand">+</Link></NavLink>
      <NavbarBrand><h1>DVST3 Calculator</h1></NavbarBrand>
        
          <Nav className="mr-auto" navbar>
            
              <NavLink><Link to="/" className="navbar-brand">Home</Link></NavLink>
              
              <NavLink><Link to="/Calculator" className="navbar-brand">Calculator</Link></NavLink>
            
              <NavLink><Link to="/LogIn" className="navbar-brand">Log In</Link></NavLink>
            
              <NavLink><Link to="/SignUp" className="navbar-brand">Sign Up</Link></NavLink>

              <NavLink className="primary" href="http://www.weather.com">Exit Site</NavLink>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Header;