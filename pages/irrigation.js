import React from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import IrrigationImage from "../public/Images/IrrigationImage.jpg";
import { faTrowel } from "@fortawesome/free-solid-svg-icons";
import { Services } from "../components/Services/Services";
import { serviceData } from "../components/Services/ServicesData";

export default function Irrigation() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[1].tab}
        description={MetaTagSEOData[1].description}
        keywords={MetaTagSEOData[1].keywords}
        socialTitle={MetaTagSEOData[1].socialTitle}
        socialDescription={MetaTagSEOData[1].socialDescription}
        socialImage={IrrigationImage}
      />

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
