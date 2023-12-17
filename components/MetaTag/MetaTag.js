import React from "react";
import Head from "next/head";

export function MetaTag(props) {
  const canonicalUrl = "https://www.georgialinaservices.com";

  // Local Business Schema
  const localBusinessSchema = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    name: "GeorgiaLina Services",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1689 Jamestown Ave",
      addressLocality: "Evans",
      addressRegion: "GA",
      postalCode: "30809",
      addressCountry: "United States",
    },
    telephone: "413-351-1895",
    url: canonicalUrl,
  };

  return (
    <>
      <Head>
        <title>{`GeorgiaLina | ${props.tab}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="UTF-8" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={props.socialTitle} />
        <meta property="og:description" content={props.socialDescription} />
        <meta property="og:image" content={props.socialImage} />
        <meta
          name="google-site-verification"
          content="E4JGC4MdiTnCPbqundvLefYmLwjE7of0Qd3ph4nQTz4"
        />

        {/* Canonical tag */}
        <link rel="canonical" href={`${canonicalUrl}${props.canonical}`} />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </Head>
    </>
  );
}
