import React from "react";
import styles from "./Banner.module.scss";
import Flags from "../flags/Flags";

const Banner = () => {
  return (
    <section className={styles.bannerWrapper} id="home">
      <div className={styles.bannerInnerWrapper}>
        <div className={styles.bannerTextWrapper}>
          <h1 className={styles.bannerHeader}>
            Twój tłumacz i lektor języka angielskiego
          </h1>
          <p className={styles.bannerDescription}>
            moim celem jest <span>Twoja satysfakcja</span>.
          </p>
        </div>
        <Flags />
      </div>
    </section>
  );
};

export default Banner;
