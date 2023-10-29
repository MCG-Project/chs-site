import React from "react";
import Head from "next/head";

export function MetaTag(props) {
  return (
    <>
      <Head>
        <title>GeorigaLina | {props.tab}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="UTF-8" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={props.socialTitle} />
        <meta property="og:description" content={props.socialDescription} />
        <meta property="og:image" content={props.socialImage} />
      </Head>
    </>
  );
}
