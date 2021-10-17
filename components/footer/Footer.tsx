import styles from "./Footer.module.scss";
import Image from "next/image";
import Logo from "@assets/logo.png";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";

const Footer = () => {
  return (
    <section className={styles.footerWrapper}>
      <div className={styles.footerInnerWrapper}>
        <div className={styles.logoWrapper}>
          <Image src={Logo} width="80px" height="80px" alt="Logo" />
        </div>
        <div>
          <h3>Skontaktuj się ze mną!</h3>
          <ul>
            <li>
              <GrMail size="20px" />
              email: jbandyra@icloud.com
            </li>
            <li>
              <BsFillTelephoneFill size="20px" />
              tel: +48 694 971 883
            </li>
            <li>
              <SiDiscord size="20px" /> discord: liquify#7725
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
