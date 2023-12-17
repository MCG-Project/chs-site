import React from "react";
import Image from "next/image";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { Container, Button } from "react-bootstrap";
import styles from "../../styles/Home.module.css";

export function HomeMain(props) {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      {isMobile ? (
        <div className="d-flex flex-column pt-3 pb-3" style={props.divColor}>
          <p className="fs-2 fw-bold text-center">{props.titleContent}</p>
          <Container className="d-flex justify-content-center">
            <Image
              src={props.image}
              className={styles.mobileImage}
              alt={props.imageAlt}
            />
          </Container>
          <Container>
            <p className="m-3 fs-4">{props.textContent}</p>
          </Container>
          <Container className="d-flex justify-content-center">
            <Button href="/contact" className="fw-bold m-2" variant="dark">
              Contact Us
            </Button>
          </Container>
        </div>
      ) : (
        // Browser
        <div className="d-flex flex-column p-5" style={props.divColor}>
          <h2 className="fw-bold text-center mb-3">{props.titleContent}</h2>
          <div className="d-flex align-items-center">
            <Container className="d-flex justify-content-around">
              <Image
                src={props.image}
                className={styles.image}
                alt={props.imageAlt}
              />
            </Container>
            <Container className="d-flex flex-column">
              <p className="w-75 fs-4">{props.textContent}</p>
              <div>
                <Button
                  href="/contact"
                  className="fw-bold w-25 m-2"
                  variant="dark"
                >
                  Contact Us
                </Button>
              </div>
            </Container>
          </div>
        </div>
      )}
    </>
  );
}
