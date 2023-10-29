import React from "react";
import Logo from "../../public/Images/Logo.png";
import { Container } from "react-bootstrap";
import Image from "next/image";
import styles from "../../styles/Footer.module.css";

export function Footer() {
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      id={styles.footerContainer}
    >
      <Container>
        <hr />
      </Container>
      <Container className="d-flex flex-row hstack gap-3">
        <Image
          alt="ckm logo"
          src={Logo}
          id={styles.footerLogo}
          className="align-self-start"
        />
        <p className="m-1 align-self-center">
          <strong>©2023 GeorgiaLina Services</strong>
        </p>
      </Container>
    </div>
  );
}
