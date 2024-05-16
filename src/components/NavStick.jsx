import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavStick() {
    

  
  return (
    <>
    <div className='nav2'>
    {['md'].map((expand) => (
            <Navbar key={expand} expand={expand} className="mb-3">
              <Container fluid>
                <Navbar.Brand href="#"><b className='text-light'>ALVIN</b></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="start"
                  
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      ALVIN JOY
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#" className='text-light fw-bolder'>HOME</Nav.Link>
                      <Nav.Link href="#about" className='text-light fw-bolder'>ABOUT ME</Nav.Link>
                      <Nav.Link href="#services" className='text-light fw-bolder'>SERVICES</Nav.Link>
                      <Nav.Link href="#skills" className='text-light fw-bolder'>SKILLS</Nav.Link>
                      <Nav.Link href="#portfolio" className='text-light fw-bolder'>PORTFOLIO</Nav.Link>
                      <Nav.Link href="#contact" className='text-light fw-bolder'>CONTACT</Nav.Link>
                      
                    </Nav>
                    
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
    
    </div>
    </>
  )
}

export default NavStick