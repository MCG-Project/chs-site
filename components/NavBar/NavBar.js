import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Dropdown,
  NavItem,
  NavLink,
  Offcanvas,
} from "react-bootstrap";
import Image from "next/image";
import useDeviceDetect from "../../utils/useDeviceDetect";
import Logo from "../../public/Images/Logo.png";
import styles from "../../styles/NavBar.module.css";

export function NavBar() {
  const { isMobile } = useDeviceDetect();

  const ColoredLine = () => (
    <div className="d-flex align-items-center">
      <div
        className="vr"
        style={{
          color: "#95959c",
          height: "2rem",
        }}
      ></div>
    </div>
  );

  return (
    <>
      {isMobile ? (
        <Navbar key="sm" expand="sm" className="sticky-top" id={styles.navbar}>
          <Container fluid>
            <Navbar.Brand href="/">
              <Image
                alt="georigialina logo"
                src={Logo}
                id={styles.logo}
              ></Image>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar-expand-sm"
              id="navtoggle"
            />

            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-sm"
              aria-labelledby="offcanvasNavbar-expand-sm"
              placement="end"
            >
              <Offcanvas.Header closeButton />
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/" id={styles.link}>
                    Home
                  </Nav.Link>{" "}
                  <Dropdown as={NavItem}>
                    <Dropdown.Toggle
                      as={NavLink}
                      className="fs-6 fw-bold"
                      style={{ padding: "8px" }}
                    >
                      Services
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="/plumbing">Plumbing</Dropdown.Item>
                      <Dropdown.Item href="/irrigation">
                        Irrigation
                      </Dropdown.Item>
                      <Dropdown.Item href="/landscaping">
                        Landscaping
                      </Dropdown.Item>
                      <Dropdown.Item href="/retaining-wall">
                        Retaining Wall
                      </Dropdown.Item>
                      <Dropdown.Item href="/tree-service">
                        Tree Services
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ) : (
        // Browser
        <Navbar className="sticky-top" id={styles.navbar}>
          <Container className="hstack gap-3">
            <Navbar.Brand href="/">
              <Image
                alt="georigialina logo"
                src={Logo}
                id={styles.logo}
              ></Image>
            </Navbar.Brand>

            <Nav className="ms-auto fs-6 fw-bold">
              <Nav.Link href="/" id={styles.link}>
                Home
              </Nav.Link>
            </Nav>
            <ColoredLine />
            <Dropdown as={NavItem}>
              <Dropdown.Toggle
                as={NavLink}
                className="fs-6 fw-bold"
                style={{ padding: "8px" }}
                id={styles.link}
              >
                Services
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/plumbing">Plumbing</Dropdown.Item>
                <Dropdown.Item href="/irrigation">Irrigation</Dropdown.Item>
                <Dropdown.Item href="/landscaping">Landscaping</Dropdown.Item>
                <Dropdown.Item href="/retaining-wall">
                  Retaining Wall
                </Dropdown.Item>
                <Dropdown.Item href="/tree-service">
                  Tree Services
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <ColoredLine />

            <Nav className="fs-6 fw-bold">
              <Nav.Link href="/contact" id={styles.link}>
                Contact Us
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      )}
    </>
  );
}
