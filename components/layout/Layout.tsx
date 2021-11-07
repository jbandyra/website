import { ReactNode } from "react";
import { NextSeo } from "next-seo";

import Header from "@components/header/Header";
import Footer from "@components/footer/Footer";
import { useDarkMode } from "@hooks/useDarkMode";
import { LocaleProvider } from "@hooks/useLocaleSwitch";
import { useTranslation } from "next-i18next";

type LayoutProps = {
  title?: string;
  description?: string;
  children: ReactNode;
  secondary?: boolean;
};

const Layout = ({ title, description, children, secondary }: LayoutProps) => {
  const { t } = useTranslation("common");
  const [isDarkModeOn, toggleDarkMode] = useDarkMode();

  return (
    <LocaleProvider>
      <NextSeo
        title={title ?? t("website.title")}
        description={description ?? t("website.description")}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
      />
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
