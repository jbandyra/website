import { useState, useEffect } from "react";
import Image from "next/image";

import Logo from "@assets/logo.png";
import LogoDark from "@assets/logo-dark.png";
import styles from "./Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscClose } from "react-icons/vsc";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const Header = ({ isDarkModeOn, handleDarkModeToggle }) => {
  const [offsetY, setOffsetY] = useState(0);
  const [isMobileNavOn, setMobileNav] = useState(false);
  const menuItems = [
    { label: "Strona Główna", path: "#" },
    { label: "O mnie", path: "#about" },
    { label: "Kontakt", path: "#contact" },
    {
      label: isDarkModeOn ? "☀️" : "🌙",
      onClick: () => handleDarkModeToggle(),
      styles: styles.navDarkToggle,
    },
  ];
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
    <>
      <nav className={getNavStyles()}>
        <div className={styles.headerInnerWrapper}>
          <Image
            src={offsetY > 75 && !isDarkModeOn ? LogoDark : Logo}
            width="60px"
            height="60px"
            alt="Logo"
          />
          <ul
            className={
              offsetY > 75 ? styles.headerListSticky : styles.headerList
            }
          >
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                onClick={() => (item.onClick ? item.onClick() : null)}
                className={item.styles ?? null}
              >
                {item.label}
              </li>
            ))}
          </ul>
          <div
            className={
              offsetY > 75 ? styles.headerHamburgerDark : styles.headerHamburger
            }
          >
            <GiHamburgerMenu size="32px" onClick={() => setMobileNav(true)} />
          </div>
        </div>
      </nav>
      <div className={isMobileNavOn ? styles.menuOpen : styles.menu}>
        <VscClose
          className={offsetY > 75 ? styles.closeIcon : styles.closeIconDark}
          size="44px"
          onClick={() => setMobileNav(false)}
        />
        <ul>
          {menuItems.map((item, idx) => (
            <li
              key={idx}
              onClick={() => (item.onClick ? item.onClick() : null)}
              className={
                item.styles ?? offsetY > 290 ? styles.darkListItem : ""
              }
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
