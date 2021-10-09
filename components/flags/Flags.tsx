import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styles from "./Flags.module.scss";

const Flags = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: true,
      animationData: require("./flags.json"),
    });
  }, []);
  return <div className={styles.flagsWrapper} ref={container}></div>;
};

export default Flags;
