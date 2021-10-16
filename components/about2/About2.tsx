import styles from "./About2.module.scss";

const About2 = () => {
  return (
    <section id="about" className={styles.aboutWrapper}>
      <div className={styles.imgWrapper} />
      <div className={styles.textWrapper}>
        <h2>
          Jakub <strong>Bandyra</strong>
        </h2>
        <p>
          Twórca działalności, nauczyciel, magister filologii angielskiej,
          translatoryk
        </p>
      </div>
    </section>
  );
};

export default About2;
