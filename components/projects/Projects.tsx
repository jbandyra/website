import styles from "./Projects.module.scss";
import Image from "next/image";
import DesolationPicture from "@public/desolation.jpeg";

const Projects = () => {
  return (
    <div className={styles.projectsWrapper}>
      <h2>
        Moje <span>projekty</span>
      </h2>
      <p>
        poznaj moje dotychczasowe prace i partnerów, którzy z dumą prezentują
        efekty naszej współpracy.
      </p>
      <div className={styles.projectsImagesWrapper}>
        <div className={styles.projectImageWrapper}>
          <div className={styles.projectImage}>
            <Image src={DesolationPicture} layout="responsive" />
          </div>
          <button>dowiedz się więcej</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
