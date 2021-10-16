import styles from "./About3.module.scss";

const About3 = () => {
  return (
    <section className={styles.aboutWrapper}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Moja historia 🕰</h2>
        <p className={styles.description}>
          Język angielski i kultura krajów anglosaskich od zawsze była źródłem
          mojej pasji, której chęć rozwoju przeprowadziła mnie przez kilka
          szczebli życia akademickiego, zawodowego i prywatnego. Rozpoczynając
          pracę w roli nauczyciela zdałem sobie sprawę jak ważna jest
          satysfakcja osób, z którymi pracuję. Każdy ich krok ku zwiększeniu
          kompetencji językowych jest dla mnie osobistym sukcesem. Nie inaczej
          jest w przypadku tłumaczeń. Każdy klient, któremu pomogłem w
          komunikacji z odbiorcą w obcym języku stanowi ogromną wartość
          motywującą mnie do dalszej pracy.
        </p>
      </div>
      <div className={styles.wrapperSecond}>
        <h2 className={styles.heading}>Moje kompetencje 🖋</h2>
        <p className={styles.description}>
          Posiadając wiele lat doświadczenia jako nauczyciel pozwoliło mi
          zrozumieć i rozwinąć zdolności interpersonalne, które pomagają mi nie
          tylko w przeprowadzaniu lekcji języka obcego, ale także w
          umiejętnościach komunikacji z klientem, jak i w wiernym oraz
          przekonującym przekładzie tekstów w języku polskim i angielskim.
        </p>
      </div>
    </section>
  );
};

export default About3;
