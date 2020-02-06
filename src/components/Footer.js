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
              <NavLink className="navbar-brand" href="http://www.freefrom.org">freefrom.org</NavLink>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Footer;