import React from "react";
import Image from "next/image";
import useDeviceDetect from "../../utils/useDeviceDetect";

import { Container, Button, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/Services.module.css";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

export function Services(props) {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      {isMobile ? (
        <div>
          <Image
            src={props.image}
            className={styles.cardBoxOverlay}
            alt={props.altImage}
            style={{
              width: "100%",
              height: "30vh",
              objectFit: "cover",
            }}
          />
          <h1
            className="mt-3 fw-bold text-center"
            style={{
              color: "#444654",
            }}
          >
            {props.title}
          </h1>

          <Container>
            <p className="mt-4 fs-5">{props.mainContent}</p>
            <Container>
              <ListGroup className="d-flex m-auto mt-2">
                {props.listContent.map((item) => (
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      <FontAwesomeIcon
                        icon={props.icon}
                        className={styles.mobileIcon}
                      />
                    </div>

                    <ListGroup.Item key={item} className={styles.listItem}>
                      <strong> {item.title}</strong>
                      {item.content}
                    </ListGroup.Item>
                  </div>
                ))}
              </ListGroup>
            </Container>
          </Container>

          <div className={styles.lightPeachBG}>
            <Container className="d-flex flex-column">
              <h3 className="mt-4 fw-bold text-center">
                {props.secondaryContent}
              </h3>
              <Container>
                <ListGroup className="d-flex m-auto mt-2">
                  {props.secondaryListContent.map((item) => (
                    <div className="d-flex flex-row align-items-center">
                      <div>
                        <FontAwesomeIcon
                          icon={faSquareCheck}
                          className={styles.checkIcon}
                        />
                      </div>
                      <ListGroup.Item key={item} className={styles.listItem}>
                        <strong> {item.title}</strong>
                        {item.content}
                      </ListGroup.Item>
                    </div>
                  ))}
                </ListGroup>
              </Container>
            </Container>
          </div>
          <Container className="d-flex flex-column">
            <p className="text-center mt-4 fs-6">{props.contactStatement}</p>

            <Button
              href="/contact"
              className="w-75 m-auto fw-bold mt-2"
              variant="dark"
            >
              Contact Us
            </Button>
          </Container>
        </div>
      ) : (
        // Browser
        <div className="d-flex align-items-center flex-column position-relative">
          <Image
            src={props.image}
            className={styles.cardBoxOverlay}
            alt={props.altImage}
            style={{
              width: "100%",
              height: "50vh",
              objectFit: "cover",
            }}
          />

          <h1
            className="mt-3 fw-bold"
            style={{
              color: "#444654",
            }}
          >
            {props.title}
          </h1>
          <p className="w-75 mt-4 text-center fs-5">{props.mainContent}</p>
          <ListGroup className="w-50 mt-2">
            {props.listContent.map((item) => (
              <div className="d-flex flex-row align-items-center">
                <div>
                  <FontAwesomeIcon icon={props.icon} className={styles.icon} />
                </div>
                <ListGroup.Item key={item} className={styles.listItem}>
                  <strong> {item.title}</strong>
                  {item.content}
                </ListGroup.Item>
              </div>
            ))}
          </ListGroup>
          <div className={styles.lightPeachBG}>
            <h3 className="mt-4 text-center fw-bold">
              {props.secondaryContent}
            </h3>
            <ListGroup className="w-50 mt-2 m-auto">
              {props.secondaryListContent.map((item) => (
                <div className="d-flex flex-row align-items-center">
                  <div>
                    <FontAwesomeIcon
                      icon={faSquareCheck}
                      className={styles.checkIcon}
                    />
                  </div>
                  <ListGroup.Item key={item} className={styles.listItem}>
                    <strong> {item.title}</strong>
                    {item.content}
                  </ListGroup.Item>
                </div>
              ))}
            </ListGroup>
          </div>
          <p className="w-50 text-center mt-4 fs-6">{props.contactStatement}</p>

          <Button href="/contact" className="fw-bold" variant="dark">
            Contact Us
          </Button>
        </div>
      )}
    </>
  );
}
