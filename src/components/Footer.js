import React from 'react';
import {Link} from "react-router-dom";
import {
  Nav,
  NavLink
} from 'reactstrap';
import styled from "styled-components";

const Navbar = styled.div`
  background-color: white;
  `;

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