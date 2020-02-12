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
  NavbarText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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
      <Navbar color="light" light expand="md">
        <NavbarBrand href={ROUTES.LANDING}>Fall in Love</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink><Link to={ROUTES.LANDING}>Home</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to={ROUTES.ABOUT}>Snapshots of Us</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink><Link to={ROUTES.PORTFOLIO}>Portfolio</Link></NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Account Info
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavItem>
                    <NavLink><Link to={ROUTES.ADMIN}>Admin</Link></NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink><Link to={ROUTES.ACCOUNT}>Account</Link></NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
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
      <NavbarBrand href={ROUTES.LANDING}>Fall in Love</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink><Link to={ROUTES.LANDING}>Home</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Link to={ROUTES.ABOUT}>About</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink><Link to={ROUTES.PORTFOLIO}>Portfolio</Link></NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}


export default Navigation;