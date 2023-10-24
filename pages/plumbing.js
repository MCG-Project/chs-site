import React from "react";
import Head from "next/head";
import LandscapingImage from "../public/Images/LandscapingImage.png";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { Services } from "../components/Services/Services";
import { serviceData } from "../components/Services/ServicesData";

export default function Plumbing() {
  return (
    <>
      <Head>
        <title>GeorgiaLina | Plumbing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Services
        title={serviceData[3].title}
        image={LandscapingImage}
        icon={faHammer}
        altImage={serviceData[3].altImage}
        mainContent={serviceData[3].mainContent}
        listContent={serviceData[3].listContent}
        secondaryContent={serviceData[3].secondaryContent}
      />
    </>
  );
}
