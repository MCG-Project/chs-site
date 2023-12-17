import React from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import LandscapingImage from "../public/Images/LandscapingImage.png";
import { faTrowel } from "@fortawesome/free-solid-svg-icons";
import { Services } from "../components/Services/Services";
import { serviceData } from "../components/Services/ServicesData";

export default function Landscaping() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[2].tab}
        description={MetaTagSEOData[2].description}
        keywords={MetaTagSEOData[2].keywords}
        socialTitle={MetaTagSEOData[2].socialTitle}
        socialDescription={MetaTagSEOData[2].socialDescription}
        socialImage={LandscapingImage}
        canonical={MetaTagSEOData[2].canonical}
      />
      <Services
        title={serviceData[1].title}
        image={LandscapingImage}
        icon={faTrowel}
        altImage={serviceData[1].altImage}
        mainContent={serviceData[1].mainContent}
        listContent={serviceData[1].listContent}
        secondaryContent={serviceData[1].secondaryContent}
        secondaryListContent={serviceData[1].secondaryListContent}
        contactStatement={serviceData[1].contactStatement}
      />
    </>
  );
}
