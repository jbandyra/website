import { ReactChildren, ReactNode, useState } from "react";
import { useRouter } from "next/router";
import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import { useDarkMode } from "@hooks/useDarkMode";
import { LocaleProvider } from "@hooks/useLocaleSwitch";

type LayoutProps = {
  children: ReactNode;
  secondary?: boolean;
};

const Layout = ({ children, secondary }: LayoutProps) => {
  const [isDarkModeOn, toggleDarkMode] = useDarkMode();

  return (
    <LocaleProvider>
      <div
        className={`layout ${isDarkModeOn ? "dark" : ""}`}
        style={{ overflow: "hidden" }}
      >
        <Header
          isDarkModeOn={isDarkModeOn}
          handleDarkModeToggle={toggleDarkMode}
          secondary={secondary}
        />
        {children}
        <Footer />
      </div>
    </LocaleProvider>
  );
};

export default Layout;
