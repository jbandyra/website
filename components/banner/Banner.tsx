import React from "react";
import { useTranslation, Trans } from "next-i18next";
import styles from "./Banner.module.scss";
import Flags from "../flags/Flags";

const Banner = () => {
  const { t } = useTranslation("common");
  return (
    <section className={styles.bannerWrapper} id="home">
      <div className={styles.bannerInnerWrapper}>
        <div className={styles.bannerTextWrapper}>
          <h1 className={styles.bannerHeader}>{t("banner.title")}</h1>
          <p className={styles.bannerDescription}>
            <Trans i18nKey="banner.subtitle">
              my goal is <span>your satisfaction</span>.
            </Trans>
          </p>
        </div>
        <Flags />
      </div>
    </section>
  );
};

export default Banner;
