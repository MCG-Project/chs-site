import React from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import RetainingWallImage from "../public/Images/RetainingWallImage.jpg";
import { faTrowel } from "@fortawesome/free-solid-svg-icons";
import { Services } from "../components/Services/Services";
import { serviceData } from "../components/Services/ServicesData";

export default function RetainingWall() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[0].tab}
        description={MetaTagSEOData[0].description}
        keywords={MetaTagSEOData[0].keywords}
        socialTitle={MetaTagSEOData[0].socialTitle}
        socialDescription={MetaTagSEOData[0].socialDescription}
        socialImage={RetainingWallImage}
        canonical={MetaTagSEOData[0].canonical}
      />
      <Services
        title={serviceData[2].title}
        image={RetainingWallImage}
        icon={faTrowel}
        altImage={serviceData[2].altImage}
        mainContent={serviceData[2].mainContent}
        listContent={serviceData[2].listContent}
        secondaryContent={serviceData[2].secondaryContent}
        secondaryListContent={serviceData[2].secondaryListContent}
        contactStatement={serviceData[2].contactStatement}
      />
    </>
  );
}
