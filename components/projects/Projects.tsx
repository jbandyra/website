import styles from "./Projects.module.scss";
import Image from "next/image";
import DesolationPicture from "@public/projects/desolation.jpeg";
import { Trans, useTranslation } from "next-i18next";
import React from "react";

const Projects = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.projectsWrapper}>
      <h2>
        <Trans i18nKey="myprojects.title">
          my <span>projects</span>.
        </Trans>
      </h2>
      <p>{t("myprojects.description")}</p>
      <div className={styles.projectsImagesWrapper}>
        <div className={styles.projectImageWrapper}>
          <div className={styles.projectImage}>
            <Image src={DesolationPicture} layout="responsive" />
          </div>
          <button>{t("myprojects.more")}</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
