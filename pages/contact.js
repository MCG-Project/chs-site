import React from "react";
import { ContactForm } from "../components/Contact/ContactForm";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import Image from "next/image";
import LawnCare from "../public/Images/LawnCare.jpg";
import { Container } from "react-bootstrap";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[5].tab}
        description={MetaTagSEOData[5].description}
        keywords={MetaTagSEOData[5].keywords}
        socialTitle={MetaTagSEOData[5].socialTitle}
        socialDescription={MetaTagSEOData[5].socialDescription}
        socialImage={LawnCare}
      />
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
      <Container className="d-flex align-items-center flex-column">
        <h1 className="mt-3 fw-bold">Contact Us</h1>

        <ContactForm />
      </Container>
    </>
  );
}
