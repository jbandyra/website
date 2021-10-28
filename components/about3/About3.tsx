import styles from "./About3.module.scss";
import { useTranslation } from "next-i18next";

const About3 = () => {
  const { t } = useTranslation("common");
  return (
    <section className={styles.aboutWrapper}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>{t("history.title")}</h2>
        <p className={styles.description}>{t("history.description")}</p>
      </div>
      <div className={styles.wrapperSecond}>
        <h2 className={styles.heading}>{t("competence.title")}</h2>
        <p className={styles.description}>{t("competence.description")}</p>
      </div>
    </section>
  );
};

export default About3;
