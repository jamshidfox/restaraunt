import React, { Component } from 'react';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import UserPicture from './maluculas/AvatarDropdown';
import Logo from '../../concepts/logo.png';
// import { Link } from "react-router-dom";
import './navbar.css';
import { Row, Col } from 'reactstrap';
class Navbar extends Component {
  render() {
    return (
      <Row className="d-flex justify-content-between align-items-center" id="navbar">
        {/* <Col sm='4' className='demo-inline-spacing'>
          <UncontrolledButtonDropdown>
            <DropdownToggle className='btn-gradient-success' color='success' caret>
                  Account User
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem href='/' tag='a'>Waiter</DropdownItem>
                <DropdownItem href='/' tag='a'>Boss</DropdownItem>
                <DropdownItem href='/' tag='a'>Manager</DropdownItem>
            </DropdownMenu>
      </UncontrolledButtonDropdown>
        </Col> */}
        <Col sm="4" className="d-flex justify-content-center">
          <img src={Logo} id="logo-img" />
          <h3 className="text-light"> Restaurant </h3>
        </Col>

        <Col className="d-flex justify-content-end" sm="4">
          <div id="account-user">Farruhbek Kobilov</div>
          <UncontrolledButtonDropdown>
            <DropdownToggle id="avatar-dropdowntoggle">
              <UserPicture />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem href="/" tag="a">
                Something
              </DropdownItem>
              <DropdownItem href="/" tag="a">
                Something
              </DropdownItem>
              <DropdownItem href="/" tag="a">
                Settings
              </DropdownItem>
              <DropdownItem href="/" tag="a">
                Log out
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledButtonDropdown>
        </Col>
      </Row>
    );
  }
}

export default Navbar;
