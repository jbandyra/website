import styles from "./About.module.scss";

const About = () => {
  return (
    <section id="about" className={styles.aboutWrapper}>
      <p className={styles.aboutmeText}>O mnie</p>
      <h2 className={styles.aboutmeDescription}>
        moim celem jest Twoja satysfakcja
      </h2>
    </section>
  );
};

export default About;
