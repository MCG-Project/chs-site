import React from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import PlumbingImage from "../public/Images/PlumbingImage.jpg";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { Services } from "../components/Services/Services";
import { serviceData } from "../components/Services/ServicesData";

export default function Plumbing() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[3].tab}
        description={MetaTagSEOData[3].description}
        keywords={MetaTagSEOData[3].keywords}
        socialTitle={MetaTagSEOData[3].socialTitle}
        socialDescription={MetaTagSEOData[3].socialDescription}
        socialImage={PlumbingImage}
      />
      <Services
        title={serviceData[3].title}
        image={PlumbingImage}
        icon={faHammer}
        altImage={serviceData[3].altImage}
        mainContent={serviceData[3].mainContent}
        listContent={serviceData[3].listContent}
        secondaryContent={serviceData[3].secondaryContent}
        secondaryListContent={serviceData[3].secondaryListContent}
        contactStatement={serviceData[3].contactStatement}
      />
    </>
  );
}
