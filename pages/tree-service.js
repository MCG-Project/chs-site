import React from "react";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import TreeServices from "../public/Images/TreeServices.jpg";
import { faTrowel } from "@fortawesome/free-solid-svg-icons";
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
        socialImage={TreeServices}
        canonical={MetaTagSEOData[6].canonical}
      />
      <Services
        title={serviceData[4].title}
        image={TreeServices}
        icon={faTrowel}
        altImage={serviceData[4].altImage}
        mainContent={serviceData[4].mainContent}
        listContent={serviceData[4].listContent}
        secondaryContent={serviceData[4].secondaryContent}
        secondaryListContent={serviceData[4].secondaryListContent}
        contactStatement={serviceData[4].contactStatement}
      />
    </>
  );
}
