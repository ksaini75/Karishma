import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavigationBar () {
   

    return(

    <Navbar expand="lg" bg="light" className="nav" >
          <Navbar.Brand className="nav-title" href="/">KS</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-toggler-icon' />
        <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" >
            <Nav.Item><Nav.Link href="/"></Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/About">About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/Projects">Projects</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link>Resume</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/Contact" >Contact</Nav.Link></Nav.Item>

        </Nav>
        </Navbar.Collapse>
    </Navbar>
)
    }
export default NavigationBar;