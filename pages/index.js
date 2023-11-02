import React from "react";
import { NavBar } from "../components/NavBar/NavBar";
import { HomeMain } from "../components/Home/HomeMain";
import { HomeMap } from "../components/Home/HomeMap";
import { homeMainData, homeMapData } from "../components/Home/HomeData";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import HomeHeroImage from "../public/Images/HomeHeroImage.jpg";
import ServiceMap from "../public/Images/ServiceMap.png";
import IndoorServicesImage from "../public/Images/IndoorServicesImage.jpg";
import Garden from "../public/Images/Garden.jpg";
import { HomeIntro } from "../components/Home/HomeIntro";
import { Footer } from "../components/Footer/Footer";

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

      <NavBar />
      <HomeIntro />
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
      <Footer />
    </>
  );
}
