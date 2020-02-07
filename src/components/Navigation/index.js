import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>

);

const NavigationAuth = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href={ROUTES.HOME}>Falling in Love</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link to={ROUTES.HOME}>Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to={ROUTES.ACCOUNT}>Account</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to={ROUTES.ADMIN}>Admin</Link></NavLink>
            </NavItem>
          </Nav>
          <NavbarText><SignOutButton /></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}


const NavigationNonAuth = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/">Falling in Love Photography</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
      <Nav className="mr-auto" navbar>
        <NavItem>
          <NavLink><Link to={ROUTES.LANDING}>Landing</Link></NavLink>
        </NavItem>
        <NavItem>
          <NavLink><Link to={ROUTES.SIGN_IN}>Sign In</Link></NavLink>
        </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
  );
}


export default Navigation;