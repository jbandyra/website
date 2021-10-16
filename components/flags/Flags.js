import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styles from "./Flags.module.scss";

const Flags = () => {
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) {
      return;
    }
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("./flags2.json"),
    });
  }, []);
  return <div className={styles.flagsWrapper} ref={container} />;
};

export default Flags;
