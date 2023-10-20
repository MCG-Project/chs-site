import React from "react";
import Head from "next/head";
import IrrigationImage from "../public/Images/IrrigationImage.jpg";
import { faTrowel } from "@fortawesome/free-solid-svg-icons";
import { Services } from "../components/Services/Services";
import { serviceData } from "../components/Services/ServicesData";

export default function Irrigation() {
  return (
    <>
      <Head>
        <title>GeorgiaLina | Irrigation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Services
        title={serviceData[0].title}
        image={IrrigationImage}
        altImage={serviceData[0].altImage}
        icon={faTrowel}
        mainContent={serviceData[0].mainContent}
        listContent={serviceData[0].listContent}
        secondaryContent={serviceData[0].secondaryContent}
      />
    </>
  );
}
