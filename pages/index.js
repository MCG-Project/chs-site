import { HomeMain } from "../components/Home/HomeMain";
import { HomeMap } from "../components/Home/HomeMap";
import { homeMainData, homeMapData } from "../components/Home/HomeData";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import Image from "next/image";
import HomeHeroImage from "../public/Images/HomeHeroImage.jpg";
import ServiceMap from "../public/Images/ServiceMap.png";
import IndoorServicesImage from "../public/Images/IndoorServicesImage.jpg";
import Garden from "../public/Images/Garden.jpg";
import styles from "../styles/Home.module.css";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[0].tab}
        description={MetaTagSEOData[0].description}
        keywords={MetaTagSEOData[0].keywords}
        socialTitle={MetaTagSEOData[0].socialTitle}
        socialDescription={MetaTagSEOData[0].socialDescription}
        socialImage={HomeHeroImage}
      />
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
          Helping people in Georgia and South Carolina find Indoor and Outdoor
          Services because finding services shouldn't be hard. Let{" "}
          <strong>experts</strong> help you find the right people for the right
          job!
        </p>
      </Container>
      <HomeMap
        titleContent={homeMapData.titleContent}
        image={ServiceMap}
        imageAlt={homeMapData.imageAlt}
        textContent={homeMapData.textContent}
        list1Content={homeMapData.georgiaCities}
        list2Content={homeMapData.carolinaCities}
      />
      <HomeMain
        titleContent={homeMainData[0].titleContent}
        image={IndoorServicesImage}
        imageAlt={homeMainData[0].imageAlt}
        textContent={homeMainData[0].textContent}
        divColor={homeMainData[0].divColor}
      />
      <HomeMain
        titleContent={homeMainData[1].titleContent}
        image={Garden}
        imageAlt={homeMainData[1].imageAlt}
        textContent={homeMainData[1].textContent}
      />
    </>
  );
}
