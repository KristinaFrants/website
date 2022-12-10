import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './Header.css'
import { useStateValue } from "./StateProvider";
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faUserNinja } from '@fortawesome/free-solid-svg-icons';


function NavigationBar() {
    const [{ basket, user }, dispatch] = useStateValue();

    function sendEmail ()
{
    window.location = "mailto:eduard.kitikari@gmail.com";
}

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="header">
        <Navbar.Brand >
          <Link to="/home">
            <FontAwesomeIcon icon={faUserNinja} className= "header__logo m-1"/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Nav className="mr-auto">
                <Nav.Link href= "/landing">
                  <div className="header__right ">
                      About Me
                  </div>
                </Nav.Link>
                <Nav.Link href="/home">Portfolio</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link>
                  <div className="header__contactNumber col mt-2">
                      <h6>571-555-5555</h6>
                  </div>
                </Nav.Link>
                <Nav.Link eventKey={2}>
                  <Button className="startAproject__button" variant="outline-light" onClick = {sendEmail} >Start a Project</Button>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavigationBar