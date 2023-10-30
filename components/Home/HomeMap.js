import React from "react";
import Image from "next/image";
import { Container, ListGroup } from "react-bootstrap";
import styles from "../../styles/Home.module.css";

export function HomeMap(props) {
  return (
    <div className="d-flex flex-column pt-3 pb-5" style={props.divColor}>
      <p className="fs-2 fw-bold text-center">Serving the CSRA</p>

      <Container className="d-flex justify-content-center align-items-center">
        <Image
          src={props.image}
          className={styles.largeImage}
          alt={props.imageAlt}
        />
      </Container>
      <Container className="d-flex mt-3 w-50 justify-content-center">
        <Container className="w-75">
          <p className="fw-bold fs-5 text-center">Georgia</p>
          <ListGroup>
            {props.list1Content.map((item) => (
              <ListGroup.Item className={styles.listItem}>
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
        <Container className="w-75">
          <p className="fw-bold fs-5 text-center">South Carolina</p>
          <ListGroup>
            {props.list2Content.map((item) => (
              <ListGroup.Item className={styles.listItem}>
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      </Container>
    </div>
  );
}
