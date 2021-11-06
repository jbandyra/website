import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

import Logo from "@assets/logo.png";
import LogoDark from "@assets/logo-dark.png";
import styles from "./Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscClose } from "react-icons/vsc";

import { useLocale } from "@hooks/useLocaleSwitch";

const Header = ({ isDarkModeOn, handleDarkModeToggle, secondary = false }) => {
  const { switchLocale, localeEmoji } = useLocale();

  const { t } = useTranslation("common");

  const [offsetY, setOffsetY] = useState(0);
  const [isMobileNavOn, setMobileNav] = useState(false);

  const menuItems = [
    { label: t("home"), path: "/#home" },
    { label: t("about"), path: "/#about" },
    { label: t("contact"), path: "/#contact" },
    {
      label: isDarkModeOn ? "☀️" : "🌙",
      onClick: () => handleDarkModeToggle(),
      styles: styles.navDarkToggle,
      mobileNavDisabled: true,
    },
    {
      label: localeEmoji,
      onClick: switchLocale,
      styles: styles.navDarkToggle,
      mobileNavDisabled: true,
    },
  ];
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (isMobileNavOn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileNavOn]);

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
          <Link href="/">
            <a>
              <Image
                src={
                  (offsetY > 75 && !isDarkModeOn) ||
                  (secondary && !isDarkModeOn)
                    ? LogoDark
                    : Logo
                }
                width="60px"
                height="60px"
                alt="Logo"
              />
            </a>
          </Link>
          <ul
            className={
              offsetY > 75 || secondary
                ? styles.headerListSticky
                : styles.headerList
            }
          >
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                onClick={() => (item.onClick ? item.onClick() : null)}
                className={item.styles ?? null}
              >
                {item.path ? (
                  <Link href={item.path}>{item.label}</Link>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
          <div
            className={
              offsetY > 75 || secondary
                ? styles.headerHamburgerDark
                : styles.headerHamburger
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
          {menuItems.map((item, idx) =>
            !item.mobileNavDisabled ? (
              <li
                key={idx}
                onClick={() => setMobileNav(false)}
                className={
                  item.styles ?? offsetY > 290 ? styles.darkListItem : ""
                }
              >
                <Link href={item.path}>{item.label}</Link>
              </li>
            ) : null
          )}
        </ul>
      </div>
    </>
  );
};

export default Header;
