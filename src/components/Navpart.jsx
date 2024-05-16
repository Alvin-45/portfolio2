import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navpart() {
  return (
    <>
    <div className='nav2 w-100' style={{position:'fixed'}}>
      {['md'].map((expand) => (
          <Navbar key={expand} expand={expand} className="mb-3">
            <Container fluid>
              <Navbar.Brand href="#home"><b className='text-light'>
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="circlePath"
                    d="
                      M 10, 50
                      a 2,2 0 1,1 50,0
                      2,2 0 1,1 -50,0
                    "
                  />
                  <text>
                    <textPath href="#circlePath" fill='white'>
                      ALVIN  -  ALVIN -
                    </textPath>
                  </text>
                </svg>ALVIN</b></Navbar.Brand>
              <Navbar.Toggle  className=' border' style={{color:'white'}} aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
                
              >
                <Offcanvas.Header closeButton className='offhead'>
                  <Offcanvas.Title  style={{color:'white'}} id={`offcanvasNavbarLabel-expand-${expand}`}>
                    
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='offbdy' >
                  <Nav className="justify-content-end flex-grow-1 pe-3 navmenu">
                    <Nav.Link href="#home" className='text-light fw-bolder'>HOME</Nav.Link>
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

export default Navpart