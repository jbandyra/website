import { createContext, useContext } from "react";
import { useRouter } from "next/router";

const LocaleContext = createContext(null);

export const useLocale = () => useContext(LocaleContext);

export const LocaleProvider = ({ children }) => {
  const router = useRouter();
  const { locale, pathname, asPath, query } = router;
  const toPL = () => router.push({ pathname, query }, asPath, { locale: "pl" });
  const toEN = () => router.push({ pathname, query }, asPath, { locale: "en" });
  const switchLocale = () => (locale === "pl" ? toEN() : toPL());
  const localeEmoji = locale === "pl" ? "🇬🇧️" : "🇵🇱";
  return (
    <LocaleContext.Provider value={{ locale, switchLocale, localeEmoji }}>
      {children}
    </LocaleContext.Provider>
  );
};

// And use it like;

// const App = () => {
//   return (
//     <SomeProvider>
//       <div>
//         <p>This is my app!</p>
//         <Main />
//       </div>
//     </SomeProvider>
//   );
// };
//
// const Main = () => {
//   const { someState, setSomeState } = useSomeContext();
//
//   return <p>{someState}</p>;
// };
