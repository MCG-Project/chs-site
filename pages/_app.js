import React from "react";
import { Analytics } from "@vercel/analytics/react";
import styles from "../styles/_app.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Analytics />
      <div id={styles.container}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
