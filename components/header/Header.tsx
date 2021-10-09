import { useState, useEffect } from "react";

import Image from "next/image";

import Logo from "@/assets/logo.png";
import LogoDark from "@/assets/logo-dark.png";
import styles from "./Header.module.scss";

const menuItems = [
  { label: "Strona Główna", path: "#" },
  { label: "O mnie", path: "#about" },
  { label: "Kontakt", path: "#contact" },
];

const Header = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getNavStyles = () => {
    switch (true) {
      case offsetY > 200:
        return styles.headerWrapperStickyFifth;
      case offsetY > 125:
        return styles.headerWrapperStickyFourth;
      case offsetY > 75:
        return styles.headerWrapperStickyThird;
      case offsetY > 50:
        return styles.headerWrapperStickySecond;
      case offsetY > 1:
        return styles.headerWrapperStickyFirst;
      default:
        return styles.headerWrapper;
    }
  };

  return (
    <nav className={getNavStyles()}>
      <div className={styles.headerInnerWrapper}>
        <Image
          src={offsetY > 75 ? LogoDark : Logo}
          width="60px"
          height="60px"
          alt="Logo"
        />
        <ul
          className={offsetY > 75 ? styles.headerListSticky : styles.headerList}
        >
          {menuItems.map((item) => (
            <li key={item.path}>{item.label}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
