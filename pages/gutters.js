import React from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import Gutters from "../public/Images/Gutters.jpg";
import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { Services } from "../components/Services/Services";
import { serviceData } from "../components/Services/ServicesData";

export default function TreeService() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[6].tab}
        description={MetaTagSEOData[6].description}
        keywords={MetaTagSEOData[6].keywords}
        socialTitle={MetaTagSEOData[6].socialTitle}
        socialDescription={MetaTagSEOData[6].socialDescription}
        socialImage={Gutters}
        canonical={MetaTagSEOData[6].canonical}
      />
      <Services
        title={serviceData[5].title}
        image={Gutters}
        icon={faHammer}
        altImage={serviceData[5].altImage}
        mainContent={serviceData[5].mainContent}
        listContent={serviceData[5].listContent}
        secondaryContent={serviceData[5].secondaryContent}
        secondaryListContent={serviceData[5].secondaryListContent}
        contactStatement={serviceData[5].contactStatement}
      />
    </>
  );
}
