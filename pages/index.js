import { HomeMain } from "../components/Home/HomeMain";
// import { HomeVideo } from "../components/Home/HomeVideo";
// import { HomeCard } from "../components/Home/HomeCard";
// import { HomeAbout } from "../components/Home/HomeAbout";
import { homeMainData } from "../components/Home/HomeData";

import Head from "next/head";
import Image from "next/image";
import HomeHeroImage from "../public/Images/HomeHeroImage.jpg";
import IrrigationImage from "../public/Images/IrrigationImage.jpg";
import Garden from "../public/Images/Garden.jpg";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>GeorigaLina | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          GeorgiaLina Services
        </h1>
        <h3
          className="mb-3 fw-bold text-center"
          style={{
            color: "#FFF",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          Helping Those in Georgia and South Carolina find Home and Commercial
          Services
        </h3>
      </div>
      <HomeMain
        titleContent={homeMainData[0].titleContent}
        image={IrrigationImage}
        imageAlt={homeMainData[0].imageAlt}
        textContent={homeMainData[0].textContent}
      />
      <HomeMain
        titleContent={homeMainData[1].titleContent}
        image={Garden}
        imageAlt={homeMainData[1].imageAlt}
        textContent={homeMainData[1].textContent}
        divColor={homeMainData[1].divColor}
      />
      {/* <HomeVideo />
      <HomeCard />
      <HomeAbout /> */}
    </>
  );
}
