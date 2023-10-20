import React from "react";
import Head from "next/head";
import RetainingWallImage from "../public/Images/RetainingWallImage.jpg";
import { faTrowel } from "@fortawesome/free-solid-svg-icons";
import { Services } from "../components/Services/Services";
import { serviceData } from "../components/Services/ServicesData";

export default function RetainingWall() {
  return (
    <>
      <Head>
        <title>GeorgiaLina | Landscaping</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Services
        title={serviceData[2].title}
        image={RetainingWallImage}
        icon={faTrowel}
        altImage={serviceData[2].altImage}
        mainContent={serviceData[2].mainContent}
        listContent={serviceData[2].listContent}
        secondaryContent={serviceData[2].secondaryContent}
      />
    </>
  );
}
