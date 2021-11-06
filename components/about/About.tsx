import { useTranslation, Trans } from "next-i18next";
import styles from "./About.module.scss";
import { IoBookSharp } from "react-icons/io5";
import { GiLightBulb, GiHumanPyramid } from "react-icons/gi";

const About = () => {
  const { t } = useTranslation("common");
  return (
    <section className={styles.aboutWrapper}>
      <p className={styles.aboutHeader}>{t("about")}</p>
      <h2 className={styles.aboutDescription}>
        <Trans i18nKey="banner.subtitle">
          my goal is <span>your satisfaction</span>.
        </Trans>
      </h2>
      <div className={styles.aboutInnerWrapper}>
        <div className={styles.aboutIconBoxWrapper}>
          <div className={styles.aboutIconBoxPrimary}>
            <IoBookSharp size="50px" />
          </div>
          <h2 className={styles.aboutIconBoxTitle}>{t("academics.title")}</h2>
          <p className={styles.aboutIconBoxDescription}>
            {t("academics.description")}
          </p>
        </div>
        <div className={styles.aboutIconBoxWrapper}>
          <div className={styles.aboutIconBoxSecondary}>
            <GiLightBulb size="50px" />
          </div>
          <h2 className={styles.aboutIconBoxTitle}>{t("experience.title")}</h2>
          <p className={styles.aboutIconBoxDescription}>
            {t("experience.description")}
          </p>
        </div>
        <div className={styles.aboutIconBoxWrapper}>
          <div className={styles.aboutIconBoxTertiary}>
            <GiHumanPyramid size="50px" />
          </div>
          <h2 className={styles.aboutIconBoxTitle}> {t("attitude.title")}</h2>
          <p className={styles.aboutIconBoxDescription}>
            <Trans i18nKey="attitude.description">
              Cut the middlemen - <span>I will translate</span> your texts
              directly for you and will ensure they reflect exactly what you
              stand for. I apply the same rules in my work as a teacher. I want
              my students to feel appreciated, to make tangible and relevant
              progress as they learn a foreign language.
            </Trans>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
