import React from 'react';
import {Link} from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink
} from 'reactstrap';

const Footer = () => {

  return (
    <div>
      <Navbar color="light" light expand="md">
        
          <Nav className="mr-auto" navbar>
              <NavLink className="navbar-brand" href="http://www.freefrom.org">For more information visit freefrom.org</NavLink>
          </Nav>
          <br></br>
          <Nav className="mr-auto" navbar>
          <NavLink>Copyright 2020 DVST3</NavLink>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Footer;