import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';

export default function Header() {

  let styleSolo = {
    marginLeft: "5px",
    color: "black",

  }
  let navColor = {
    backgroundColor: "white",

  }

  return (
    <>
      <Navbar style={navColor} expand="lg" me-5 d-none d-lg-block >
        <Navbar.Brand href="" className="styleSolo" style={styleSolo}>
          <i class="fas fa-dolly-flatbed">&nbsp;Hridi</i></Navbar.Brand>&ensp;&ensp;
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">


            <Nav.Link href="/home" style={{ color: 'black' }}>
              <i class="fas fa-home">&nbsp;</i>Home</Nav.Link>&ensp;

            <Nav.Link href="/randomimage" style={{ color: 'black' }}>
              <i class="fas fa-images">&nbsp;</i>Images</Nav.Link>&ensp;
            <Nav.Link href="/download" style={{ color: 'black' }}>
              <i class="fas fa-download">&nbsp;</i>Download</Nav.Link>&ensp;
            <Nav.Link href="/about" style={{ color: 'black' }}>
              <i class="fas fa-address-card">&nbsp;</i>About</Nav.Link>&ensp;


          </Nav>
          <div>
            <a href="https://www.facebook.com/parizat.hridii" className="me-4 text-reset text-dark ">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/BintaParizat" className="me-4 text-reset text-dark">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox" className="me-4 text-reset text-dark">
              <i className="fab fa-google"></i>
            </a>
            <a href="https://www.instagram.com/parizat_hridi/" className="me-4 text-reset text-dark">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://bd.linkedin.com/in/parizat-binta-kabir-2a72ba197" className="me-4 text-reset text-dark">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/parizat-hridi" className="me-4 text-reset text-dark">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>

    </>
  )
}
