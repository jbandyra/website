import styles from "./About2.module.scss";
import { useTranslation } from "next-i18next";

const About2 = () => {
  const { t } = useTranslation("common");
  return (
    <section id="about" className={styles.aboutWrapper}>
      <div className={styles.imgWrapper} />
      <div className={styles.textWrapper}>
        <h2>
          Jakub <strong>Bandyra</strong>
        </h2>
        <p>{t("aboutJake")}</p>
      </div>
    </section>
  );
};

export default About2;
