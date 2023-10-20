import React from "react";
import Head from "next/head";
import LandscapingImage from "../public/Images/LandscapingImage.png";
import { faTrowel } from "@fortawesome/free-solid-svg-icons";
import { Services } from "../components/Services/Services";
import { serviceData } from "../components/Services/ServicesData";

export default function Landscaping() {
  return (
    <>
      <Head>
        <title>GeorgiaLina | Landscaping</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Services
        title={serviceData[1].title}
        image={LandscapingImage}
        icon={faTrowel}
        altImage={serviceData[1].altImage}
        mainContent={serviceData[1].mainContent}
        listContent={serviceData[1].listContent}
        secondaryContent={serviceData[1].secondaryContent}
      />
    </>
  );
}
