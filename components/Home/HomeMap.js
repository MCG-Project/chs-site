import React from "react";
import Image from "next/image";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { Container, ListGroup } from "react-bootstrap";
import styles from "../../styles/Home.module.css";

export function HomeMap(props) {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      {isMobile ? (
        <div className="d-flex flex-column pb-5" style={props.divColor}>
          <h2 className="fw-bold text-center">Serving the CSRA</h2>

          <Container className="d-flex">
            <Image
              src={props.image}
              className={styles.mobileLargeImage}
              alt={props.imageAlt}
            />
          </Container>
          <Container className="mt-3">
            <Container>
              <p className="fw-bold fs-5 text-center">Georgia</p>
              <ListGroup>
                {props.list1Content.map((item) => (
                  <ListGroup.Item key={item} className={styles.listItem}>
                    {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Container>
            <Container className="mt-5">
              <p className="fw-bold fs-5 text-center">South Carolina</p>
              <ListGroup>
                {props.list2Content.map((item) => (
                  <ListGroup.Item key={item} className={styles.listItem}>
                    {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Container>
          </Container>
        </div>
      ) : (
        // Browser

        <div className="d-flex flex-column pt-3 pb-5" style={props.divColor}>
          <h2 className="fw-bold text-center">Serving the CSRA</h2>

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
                  <ListGroup.Item key={item} className={styles.listItem}>
                    {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Container>
            <Container className="w-75">
              <p className="fw-bold fs-5 text-center">South Carolina</p>
              <ListGroup>
                {props.list2Content.map((item) => (
                  <ListGroup.Item key={item} className={styles.listItem}>
                    {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Container>
          </Container>
        </div>
      )}
    </>
  );
}
