import React from "react";
import Image from "next/image";
import useDeviceDetect from "../../utils/useDeviceDetect";
import { Container } from "react-bootstrap";
import HomeHeroImage from "../../public/Images/HomeHeroImage.jpg";

import styles from "../../styles/Home.module.css";

export function HomeIntro() {
  const { isMobile } = useDeviceDetect();

  return (
    <>
      {isMobile ? (
        <>
          <div className="d-flex align-items-center flex-column position-relative">
            <Image
              src={HomeHeroImage}
              className={styles.cardBoxOverlay}
              alt="Image by Md Nurunnobi from Pixabay"
              style={{
                width: "100%",
                height: "40vh",
                objectFit: "cover",
              }}
            />
            <h1
              className="mt-3 fw-bold text-center"
              style={{
                color: "#FFF",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
            >
              GeorgiaLina Services
            </h1>
          </div>
          <Container className="w-75 mt-3 mb-5">
            <p className="fs-4 text-center">
              Helping people in Georgia and South Carolina find Indoor and
              Outdoor Services because finding services shouldn't be hard. Let{" "}
              <strong>experts</strong> help you find the right people for the
              right job!
            </p>
          </Container>
        </>
      ) : (
        // Browser
        <>
          <div className="d-flex align-items-center flex-column position-relative">
            <Image
              src={HomeHeroImage}
              className={styles.cardBoxOverlay}
              alt="Image by Md Nurunnobi from Pixabay"
              style={{
                width: "100%",
                height: "70vh",
                objectFit: "cover",
              }}
            />
            <h1
              className="mt-3 fw-bold"
              style={{
                color: "#FFF",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
              }}
            >
              GeorgiaLina Services
            </h1>
          </div>
          <Container className="w-75 mt-3 mb-5">
            <p className="fs-4 text-center">
              Helping people in Georgia and South Carolina find Indoor and
              Outdoor Services because finding services shouldn't be hard. Let{" "}
              <strong>experts</strong> help you find the right people for the
              right job!
            </p>
          </Container>
        </>
      )}
    </>
  );
}
