import React from "react";
import Image from "next/image";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { Container } from "react-bootstrap";
import LawnCare from "../../public/Images/LawnCare.jpg";
import styles from "../../styles/Home.module.css";

export function ContactMain() {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      {isMobile ? (
        <div>
          <Image
            src={LawnCare}
            className={styles.cardBoxOverlay}
            alt=""
            style={{
              width: "100%",
              height: "30vh",
              objectFit: "cover",
            }}
          />
          <Container className="d-flex align-items-center flex-column">
            <h1 className="mt-3 fw-bold">Contact Us</h1>
          </Container>
        </div>
      ) : (
        // Browser
        <div>
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
          </Container>
        </div>
      )}
    </>
  );
}
