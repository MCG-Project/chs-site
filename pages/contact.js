import React from "react";
import { ContactForm } from "../components/Contact/ContactForm";
import Head from "next/head";
import Image from "next/image";
import LawnCare from "../public/Images/LawnCare.jpg";
import { Container } from "react-bootstrap";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>GeorigiaLina | Contact Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src={LawnCare}
        className={styles.cardBoxOverlay}
        alt=""
        style={{
          width: "100%",
          height: "50vh",
          objectFit: "cover",
        }}
      />
      <Container
        className="d-flex align-items-center flex-column"
        style={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        <h1 className="mt-3 fw-bold">Contact Us</h1>

        <ContactForm />
      </Container>
    </>
  );
}
