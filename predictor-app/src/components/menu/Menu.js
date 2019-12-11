import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
console.log('menu')
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Predictor</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/premier-league">Висша лига</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/users">Потребители</NavLink>
            </NavItem>
            
          </Nav>
          <NavbarText>ВХОД</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;
