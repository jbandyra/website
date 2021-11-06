import styles from "./Projects.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Trans, useTranslation } from "next-i18next";

const Projects = ({ projects }) => {
  const { t } = useTranslation("common");
  return (
    <div className={styles.projectsWrapper}>
      <h2>
        <Trans i18nKey="myprojects.title">
          my <span>projects</span>.
        </Trans>
      </h2>

      <p>{t("myprojects.description")}</p>
      <div className={styles.projectsInnerWrapper}>
        {projects.map((project) => (
          <div className={styles.projectImageWrapper}>
            <Image
              src={`/projects/${project.image}`}
              layout="fill"
              objectFit="cover"
            />
            <Link href={`/projects/${project.slug}`}>
              <a>{t("myprojects.more")}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
