import { createContext, useContext } from "react";
import { useRouter } from "next/router";
import ReactCountryFlag from "react-country-flag";

const LocaleContext = createContext(null);

export const useLocale = () => useContext(LocaleContext);

export const LocaleProvider = ({ children }) => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const toPL = () =>
    router.push({ pathname, query }, asPath, { locale: "pl", scroll: false });
  const toEN = () =>
    router.push({ pathname, query }, asPath, { locale: "en", scroll: false });
  const switchLocale = () => (locale === "pl" ? toEN() : toPL());
  const localeEmoji =
    locale === "pl" ? (
      <ReactCountryFlag countryCode="GB" svg />
    ) : (
      <ReactCountryFlag countryCode="PL" svg />
    );
  return (
    <LocaleContext.Provider value={{ locale, switchLocale, localeEmoji }}>
      {children}
    </LocaleContext.Provider>
  );
};
