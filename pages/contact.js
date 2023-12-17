import React from "react";
import { ContactForm } from "../components/Contact/ContactForm";
import { ContactMain } from "../components/Contact/ContactMain";
import { MetaTag } from "../components/MetaTag/MetaTag";
import { MetaTagSEOData } from "../components/MetaTag/SEOData";
import LawnCare from "../public/Images/LawnCare.jpg";

export default function Contact() {
  return (
    <>
      <MetaTag
        tab={MetaTagSEOData[5].tab}
        description={MetaTagSEOData[5].description}
        keywords={MetaTagSEOData[5].keywords}
        socialTitle={MetaTagSEOData[5].socialTitle}
        socialDescription={MetaTagSEOData[5].socialDescription}
        socialImage={LawnCare}
        canonical={MetaTagSEOData[5].canonical}
      />
      <ContactMain />
      <ContactForm />
    </>
  );
}
