import React from "react";
import Image from "next/image";
import { Container, Button } from "react-bootstrap";
import styles from "../../styles/Home.module.css";

export function HomeMain(props) {
  return (
    <>
      <div className="d-flex flex-column p-5" style={props.divColor}>
        <p className="fs-2 fw-bold text-center">{props.titleContent}</p>
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
    </>
  );
}
