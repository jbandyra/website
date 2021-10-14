import styles from "./About2.module.scss";

const About2 = () => {
  return (
    <section id="about" className={styles.aboutWrapper}>
      <div className={styles.imgWrapper} />
      <div className={styles.textWrapper}>
        <h2>
          Jakub <strong>Bandyra</strong>
          <p>
            Twórca działalności, nauczyciel, magister filologii angielskiej,
            translatoryk
          </p>
        </h2>
      </div>
    </section>
  );
};

export default About2;
