import Image from "next/image";
import styles from "./Project.module.scss";
import { useTranslation } from "next-i18next";

const Project = ({ project, locale }) => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.projectWrapper}>
      <div className={styles.projectTextWrapper}>
        <h1>{project[`title_${locale}`]}</h1>
        <p>{project[`description_${locale}`]}</p>
        <a href={project.url} target="_blank">
          {t("myprojects.more")}
        </a>
      </div>
      <div className={styles.projectImageWrapper}>
        <Image
          src={`/projects/${project.large_image}`}
          width="1280px"
          height="720px"
          layout="fill"
          objectFit="cover"
        />{" "}
      </div>
    </div>
  );
};

export default Project;
