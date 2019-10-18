import React, { useState } from 'react'
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
  DropdownItem
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './Navigation.scss'
import Logo from '../../photos/Logos/MainLogo.svg'

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar color='light' light expand='md'>
      <NavbarBrand href='/Home'>
        <img src={Logo} alt='Potluck Logo' className='navLogo' />
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />

      <Collapse isOpen={isOpen} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink href='/Home'>Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href='/Events'>Events</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href='/Users'>Users</NavLink>
          </NavItem>

          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Account
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <NavLink href='/CreateAnAccount'>Create Account</NavLink>
              </DropdownItem>
              <DropdownItem>
                <NavLink href='/'>Login</NavLink>
              </DropdownItem>
              {/* <DropdownItem divider /> */}
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

// const Navigation = () => {
//   return (
//     <nav>
//       <div>
//         <Link to='/Home'>Home</Link>
//       </div>

//       <div>
//         <Link to='/'>Login</Link>
//       </div>

//       <div>
//         <Link to='/CreateAnAccount'>Create Account</Link>
//       </div>
//       <div>
//         <Link to='/Events'>Events</Link>
//       </div>
//       <div>
//         <Link to='/Users'>Users</Link>
//       </div>
//     </nav>
//   )
// }

export default Navigation
