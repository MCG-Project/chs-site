import React from "react";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { NavBar } from "../components/NavBar/NavBar";
import styles from "../styles/_app.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-0TZEX1L36C"
      />
      <Script strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', 'G-0TZEX1L36C');
        `}
      </Script>
      <Analytics />
      <NavBar />
      <div id={styles.container}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
