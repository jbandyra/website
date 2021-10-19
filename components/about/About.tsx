import { useTranslation, Trans } from "next-i18next";
import styles from "./About.module.scss";
import { IoBookSharp } from "react-icons/io5";
import { GiLightBulb, GiHumanPyramid } from "react-icons/gi";

const About = () => {
  const { t } = useTranslation("common");
  return (
    <section id="about" className={styles.aboutWrapper}>
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
          <h2 className={styles.aboutIconBoxTitle}>Wykształcenie</h2>
          <p className={styles.aboutIconBoxDescription}>
            Stopień magistra Uniwersytetu Warszawskiego w dziedzinach
            translatoryki i pedagogiki nauczania języków obcych.
          </p>
        </div>
        <div className={styles.aboutIconBoxWrapper}>
          <div className={styles.aboutIconBoxSecondary}>
            <GiLightBulb size="50px" />
          </div>
          <h2 className={styles.aboutIconBoxTitle}>Doświadczenie</h2>
          <p className={styles.aboutIconBoxDescription}>
            Wiele lat doświadczenia w sektorze edukacji oraz stażu w roli
            tłumacza pisemnego i lokalizatora gier.
          </p>
        </div>
        <div className={styles.aboutIconBoxWrapper}>
          <div className={styles.aboutIconBoxTertiary}>
            <GiHumanPyramid size="50px" />
          </div>
          <h2 className={styles.aboutIconBoxTitle}>Podejście</h2>
          <p className={styles.aboutIconBoxDescription}>
            {/* TODO add bold spans */}
            Bez pośredników - przetłumaczę Twoje treści bezpośrednio dla Ciebie
            i zadbam, aby wiernie reprezentowały Twój zamysł. Twój zamysł.
            Identyczna idea przyświeca mi w roli nauczyciela. Chcę, aby każdy z
            moich uczniów czuł się doceniony, aby dokonywał wymiernych i
            istotnych postępów w nauce języka.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
