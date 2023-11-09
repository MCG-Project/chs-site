import React from "react";
import { Analytics } from "@vercel/analytics/react";
import { NavBar } from "../components/NavBar/NavBar";
import styles from "../styles/_app.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
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
