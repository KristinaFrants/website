import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import './Header.css'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingBasket, faStoreAlt, } from '@fortawesome/free-solid-svg-icons';



function NavigationBar() {
    const [{ basket, user }, dispatch] = useStateValue();


    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header">
        <Navbar.Brand >
                    <Link to="/home">
                    <FontAwesomeIcon icon={faStoreAlt} className= "header__logo m-1"/>
                    </Link>
        </Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav className="mr-auto">

            <Nav.Link href= "/landing">
            <div className="header__right ">
                Services
            </div>
          
            </Nav.Link>

            <Nav.Link href="#bar">bar</Nav.Link>

            <NavDropdown 
            title="Dropdown" id="collasible-nav-dropdown"
            show={show}
            onMouseEnter={showDropdown} 
            onMouseLeave={hideDropdown}
            className="header__dropdown">

              <NavDropdown.Item>
              <Link to={!user && "/login"} className="header__link">
                <div onClick={handleAuthentication} className="header__option">
                    <span className="header__optionLineOne">Hello, {!user ? 'Guest' : user.email}</span>
                </div>
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
              <Link to={!user && "/login"} className="header__link">
                <div onClick={handleAuthentication} className="header__option">
                <span className="header__optionLineTwo">{user ? 
                    'Sing Out' : 'Sing In'}</span>
                      </div>
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item> 
              <Link to="/orders" className="header__link">
                <div className="header__option ">
                    {/* <span className="header__optionLineOne">Returns</span> */}
                    <span className="header__optionLineTwo">Orders</span>
                </div>
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              <NavDropdown.Item>
              <Link to="/checkout">
                    <div className="header__optionBasket col">
                        {/* Shopping basket icon */}
                        <FontAwesomeIcon icon={faShoppingBasket}/>
                        {/* Number of items in the basket */}
                        <span className="header__optionLineTwo 
                        header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
                   
                   </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <Nav.Link>
            <div className="header__contactNumber col">
                    <h6>571-555-5555</h6>
                </div>
                 </Nav.Link>
            <Nav.Link eventKey={2}>
            <Button className="startAproject__button" variant="outline-light">Start a Project</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar