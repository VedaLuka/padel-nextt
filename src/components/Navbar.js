import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo.jpg"; // Replace with your logo path

function CustomNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false); // Close menu on small screens when a link is clicked
    }
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      sticky="top"
      className="shadow"
      style={{
        height: "80px",
        backgroundColor: "#2C2C2C",
      }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand
          href="#"
          style={{
            marginLeft: "-75px", // Adjust logo positioning
          }}
        >
          <img
            src={logo}
            alt="Padel Point Logo"
            style={{
              height: "100%",
              maxHeight: "120px",
              objectFit: "contain",
              marginTop: "10px",
            }}
          />
        </Navbar.Brand>

        {/* Hamburger Toggle */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{
            border: "none",
            color: "#fff",
            fontSize: "1.9rem",
            padding: "10px",
            marginTop: "-40px",
            marginRight: "-50px",
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        {/* Collapsible Menu */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className={isMenuOpen ? "show" : ""}
          style={{
            backgroundColor: isMenuOpen ? "rgba(44, 44, 44, 0.9)" : "transparent",
            borderRadius: "10px",
            padding: isMenuOpen ? "10px" : "0px",
            transition: "all 0.3s ease",
          }}
        >
          <Nav className="ms-auto">
            {[
              { href: "#about", text: "About" },
              { href: "#our-courts", text: "Our Courts" },
              { href: "#pricing", text: "Pricing" },
              { href: "#contact", text: "Contact Us" },
            ].map((link, idx) => (
              <Nav.Link
                key={idx}
                href={link.href}
                className="text-white"
                style={{
                  fontSize: isMenuOpen ? "1.2rem" : "1rem",
                  fontWeight: isMenuOpen ? "bold" : "normal",
                  margin: isMenuOpen ? "10px 0" : "0px",
                  fontFamily: "'Poppins', sans-serif",
                  transition: "all 0.3s ease",
                }}
                onClick={handleNavLinkClick}
              >
                {link.text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
